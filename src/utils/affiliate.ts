/**
 * Amazon Affiliate Configuration & Utility Helper
 * 
 * Allows easy switching of locale domain (.de, .com, .co.uk) 
 * and centralizes tracking tags across the entire application.
 */

export interface AffiliateProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Cookware & Appliances' | 'Prep & Precision' | 'Cutlery & Storage';
  badge?: string;
  amazonAsin: string;
  priceEstimate?: string;
  rating?: string;
  reviewsCount?: number;
  features?: string[];
  affiliateUrl?: string;
}

export const AFFILIATE_CONFIG = {
  defaultLocale: 'com',
  tag: 'theneuralchef-20',
  domains: {
    com: 'https://www.amazon.com',
    de: 'https://www.amazon.de',
    uk: 'https://www.amazon.co.uk'
  }
} as const;

/**
 * Returns an Amazon affiliate link for a given ASIN or fallback URL.
 */
export function getAmazonAffiliateLink(asin: string, locale: keyof typeof AFFILIATE_CONFIG.domains = 'com'): string {
  const domain = AFFILIATE_CONFIG.domains[locale] || AFFILIATE_CONFIG.domains.com;
  return `${domain}/dp/${asin}?tag=${AFFILIATE_CONFIG.tag}`;
}
