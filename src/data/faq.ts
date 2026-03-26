export interface FAQItem {
  question: string;
  answer: string;
  category: "product" | "nutrition" | "shipping" | "usage";
}

export const faqItems: FAQItem[] = [
  {
    question: "What is PeptoMeal?",
    answer:
      "PeptoMeal is a complete nutritional shake designed to support energy, recovery and daily wellbeing. Each serving contains 15.3g protein, 4.3g fibre, a synbiotic formula, omega-3 healthy fats, and 24 essential vitamins and minerals — all in just 110 calories.",
    category: "product",
  },
  {
    question: "How do I prepare a PeptoMeal shake?",
    answer:
      "Add one sachet (33g) to 250-300ml of cold water, shake vigorously for 15-20 seconds, and enjoy. You can also blend it with milk, add it to smoothies, or use it in recipes like overnight oats and protein bowls.",
    category: "usage",
  },
  {
    question: "Can PeptoMeal replace a full meal?",
    answer:
      "PeptoMeal is designed as a complete nutritional shake that supports your daily nutrition. It works well as a quick breakfast, between meals, after exercise, or whenever you need balanced nutrition fast. We recommend using it as part of a balanced diet alongside whole foods.",
    category: "nutrition",
  },
  {
    question: "Is PeptoMeal suitable for people with diabetes?",
    answer:
      "Each serving contains 5.7g of sugar. We recommend consulting your healthcare provider before adding any new nutritional product to your routine, especially if you manage a specific health condition.",
    category: "nutrition",
  },
  {
    question: "What protein source does PeptoMeal use?",
    answer:
      "PeptoMeal uses a whey and skim-milk protein base to deliver 15.3g of high-quality protein per serving. This provides a complete amino acid profile to support muscle maintenance, recovery and satiety.",
    category: "nutrition",
  },
  {
    question: "How many calories are in one serving?",
    answer:
      "Each 33g serving contains only 110 calories, making it a convenient low-calorie option that still delivers substantial, balanced nutrition.",
    category: "nutrition",
  },
  {
    question: "What are synbiotics?",
    answer:
      "Synbiotics are a combination of prebiotics and probiotics that work together to support gut and immune health. PeptoMeal includes a synbiotic formula to help maintain a healthy digestive system.",
    category: "nutrition",
  },
  {
    question: "How many flavours are available?",
    answer:
      "PeptoMeal is available in 10 delicious flavours: Chocolate Caramel, Caramel Latte, Cinnamon Pancake, Strawberry, Vanilla, Salted Chocolate, Cotton Candy, Cream Soda, Jelly Tots, and Turkish Delight. Not sure where to start? Try a Discovery Box.",
    category: "product",
  },
  {
    question: "How much does shipping cost?",
    answer:
      "Shipping costs are calculated at checkout. Orders are processed within 1-2 business days, with delivery typically arriving within 2-5 working days nationwide across South Africa.",
    category: "shipping",
  },
  {
    question: "Can I return my order?",
    answer:
      "We want you to be completely satisfied. Please contact our support team within 14 days of receiving your order if you need assistance with returns or exchanges.",
    category: "shipping",
  },
  {
    question: "Which flavour should I try first?",
    answer:
      "Our Chocolate Caramel is the customer favourite and a great starting point. If you want to explore, grab a Discovery Box — it includes a selection of our most popular flavours so you can find your match.",
    category: "product",
  },
  {
    question: "When should I use PeptoMeal?",
    answer:
      "PeptoMeal is designed to fit into your routine whenever you need it: as a quick breakfast, between meals, after exercise, or whenever you need balanced nutrition fast. There is no fixed time — use it when it works best for you.",
    category: "usage",
  },
];
