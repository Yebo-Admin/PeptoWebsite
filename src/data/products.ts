export interface Product {
  id: string;
  name: string;
  flavour: string;
  slug: string;
  price: number; // in ZAR cents
  priceDisplay: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  badge?: string;
  category: "shake" | "bundle";
  nutrition: {
    calories: number;
    protein: string;
    fibre: string;
    sugar: string;
    servingSize: string;
    vitamins: number;
  };
  ingredients?: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "pm-choc-caramel",
    name: "PeptoMeal Nutritional Shake",
    flavour: "Chocolate Caramel",
    slug: "chocolate-caramel",
    price: 5000,
    priceDisplay: "R50",
    description:
      "Rich chocolate meets buttery caramel in this indulgent shake that delivers complete daily nutrition. Packed with 15.3g of high-quality protein, synbiotics for gut health, and 24 essential vitamins and minerals — all in just 110 calories.",
    shortDescription: "Rich chocolate meets buttery caramel. Complete nutrition in every sip.",
    image: "https://picsum.photos/seed/pepto-choc/600/600",
    images: [
      "https://picsum.photos/seed/pepto-choc/600/600",
      "https://picsum.photos/seed/pepto-choc-2/600/600",
      "https://picsum.photos/seed/pepto-choc-3/600/600",
    ],
    badge: "Bestseller",
    category: "shake",
    nutrition: {
      calories: 110,
      protein: "15.3g",
      fibre: "4.3g",
      sugar: "5.7g",
      servingSize: "33g",
      vitamins: 24,
    },
    isBestseller: true,
  },
  {
    id: "pm-caramel-latte",
    name: "PeptoMeal Nutritional Shake",
    flavour: "Caramel Latte",
    slug: "caramel-latte",
    price: 5000,
    priceDisplay: "R50",
    description:
      "Your morning coffee ritual, upgraded. Smooth caramel latte flavour with a complete nutritional profile — protein, fibre, omega-3, synbiotics, and 24 vitamins and minerals to power your day.",
    shortDescription: "Your morning coffee ritual, upgraded with complete nutrition.",
    image: "https://picsum.photos/seed/pepto-latte/600/600",
    images: [
      "https://picsum.photos/seed/pepto-latte/600/600",
      "https://picsum.photos/seed/pepto-latte-2/600/600",
      "https://picsum.photos/seed/pepto-latte-3/600/600",
    ],
    badge: "Popular",
    category: "shake",
    nutrition: {
      calories: 110,
      protein: "15.3g",
      fibre: "4.3g",
      sugar: "5.7g",
      servingSize: "33g",
      vitamins: 24,
    },
    isBestseller: true,
  },
  {
    id: "pm-jelly-tots",
    name: "PeptoMeal Nutritional Shake",
    flavour: "Jelly Tots",
    slug: "jelly-tots",
    price: 5000,
    priceDisplay: "R50",
    description:
      "Nostalgic sweetness meets serious nutrition. The Jelly Tots flavour brings a playful twist to your daily shake routine — with the same complete nutritional foundation you trust.",
    shortDescription: "Nostalgic sweetness meets serious nutrition. A playful daily shake.",
    image: "https://picsum.photos/seed/pepto-jelly/600/600",
    images: [
      "https://picsum.photos/seed/pepto-jelly/600/600",
      "https://picsum.photos/seed/pepto-jelly-2/600/600",
      "https://picsum.photos/seed/pepto-jelly-3/600/600",
    ],
    badge: "New",
    category: "shake",
    nutrition: {
      calories: 110,
      protein: "15.3g",
      fibre: "4.3g",
      sugar: "5.7g",
      servingSize: "33g",
      vitamins: 24,
    },
    isNew: true,
  },
  {
    id: "pm-vanilla-bean",
    name: "PeptoMeal Nutritional Shake",
    flavour: "Vanilla Bean",
    slug: "vanilla-bean",
    price: 5000,
    priceDisplay: "R50",
    description:
      "Classic vanilla bean with a clean, creamy finish. Versatile enough to enjoy on its own or blend into your favourite smoothie bowl. Complete nutrition, naturally delicious.",
    shortDescription: "Classic vanilla bean. Clean, creamy, and endlessly versatile.",
    image: "https://picsum.photos/seed/pepto-vanilla/600/600",
    images: [
      "https://picsum.photos/seed/pepto-vanilla/600/600",
      "https://picsum.photos/seed/pepto-vanilla-2/600/600",
      "https://picsum.photos/seed/pepto-vanilla-3/600/600",
    ],
    category: "shake",
    nutrition: {
      calories: 110,
      protein: "15.3g",
      fibre: "4.3g",
      sugar: "5.7g",
      servingSize: "33g",
      vitamins: 24,
    },
  },
  {
    id: "pm-strawberry",
    name: "PeptoMeal Nutritional Shake",
    flavour: "Strawberry",
    slug: "strawberry",
    price: 5000,
    priceDisplay: "R50",
    description:
      "Bright, fruity strawberry flavour that makes balanced nutrition feel effortless. Same complete formula — protein, fibre, synbiotics, omega-3, and 24 vitamins and minerals.",
    shortDescription: "Bright, fruity strawberry. Balanced nutrition made effortless.",
    image: "https://picsum.photos/seed/pepto-straw/600/600",
    images: [
      "https://picsum.photos/seed/pepto-straw/600/600",
      "https://picsum.photos/seed/pepto-straw-2/600/600",
      "https://picsum.photos/seed/pepto-straw-3/600/600",
    ],
    category: "shake",
    nutrition: {
      calories: 110,
      protein: "15.3g",
      fibre: "4.3g",
      sugar: "5.7g",
      servingSize: "33g",
      vitamins: 24,
    },
  },
  {
    id: "pm-discovery-box",
    name: "PeptoMeal Discovery Box",
    flavour: "Mixed — 5 Flavours",
    slug: "discovery-box",
    price: 22500,
    priceDisplay: "R225",
    description:
      "Not sure which flavour is your favourite? The Discovery Box includes one sachet of every PeptoMeal flavour so you can try them all. Five sachets, five flavours, one easy decision.",
    shortDescription: "Try every flavour. Five sachets, five flavours, one box.",
    image: "https://picsum.photos/seed/pepto-box/600/600",
    images: [
      "https://picsum.photos/seed/pepto-box/600/600",
      "https://picsum.photos/seed/pepto-box-2/600/600",
    ],
    badge: "Best Value",
    category: "bundle",
    nutrition: {
      calories: 110,
      protein: "15.3g",
      fibre: "4.3g",
      sugar: "5.7g",
      servingSize: "33g",
      vitamins: 24,
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function getShakes(): Product[] {
  return products.filter((p) => p.category === "shake");
}

export function getBundles(): Product[] {
  return products.filter((p) => p.category === "bundle");
}
