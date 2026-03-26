export interface FAQItem {
  question: string;
  answer: string;
  category: "product" | "nutrition" | "shipping" | "usage";
}

export const faqItems: FAQItem[] = [
  {
    question: "What is PeptoMeal?",
    answer:
      "PeptoMeal is a premium all-in-one nutritional shake designed to give you balanced daily nutrition in under 60 seconds. Each serving contains 15.3g protein, 4.3g fibre, synbiotics, omega-3, and 24 vitamins and minerals — all in just 110 calories.",
    category: "product",
  },
  {
    question: "How do I prepare a PeptoMeal shake?",
    answer:
      "Add one sachet (33g) to 250–300ml of cold water, shake vigorously for 15 seconds, and enjoy. You can also blend it with milk, add it to smoothies, or use it in recipes like overnight oats and protein puddings.",
    category: "usage",
  },
  {
    question: "Can PeptoMeal replace a full meal?",
    answer:
      "PeptoMeal is formulated as a balanced nutritional shake that supports your daily nutrition. It works well as a breakfast replacement, between-meal support, or post-workout recovery shake. We recommend using it as part of a balanced diet alongside whole foods.",
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
      "PeptoMeal uses a whey and skim-milk protein base to deliver 15.3g of high-quality protein per serving. This provides a complete amino acid profile for muscle support and recovery.",
    category: "nutrition",
  },
  {
    question: "How many calories are in one serving?",
    answer:
      "Each 33g serving contains approximately 110 calories, making it a convenient low-calorie option that still delivers substantial nutrition.",
    category: "nutrition",
  },
  {
    question: "What are synbiotics?",
    answer:
      "Synbiotics are a combination of prebiotics and probiotics that work together to support gut health. PeptoMeal includes a synbiotic formula to help maintain a healthy digestive system.",
    category: "nutrition",
  },
  {
    question: "How much does shipping cost?",
    answer:
      "Shipping rates vary by location. Orders are processed within 1-2 business days, with delivery typically taking 2-5 working days nationwide across South Africa.",
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
      "Our Chocolate Caramel is the crowd favourite and a great starting point. If you want to try everything, grab the Discovery Box — it includes one sachet of every flavour so you can find your match.",
    category: "product",
  },
];
