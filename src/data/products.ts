export interface Product {
  id: string;
  name: string;
  flavor: string;
  slug: string;
  tagline: string;
  price: number;
  subscriptionPrice: number;
  priceDisplay: string;
  description: string;
  image: string;
  images: string[];
  badge?: string;
  category: "shake" | "bundle";
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  proteinG: number;
  servings: number;
  calories: number;
  benefits: string[];
  ingredients: string;
}

export const products: Product[] = [
  {
    id: "pm-choc-treat",
    name: "Chocolate Treat",
    flavor: "Chocolate Treat",
    slug: "chocolate-treat",
    tagline: "Rich cocoa with a smooth finish",
    price: 349,
    subscriptionPrice: 299,
    priceDisplay: "R299",
    description:
      "Indulgent chocolate flavour that delivers complete daily nutrition. 30g plant protein, 85+ superfoods, prebiotics and probiotics for gut health, and 15 essential vitamins and minerals. Zero compromise on taste.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
    ],
    badge: "BESTSELLER",
    category: "shake",
    rating: 4.8,
    reviewCount: 142,
    isBestseller: true,
    proteinG: 30,
    servings: 15,
    calories: 220,
    benefits: [
      "30g complete plant protein per serving",
      "85+ superfoods for whole-body nutrition",
      "Prebiotics & live probiotics for gut health",
      "15 essential vitamins & minerals",
      "No GMO, gluten, soy, or artificial ingredients",
      "Supports muscle recovery & lasting satiety",
    ],
    ingredients:
      "Pea protein isolate, brown rice protein, organic cocoa powder, MCT oil powder, flaxseed meal, chia seed powder, acacia fibre, probiotic blend (Lactobacillus acidophilus, Bifidobacterium lactis), vitamin & mineral premix, natural chocolate flavour, monk fruit extract, sea salt.",
  },
  {
    id: "pm-vanilla-swirl",
    name: "Vanilla Swirl",
    flavor: "Vanilla Swirl",
    slug: "vanilla-swirl",
    tagline: "Classic vanilla, silky smooth",
    price: 349,
    subscriptionPrice: 299,
    priceDisplay: "R299",
    description:
      "Smooth vanilla bean flavour that works on its own or blends into any recipe. 30g plant protein, 85+ superfoods, and a complete micronutrient profile. The most versatile flavour in the range.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
    ],
    category: "shake",
    rating: 4.7,
    reviewCount: 98,
    proteinG: 30,
    servings: 15,
    calories: 220,
    benefits: [
      "30g complete plant protein per serving",
      "85+ superfoods for whole-body nutrition",
      "Prebiotics & live probiotics for gut health",
      "15 essential vitamins & minerals",
      "Mixes smoothly with water or plant milk",
      "Perfect base for smoothie bowls and recipes",
    ],
    ingredients:
      "Pea protein isolate, brown rice protein, MCT oil powder, flaxseed meal, chia seed powder, acacia fibre, probiotic blend (Lactobacillus acidophilus, Bifidobacterium lactis), vitamin & mineral premix, natural vanilla flavour, monk fruit extract, sea salt.",
  },
  {
    id: "pm-caramel-latte",
    name: "Caramel Latte",
    flavor: "Caramel Latte",
    slug: "caramel-latte",
    tagline: "Coffee meets caramel indulgence",
    price: 349,
    subscriptionPrice: 299,
    priceDisplay: "R299",
    description:
      "Your morning coffee ritual, upgraded. Smooth caramel latte flavour with 30g plant protein, 85+ superfoods, and complete gut health support. The perfect way to start any day.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
    ],
    badge: "POPULAR",
    category: "shake",
    rating: 4.9,
    reviewCount: 87,
    proteinG: 30,
    servings: 15,
    calories: 220,
    benefits: [
      "30g complete plant protein per serving",
      "85+ superfoods for whole-body nutrition",
      "Prebiotics & live probiotics for gut health",
      "15 essential vitamins & minerals",
      "Natural caffeine from green coffee extract",
      "Supports energy, focus, and recovery",
    ],
    ingredients:
      "Pea protein isolate, brown rice protein, MCT oil powder, green coffee extract, flaxseed meal, chia seed powder, acacia fibre, probiotic blend, vitamin & mineral premix, natural caramel flavour, natural coffee flavour, monk fruit extract, sea salt.",
  },
  {
    id: "pm-berry-blast",
    name: "Berry Blast",
    flavor: "Berry Blast",
    slug: "berry-blast",
    tagline: "Bright berry, antioxidant rich",
    price: 349,
    subscriptionPrice: 299,
    priceDisplay: "R299",
    description:
      "Bursting with real berry flavour and loaded with antioxidants. 30g plant protein, 85+ superfoods, and gut-friendly synbiotics. Fruity, fresh, and packed with nutrition.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
    ],
    badge: "NEW",
    category: "shake",
    isNew: true,
    rating: 4.6,
    reviewCount: 54,
    proteinG: 30,
    servings: 15,
    calories: 220,
    benefits: [
      "30g complete plant protein per serving",
      "85+ superfoods including acai and goji",
      "Prebiotics & live probiotics for gut health",
      "15 essential vitamins & minerals",
      "Rich in antioxidants from real berry extracts",
      "Naturally refreshing fruity taste",
    ],
    ingredients:
      "Pea protein isolate, brown rice protein, organic berry blend (blueberry, strawberry, acai, goji), MCT oil powder, flaxseed meal, chia seed powder, acacia fibre, probiotic blend, vitamin & mineral premix, natural berry flavour, monk fruit extract, sea salt.",
  },
  {
    id: "pm-starter-bundle",
    name: "Starter Pack Bundle",
    flavor: "Variety",
    slug: "starter-pack",
    tagline: "Three bestselling flavours. 45 servings.",
    price: 899,
    subscriptionPrice: 799,
    priceDisplay: "R799",
    description:
      "The perfect way to discover your daily fuel. Three full-size bags of our bestselling flavours — Chocolate Treat, Vanilla Swirl, and Caramel Latte. 45 servings of complete nutrition.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png",
    ],
    badge: "BEST VALUE",
    category: "bundle",
    rating: 4.9,
    reviewCount: 203,
    proteinG: 30,
    servings: 45,
    calories: 220,
    benefits: [
      "Three full-size bags included",
      "45 total servings of complete nutrition",
      "Try all three bestselling flavours",
      "Save R148 compared to buying individually",
      "30-day love-it guarantee",
      "Free shipping included",
    ],
    ingredients: "See individual flavour listings for full ingredient details.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getShakes(): Product[] {
  return products.filter((p) => p.category === "shake");
}

export function getBundles(): Product[] {
  return products.filter((p) => p.category === "bundle");
}
