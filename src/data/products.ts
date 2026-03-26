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
  flavorProfile: string;
  image: string;
  images: string[];
  badge?: string;
  category: "shake" | "bundle";
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isFavourite?: boolean;
  isNew?: boolean;
  nutrition: {
    calories: number;
    protein: string;
    fibre: string;
    sugar: string;
    servingSize: string;
    vitamins: number;
  };
  benefits: string[];
  ingredients: string;
}

const BASE_NUTRITION = {
  calories: 110,
  protein: "15.3g",
  fibre: "4.3g",
  sugar: "5.7g",
  servingSize: "33g",
  vitamins: 24,
};

const BASE_BENEFITS = [
  "Balanced nutrition in every serving",
  "15.3g protein for strength and recovery",
  "24 vitamins and minerals for energy",
  "Synbiotic formula for gut health support",
  "Only 110 calories per serving",
  "4.3g fibre for digestion and fullness",
];

// Using the Base44 product images where available, placeholders for new flavours
const PRODUCT_IMAGES: Record<string, string> = {
  "Chocolate Caramel": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
  "Caramel Latte": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
  "Vanilla": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
  "Strawberry": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
  "Cinnamon Pancake": "https://picsum.photos/seed/pepto-cinnamon/600/800",
  "Salted Chocolate": "https://picsum.photos/seed/pepto-saltchoc/600/800",
  "Cotton Candy": "https://picsum.photos/seed/pepto-cotton/600/800",
  "Cream Soda": "https://picsum.photos/seed/pepto-creamsoda/600/800",
  "Jelly Tots": "https://picsum.photos/seed/pepto-jellytots/600/800",
  "Turkish Delight": "https://picsum.photos/seed/pepto-turkish/600/800",
  "Discovery Box": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png",
};

export const products: Product[] = [
  {
    id: "pm-choc-caramel",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Chocolate Caramel",
    slug: "chocolate-caramel",
    tagline: "Rich chocolate with smooth caramel sweetness",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Rich chocolate blended with smooth caramel sweetness for a satisfying, indulgent shake.",
    image: PRODUCT_IMAGES["Chocolate Caramel"],
    images: [PRODUCT_IMAGES["Chocolate Caramel"]],
    badge: "BESTSELLER",
    category: "shake",
    rating: 4.8,
    reviewCount: 142,
    isBestseller: true,
    isFavourite: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, cocoa powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend (Lactobacillus acidophilus, Bifidobacterium lactis), natural caramel flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-caramel-latte",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Caramel Latte",
    slug: "caramel-latte",
    tagline: "Creamy coffee flavour with caramel warmth",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Creamy coffee notes blended with warm caramel for a smooth, indulgent shake that feels like your favourite cafe order.",
    image: PRODUCT_IMAGES["Caramel Latte"],
    images: [PRODUCT_IMAGES["Caramel Latte"]],
    badge: "POPULAR",
    category: "shake",
    rating: 4.9,
    reviewCount: 87,
    isFavourite: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), coffee extract, sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural caramel flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-cinnamon-pancake",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Cinnamon Pancake",
    slug: "cinnamon-pancake",
    tagline: "Warm cinnamon and sweet pancake notes",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Warm cinnamon spice paired with sweet pancake notes for a comforting, breakfast-inspired shake.",
    image: PRODUCT_IMAGES["Cinnamon Pancake"],
    images: [PRODUCT_IMAGES["Cinnamon Pancake"]],
    category: "shake",
    rating: 4.7,
    reviewCount: 63,
    isFavourite: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), cinnamon extract, sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural pancake flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-strawberry",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Strawberry",
    slug: "strawberry",
    tagline: "Fresh, fruity and refreshing",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Bright, natural strawberry flavour that tastes fresh and fruity with every sip.",
    image: PRODUCT_IMAGES["Strawberry"],
    images: [PRODUCT_IMAGES["Strawberry"]],
    category: "shake",
    rating: 4.6,
    reviewCount: 54,
    isFavourite: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural strawberry flavour, beetroot powder (colour), xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-vanilla",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Vanilla",
    slug: "vanilla",
    tagline: "Smooth, classic and versatile",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Smooth, classic vanilla that works beautifully on its own or as a base for smoothies and recipes.",
    image: PRODUCT_IMAGES["Vanilla"],
    images: [PRODUCT_IMAGES["Vanilla"]],
    category: "shake",
    rating: 4.7,
    reviewCount: 98,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural vanilla flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-salted-choc",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Salted Chocolate",
    slug: "salted-chocolate",
    tagline: "Chocolate with a hint of sea salt",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Deep chocolate richness balanced with a subtle hint of sea salt for a sophisticated, indulgent shake.",
    image: PRODUCT_IMAGES["Salted Chocolate"],
    images: [PRODUCT_IMAGES["Salted Chocolate"]],
    category: "shake",
    rating: 4.8,
    reviewCount: 41,
    isNew: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, cocoa powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural chocolate flavour, sea salt, xanthan gum, stevia extract.",
  },
  {
    id: "pm-cotton-candy",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Cotton Candy",
    slug: "cotton-candy",
    tagline: "Playful nostalgic sweetness",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "A playful, nostalgic sweetness that brings the fun of cotton candy to your daily nutrition routine.",
    image: PRODUCT_IMAGES["Cotton Candy"],
    images: [PRODUCT_IMAGES["Cotton Candy"]],
    category: "shake",
    rating: 4.5,
    reviewCount: 32,
    isNew: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural cotton candy flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-cream-soda",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Cream Soda",
    slug: "cream-soda",
    tagline: "Light vanilla soda-inspired flavour",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Light, fizzy-inspired vanilla sweetness reminiscent of classic cream soda — a uniquely refreshing shake.",
    image: PRODUCT_IMAGES["Cream Soda"],
    images: [PRODUCT_IMAGES["Cream Soda"]],
    category: "shake",
    rating: 4.6,
    reviewCount: 28,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural cream soda flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-jelly-tots",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Jelly Tots",
    slug: "jelly-tots",
    tagline: "Bright fruity candy flavour",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Bright, fruity candy flavour that brings a playful twist to your daily nutrition shake.",
    image: PRODUCT_IMAGES["Jelly Tots"],
    images: [PRODUCT_IMAGES["Jelly Tots"]],
    category: "shake",
    rating: 4.7,
    reviewCount: 45,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural jelly tots flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-turkish-delight",
    name: "PeptoMeal All-In-1 Nutritional Support",
    flavor: "Turkish Delight",
    slug: "turkish-delight",
    tagline: "Rose sweetness with chocolate notes",
    price: 50,
    subscriptionPrice: 45,
    priceDisplay: "R50",
    description: "Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.",
    flavorProfile: "Delicate rose sweetness paired with subtle chocolate notes for an elegant, exotic shake experience.",
    image: PRODUCT_IMAGES["Turkish Delight"],
    images: [PRODUCT_IMAGES["Turkish Delight"]],
    category: "shake",
    rating: 4.8,
    reviewCount: 37,
    isNew: true,
    nutrition: BASE_NUTRITION,
    benefits: BASE_BENEFITS,
    ingredients: "Whey protein concentrate, skim milk powder, cocoa powder, inulin (prebiotic fibre), sunflower oil powder, flaxseed powder (omega-3), vitamin and mineral premix (24 nutrients), probiotic blend, natural rose flavour, natural chocolate flavour, xanthan gum, stevia extract, sea salt.",
  },
  {
    id: "pm-discovery-box",
    name: "PeptoMeal Discovery Box",
    flavor: "Mixed Flavours",
    slug: "discovery-box",
    tagline: "Explore multiple flavours and find your favourite",
    price: 250,
    subscriptionPrice: 225,
    priceDisplay: "R225",
    description: "Not sure where to start? Try a Discovery Box and explore multiple flavours to find your favourite. The perfect introduction to PeptoMeal.",
    flavorProfile: "A curated selection of our most popular flavours so you can discover your perfect daily shake.",
    image: PRODUCT_IMAGES["Discovery Box"],
    images: [PRODUCT_IMAGES["Discovery Box"]],
    badge: "BEST VALUE",
    category: "bundle",
    rating: 4.9,
    reviewCount: 203,
    nutrition: BASE_NUTRITION,
    benefits: [
      "Try multiple flavours in one box",
      "Find your favourite before committing",
      "Same complete nutrition in every flavour",
      "Perfect gift for health-conscious friends",
      "Save compared to buying individually",
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

export function getFavourites(): Product[] {
  return products.filter((p) => p.isFavourite);
}
