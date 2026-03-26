export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  body: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Naledi Mokoena",
    rating: 5,
    body: "I used to skip breakfast four days a week. Now I shake up a PeptoMeal on the way out and I'm sorted until lunch. The Caramel Latte genuinely tastes like something I'd order at a cafe.",
    verified: true,
  },
  {
    id: "t-2",
    name: "Ruan Viljoen",
    rating: 5,
    body: "I've tried at least six meal replacement brands. PeptoMeals is the first one where I actually look forward to drinking it. The Chocolate Treat is dangerously good.",
    verified: true,
  },
  {
    id: "t-3",
    name: "Thandiwe Dlamini",
    rating: 5,
    body: "Post-WOD nutrition used to be a hassle. Now I shake up a VitaShake in the car and I'm recovering before I even get home. 30g protein, gut-friendly, and it actually mixes smooth.",
    verified: true,
  },
  {
    id: "t-4",
    name: "Brendan Louw",
    rating: 4,
    body: "I was spending R80+ on takeaway lunches that left me sluggish by 3pm. Switched to a VitaShake at noon — saves money, fills me up, and I stay sharp through afternoon calls.",
    verified: true,
  },
  {
    id: "t-5",
    name: "Lerato Nkosi",
    rating: 5,
    body: "Twelve-hour shifts don't leave time for meal prep. PeptoMeals sits in my bag and I know that even on the worst days, I'm getting proper nutrition. The Berry Blast is a morale booster.",
    verified: true,
  },
  {
    id: "t-6",
    name: "Marco de Bruyn",
    rating: 5,
    body: "I mix one before early-morning rides and another after. The prebiotics and probiotics make a noticeable difference in how I feel the rest of the day. Simple, effective, tastes great.",
    verified: true,
  },
];
