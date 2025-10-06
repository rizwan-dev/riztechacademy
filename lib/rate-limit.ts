interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store (in production, use Redis or similar)
const rateLimitStore: RateLimitStore = {};

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  keyGenerator?: (req: Request) => string; // Function to generate rate limit key
  skipSuccessfulRequests?: boolean; // Skip rate limiting for successful requests
  skipFailedRequests?: boolean; // Skip rate limiting for failed requests
}

export class RateLimiter {
  private options: RateLimitOptions;

  constructor(options: RateLimitOptions) {
    this.options = {
      keyGenerator: (req) => {
        // Use IP address as default key
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
        return ip;
      },
      ...options,
    };
  }

  async checkLimit(req: Request): Promise<{
    allowed: boolean;
    remaining: number;
    resetTime: number;
    totalRequests: number;
  }> {
    const key = this.options.keyGenerator!(req);
    const now = Date.now();
    const windowStart = now - this.options.windowMs;

    // Clean up expired entries
    Object.keys(rateLimitStore).forEach(k => {
      if (rateLimitStore[k].resetTime < now) {
        delete rateLimitStore[k];
      }
    });

    const entry = rateLimitStore[key];

    if (!entry || entry.resetTime < now) {
      // First request or window expired
      rateLimitStore[key] = {
        count: 1,
        resetTime: now + this.options.windowMs,
      };
      return {
        allowed: true,
        remaining: this.options.maxRequests - 1,
        resetTime: now + this.options.windowMs,
        totalRequests: 1,
      };
    }

    if (entry.count >= this.options.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime,
        totalRequests: entry.count,
      };
    }

    entry.count++;
    return {
      allowed: true,
      remaining: this.options.maxRequests - entry.count,
      resetTime: entry.resetTime,
      totalRequests: entry.count,
    };
  }
}

// Pre-configured rate limiters for common use cases
export const contactFormLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 3, // 3 contact form submissions per 15 minutes
});

export const apiLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 60, // 60 requests per minute
});

export const strictLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10, // 10 requests per minute for sensitive operations
});

// Middleware function for Next.js API routes
export async function withRateLimit(
  req: Request,
  limiter: RateLimiter,
  handler: () => Promise<Response>
): Promise<Response> {
  const limitResult = await limiter.checkLimit(req);

  if (!limitResult.allowed) {
    return new Response(
      JSON.stringify({
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil((limitResult.resetTime - Date.now()) / 1000),
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil((limitResult.resetTime - Date.now()) / 1000).toString(),
          'X-RateLimit-Limit': limiter['options'].maxRequests.toString(),
          'X-RateLimit-Remaining': limitResult.remaining.toString(),
          'X-RateLimit-Reset': Math.ceil(limitResult.resetTime / 1000).toString(),
        },
      }
    );
  }

  const response = await handler();

  // Add rate limit headers to successful responses
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('X-RateLimit-Limit', limiter['options'].maxRequests.toString());
  newResponse.headers.set('X-RateLimit-Remaining', limitResult.remaining.toString());
  newResponse.headers.set('X-RateLimit-Reset', Math.ceil(limitResult.resetTime / 1000).toString());

  return newResponse;
}

