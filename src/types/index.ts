export interface Car {
  id: string
  name: string
  brand: string
  model: string
  year: number
  price: number | null
  priceDisplay: string
  specs: {
    power: string
    torque?: string
    acceleration: string
    topSpeed: string
    engine: string
    transmission: string
    drivetrain?: string
  }
  badge: {
    text: string
    variant: 'available' | 'preorder' | 'sold' | 'bespoke' | 'last-unit'
  }
  description: string
  isFeatured: boolean
  accentColor: string
}

export interface Brand {
  id: string
  name: string
  country: string
  founded: number
  speciality: string
}

export interface Testimonial {
  id: string
  text: string
  author: {
    name: string
    initials: string
    title: string
    location: string
  }
  rating: number
  carPurchased: string
}

export interface Stat {
  value: string
  suffix?: string
  label: string
  subLabel: string
}

export interface NavLink {
  label: string
  href: string
}
