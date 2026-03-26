export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  useCase: "busy-mornings" | "weight-support" | "post-workout" | "convenience";
  rating: number;
  avatar: string;
  flavour?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Naledi Mokoena",
    role: "Marketing Director",
    location: "Johannesburg",
    quote:
      "I used to skip breakfast four days a week. Now I grab a PeptoMeal on the way out and I'm sorted until lunch. The Caramel Latte genuinely tastes like something I'd order at a cafe.",
    useCase: "busy-mornings",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Naledi+Mokoena&background=05c8aa&color=fff&size=128",
    flavour: "Caramel Latte",
  },
  {
    id: "t-2",
    name: "Ruan Viljoen",
    role: "Software Engineer",
    location: "Cape Town",
    quote:
      "I've tried at least six meal replacement brands. PeptoMeal is the first one where I actually look forward to drinking it. The Chocolate Caramel is dangerously good.",
    useCase: "convenience",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ruan+Viljoen&background=05c8aa&color=fff&size=128",
    flavour: "Chocolate Caramel",
  },
  {
    id: "t-3",
    name: "Thandiwe Dlamini",
    role: "CrossFit Coach",
    location: "Durban",
    quote:
      "Post-WOD nutrition used to be a hassle. Now I shake up a PeptoMeal in the car and I'm recovering before I even get home. 15g protein, gut-friendly, and it actually mixes smooth.",
    useCase: "post-workout",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Thandiwe+Dlamini&background=05c8aa&color=fff&size=128",
    flavour: "Strawberry",
  },
  {
    id: "t-4",
    name: "Brendan Louw",
    role: "Sales Consultant",
    location: "Pretoria",
    quote:
      "I was spending R80+ on takeaway lunches that left me sluggish by 3pm. Switched to a PeptoMeal at noon — R50, fills me up, and I stay sharp through afternoon calls.",
    useCase: "weight-support",
    rating: 4,
    avatar: "https://ui-avatars.com/api/?name=Brendan+Louw&background=05c8aa&color=fff&size=128",
    flavour: "Vanilla Bean",
  },
  {
    id: "t-5",
    name: "Lerato Nkosi",
    role: "Registered Nurse",
    location: "Bloemfontein",
    quote:
      "Twelve-hour shifts don't leave time for meal prep. PeptoMeal sits in my bag and I know that even on the worst days, I'm getting proper nutrition. The Jelly Tots flavour is a morale booster.",
    useCase: "busy-mornings",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Lerato+Nkosi&background=05c8aa&color=fff&size=128",
    flavour: "Jelly Tots",
  },
  {
    id: "t-6",
    name: "Marco de Bruyn",
    role: "Cycling Enthusiast",
    location: "Stellenbosch",
    quote:
      "I mix one before early-morning rides and another after. The omega-3 and synbiotics make a noticeable difference in how I feel the rest of the day. Simple, effective, tastes great.",
    useCase: "post-workout",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Marco+de+Bruyn&background=05c8aa&color=fff&size=128",
    flavour: "Caramel Latte",
  },
];
