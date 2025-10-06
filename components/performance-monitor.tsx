'use client';

import { useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

// Custom hook to monitor basic performance metrics
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor basic performance metrics without external dependencies
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      // Monitor resource loading for performance insights
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Only log slow resources
              const resourceData = {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize || 0,
                type: resourceEntry.initiatorType || 'unknown',
              };

              console.log('Slow Resource:', resourceData);
            }
          }
        }
      });

      try {
        resourceObserver.observe({ entryTypes: ['resource'] });

        return () => {
          resourceObserver.disconnect();
        };
      } catch (error) {
        // Silently fail if Performance Observer is not supported
        console.warn('Performance monitoring not supported in this browser');
      }
    }
  }, []);
}

// Performance monitoring component
export function PerformanceMonitor() {
  usePerformanceMonitoring();
  return null;
}

// Utility function to measure component render time
export function measureRenderTime(componentName: string) {
  const startTime = performance.now();

  return {
    end: () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }

      return renderTime;
    }
  };
}

// Higher-order component for performance monitoring
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  const WrappedComponent = (props: P) => {
    const measurement = measureRenderTime(componentName);

    useEffect(() => {
      measurement.end();
    });

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withPerformanceMonitoring(${componentName})`;

  return WrappedComponent;
}
