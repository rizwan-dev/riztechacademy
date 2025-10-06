import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge and conditionally apply CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

