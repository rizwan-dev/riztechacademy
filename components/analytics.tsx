'use client';

import { SpeedInsights } from '@vercel/speed-insights/react';

// Only keep Speed Insights for performance monitoring
export function AnalyticsProvider() {
  return <SpeedInsights />;
}
