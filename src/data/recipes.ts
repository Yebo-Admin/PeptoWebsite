export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  prepTime: string;
  flavour: string;
  mealType: "breakfast" | "snack" | "dessert" | "smoothie";
  ingredients: string[];
  steps: string[];
  productSlug: string;
}

export const recipes: Recipe[] = [
  {
    id: "r-choc-overnight",
    title: "Chocolate Caramel Overnight Oats",
    slug: "chocolate-caramel-overnight-oats",
    description:
      "Prep in two minutes, wake up to a rich, protein-packed breakfast bowl.",
    image: "https://picsum.photos/seed/recipe-oats/800/600",
    prepTime: "2 min + overnight",
    flavour: "Chocolate Caramel",
    mealType: "breakfast",
    ingredients: [
      "1 sachet PeptoMeal Chocolate Caramel",
      "40g rolled oats",
      "200ml milk of choice",
      "1 tbsp chia seeds",
      "Pinch of sea salt",
      "Top with banana slices and cacao nibs",
    ],
    steps: [
      "Combine oats, chia seeds, and PeptoMeal powder in a jar.",
      "Pour in milk and stir well.",
      "Seal and refrigerate overnight (or at least 4 hours).",
      "Top with banana slices, cacao nibs, and a drizzle of nut butter.",
    ],
    productSlug: "chocolate-caramel",
  },
  {
    id: "r-latte-smoothie",
    title: "Iced Caramel Latte Smoothie",
    slug: "iced-caramel-latte-smoothie",
    description:
      "Your afternoon pick-me-up with 15g protein. Creamy, caffeinated, done in 60 seconds.",
    image: "https://picsum.photos/seed/recipe-latte/800/600",
    prepTime: "1 min",
    flavour: "Caramel Latte",
    mealType: "smoothie",
    ingredients: [
      "1 sachet PeptoMeal Caramel Latte",
      "200ml cold milk or oat milk",
      "1 shot espresso (cooled)",
      "Handful of ice cubes",
      "Optional: 1 tbsp maple syrup",
    ],
    steps: [
      "Add all ingredients to a blender.",
      "Blend until smooth and frothy.",
      "Pour over ice and enjoy immediately.",
    ],
    productSlug: "caramel-latte",
  },
  {
    id: "r-vanilla-bowl",
    title: "Vanilla Protein Smoothie Bowl",
    slug: "vanilla-protein-smoothie-bowl",
    description:
      "A thick, creamy base loaded with toppings. Breakfast that looks as good as it tastes.",
    image: "https://picsum.photos/seed/recipe-bowl/800/600",
    prepTime: "5 min",
    flavour: "Vanilla",
    mealType: "breakfast",
    ingredients: [
      "1 sachet PeptoMeal Vanilla",
      "1 frozen banana",
      "100ml milk of choice",
      "Toppings: granola, berries, coconut flakes, honey",
    ],
    steps: [
      "Blend PeptoMeal, frozen banana, and milk until thick.",
      "Pour into a bowl.",
      "Arrange toppings in rows.",
      "Eat immediately with a spoon.",
    ],
    productSlug: "vanilla",
  },
  {
    id: "r-strawberry-popsicle",
    title: "Strawberry Protein Popsicles",
    slug: "strawberry-protein-popsicles",
    description:
      "Freeze your nutrition. Perfect for hot days and post-workout recovery.",
    image: "https://picsum.photos/seed/recipe-popsicle/800/600",
    prepTime: "5 min + 4hr freeze",
    flavour: "Strawberry",
    mealType: "dessert",
    ingredients: [
      "2 sachets PeptoMeal Strawberry",
      "400ml Greek yoghurt",
      "100ml milk",
      "1 tbsp honey",
      "Handful of fresh strawberries, diced",
    ],
    steps: [
      "Blend PeptoMeal, yoghurt, milk, and honey until smooth.",
      "Fold in diced strawberries.",
      "Pour into popsicle moulds.",
      "Freeze for at least 4 hours.",
      "Run mould under warm water briefly to release.",
    ],
    productSlug: "strawberry",
  },
  {
    id: "r-cinnamon-pancakes",
    title: "Cinnamon Pancake Protein Pancakes",
    slug: "cinnamon-pancake-protein-pancakes",
    description:
      "Fluffy, high-protein pancakes that taste like the real thing. Weekend breakfast, elevated.",
    image: "https://picsum.photos/seed/recipe-pancakes/800/600",
    prepTime: "15 min",
    flavour: "Cinnamon Pancake",
    mealType: "breakfast",
    ingredients: [
      "1 sachet PeptoMeal Cinnamon Pancake",
      "1 egg",
      "50g oat flour",
      "100ml milk",
      "1 tsp baking powder",
      "Serve with maple syrup and fresh berries",
    ],
    steps: [
      "Mix PeptoMeal, oat flour, and baking powder in a bowl.",
      "Whisk in egg and milk until smooth.",
      "Heat a non-stick pan over medium heat.",
      "Pour small circles and cook until bubbles form, then flip.",
      "Serve stacked with maple syrup and berries.",
    ],
    productSlug: "cinnamon-pancake",
  },
  {
    id: "r-jelly-pudding",
    title: "Jelly Tots Protein Pudding",
    slug: "jelly-tots-protein-pudding",
    description:
      "A sweet, nostalgic dessert that doubles as a high-protein snack. Ready in minutes.",
    image: "https://picsum.photos/seed/recipe-pudding/800/600",
    prepTime: "3 min + 1hr chill",
    flavour: "Jelly Tots",
    mealType: "dessert",
    ingredients: [
      "1 sachet PeptoMeal Jelly Tots",
      "200ml milk of choice",
      "2 tbsp chia seeds",
      "Top with whipped cream and crushed biscuit",
    ],
    steps: [
      "Mix PeptoMeal powder and chia seeds in a bowl.",
      "Pour in milk and whisk until combined.",
      "Refrigerate for at least 1 hour until set.",
      "Top with a dollop of whipped cream and crushed biscuit pieces.",
    ],
    productSlug: "jelly-tots",
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}
