import { clsx, type ClassValue } from "clsx";

/**
 * cn — class name merge utility.
 * Combines clsx conditional logic with Tailwind conflict resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
