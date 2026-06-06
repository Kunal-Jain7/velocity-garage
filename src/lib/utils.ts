import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | null, currency = '€'): string {
  if (!price) return 'POA'
  return `${currency}${price.toLocaleString('en-EU')}`
}

export function formatNumber(num: number): string {
  return num.toLocaleString('en-EU')
}

export const SECTION_IDS = {
  hero: 'hero',
  collection: 'collection',
  brands: 'brands',
  experience: 'experience',
  testimonials: 'testimonials',
  contact: 'contact',
} as const
