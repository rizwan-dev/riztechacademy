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
      // Monitor navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navigationEntry = entry as PerformanceNavigationTiming;
            const navigationData = {
              dnsLookup: navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
              tcpConnect: navigationEntry.connectEnd - navigationEntry.connectStart,
              serverResponse: navigationEntry.responseEnd - navigationEntry.requestStart,
              pageLoad: navigationEntry.loadEventEnd - navigationEntry.navigationStart,
              domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart,
            };

            console.log('Navigation Timing:', navigationData);
          }
        }
      });

      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Only log slow resources
            const resourceData = {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize,
              type: resourceEntry.initiatorType,
            };

            console.log('Slow Resource:', resourceData);
          }
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });

      return () => {
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
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
