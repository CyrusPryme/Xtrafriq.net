/**
 * Site-wide contact and company info.
 * Override with env: NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CONTACT_PHONE
 */
export const site = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@xtrafriq.com',
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+233243879212',
} as const
