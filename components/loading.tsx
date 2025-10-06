import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'primary' | 'white' | 'gray';
}

export function LoadingSpinner({
  size = 'md',
  className,
  color = 'primary'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-brand',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
}

export function LoadingSkeleton({
  className,
  lines = 1,
  height = 'h-4'
}: LoadingSkeletonProps) {
  if (lines === 1) {
    return (
      <div
        className={cn(
          'animate-pulse bg-gray-200 rounded',
          height,
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="space-y-2" aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'animate-pulse bg-gray-200 rounded',
            height,
            i === lines - 1 && lines > 2 ? 'w-3/4' : 'w-full',
            className
          )}
        />
      ))}
    </div>
  );
}

interface LoadingButtonProps {
  loading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function LoadingButton({
  loading,
  children,
  loadingText = 'Loading...',
  className,
  disabled,
  onClick,
  type = 'button',
  ...props
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'btn btn-primary inline-flex items-center justify-center gap-2',
        (loading || disabled) && 'opacity-70 cursor-not-allowed',
        className
      )}
      disabled={loading || disabled}
      onClick={onClick}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" color="white" />}
      {loading ? loadingText : children}
    </button>
  );
}

interface LoadingPageProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingPage({
  message = 'Loading...',
  fullScreen = true
}: LoadingPageProps) {
  const containerClass = fullScreen
    ? 'min-h-screen flex items-center justify-center'
    : 'flex items-center justify-center py-8';

  return (
    <div className={containerClass}>
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}

