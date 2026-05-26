export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  category: "Food" | "Grooming" | "Toys" | "Health" | "Accessories";
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  badge?: string;
  inStock: boolean;
  weight?: string;
}

const i1 = "/assets/home/b864c257c5e547b7253db8423a01aa9abcd763bc.png";
const i2 = "/assets/home/6e34515863fd697cfad58413f8aed3f7cd4dba33.png";
const i3 = "/assets/home/4f1fff75ec15ef25279505ae40351a3f55e95fe5.png";
const i4 = "/assets/home/0e77bcc6a3cc3a632c8f5618ba1fcb7e92d9f6c9.png";
const i5 = "/assets/home/image 14.png";
const i6 = "/assets/home/77090ad87a04188945925805981f46c8b58a6d52.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Organic Dog Food",
    price: 899,
    originalPrice: 1299,
    discount: "31% OFF",
    category: "Food",
    image: i1,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    inStock: true,
    weight: "5 kg",
    description:
      "Specially crafted with organic, human-grade ingredients for optimal canine nutrition. Made from real chicken, brown rice, and fresh garden vegetables — no fillers, no artificial preservatives, just pure goodness for your dog.",
    features: [
      "100% certified organic ingredients",
      "Real chicken as primary protein",
      "No artificial colours or preservatives",
      "Supports healthy digestion & coat",
      "Suitable for all breeds & life stages",
      "Vet-recommended formula",
    ],
  },
  {
    id: 2,
    name: "Herbal Pet Shampoo",
    price: 349,
    originalPrice: 499,
    discount: "30% OFF",
    category: "Grooming",
    image: i2,
    rating: 4.6,
    reviews: 89,
    inStock: true,
    weight: "250 ml",
    description:
      "A gentle, plant-based shampoo infused with aloe vera and neem extracts. Leaves your pet's coat silky smooth, free of tangles, and smelling fresh for up to 5 days.",
    features: [
      "pH balanced for pets",
      "Aloe vera & neem extracts",
      "Detangles and conditions",
      "Paraben-free & sulphate-free",
      "Safe for puppies over 8 weeks",
    ],
  },
  {
    id: 3,
    name: "Interactive Puzzle Toy",
    price: 599,
    originalPrice: 799,
    discount: "25% OFF",
    category: "Toys",
    image: i3,
    rating: 4.7,
    reviews: 67,
    badge: "New",
    inStock: true,
    description:
      "Challenge your pet's mind with this multi-level puzzle toy. Hide treats inside to keep your pet engaged, reduce anxiety, and stimulate natural foraging instincts.",
    features: [
      "3-level difficulty settings",
      "BPA-free food-safe plastic",
      "Easy to clean — dishwasher safe",
      "Suitable for dogs & cats",
      "Reduces boredom & destructive behaviour",
    ],
  },
  {
    id: 4,
    name: "Pet Vitamin Supplement",
    price: 749,
    originalPrice: 999,
    discount: "25% OFF",
    category: "Health",
    image: i4,
    rating: 4.5,
    reviews: 45,
    inStock: true,
    weight: "60 tablets",
    description:
      "A comprehensive multivitamin chew packed with essential vitamins, minerals, and antioxidants. Supports immunity, joint health, and overall vitality in dogs and cats.",
    features: [
      "Complete multi-vitamin formula",
      "Supports joint & bone health",
      "Boosts immune system",
      "Omega-3 & omega-6 fatty acids",
      "Palatable chicken flavour",
      "Vet-formulated & tested",
    ],
  },
  {
    id: 5,
    name: "Luxury Dog Collar",
    price: 449,
    originalPrice: 649,
    discount: "31% OFF",
    category: "Accessories",
    image: i5,
    rating: 4.4,
    reviews: 92,
    inStock: true,
    description:
      "Handcrafted from premium genuine leather with a polished stainless-steel buckle. Adjustable for a perfect fit, this collar blends luxury with everyday durability.",
    features: [
      "Genuine full-grain leather",
      "Stainless-steel hardware — rust-proof",
      "Adjustable 5-hole fitting",
      "Comfortable padded inner lining",
      "Available in sizes XS to XL",
    ],
  },
  {
    id: 6,
    name: "Grain-Free Cat Food",
    price: 1199,
    originalPrice: 1499,
    discount: "20% OFF",
    category: "Food",
    image: i6,
    rating: 4.9,
    reviews: 156,
    badge: "Top Rated",
    inStock: true,
    weight: "3 kg",
    description:
      "A high-protein, grain-free diet designed for indoor and outdoor cats. Made with wild-caught salmon and sweet potato, it supports lean muscle, healthy skin, and a shiny coat.",
    features: [
      "Wild-caught salmon as #1 ingredient",
      "Grain-free & gluten-free",
      "Rich in taurine for heart health",
      "Promotes healthy weight management",
      "No artificial flavours or colours",
    ],
  },
  {
    id: 7,
    name: "Grooming Brush Set",
    price: 529,
    originalPrice: 699,
    discount: "24% OFF",
    category: "Grooming",
    image: i1,
    rating: 4.6,
    reviews: 73,
    inStock: true,
    description:
      "A complete 4-piece grooming kit for dogs and cats. Includes a de-shedding comb, slicker brush, flea comb, and nail file — everything you need for a professional groom at home.",
    features: [
      "4-piece complete grooming kit",
      "Stainless-steel fine-tooth comb",
      "Ergonomic non-slip handles",
      "Reduces shedding by up to 90%",
      "Suitable for all coat types",
    ],
  },
  {
    id: 8,
    name: "Rope Chew Toy",
    price: 249,
    originalPrice: 349,
    discount: "29% OFF",
    category: "Toys",
    image: i2,
    rating: 4.3,
    reviews: 118,
    inStock: true,
    description:
      "Durable cotton-braided rope toy that cleans teeth naturally as your dog chews. Perfect for tug-of-war, fetch, or solo play. Built to last even the most aggressive chewers.",
    features: [
      "100% natural cotton — pet-safe",
      "Promotes dental hygiene",
      "Multiple knot design for grip",
      "Strong braid — bite-resistant",
      "Machine washable",
    ],
  },
  {
    id: 9,
    name: "Omega-3 Fish Oil",
    price: 899,
    category: "Health",
    image: i3,
    rating: 4.7,
    reviews: 54,
    inStock: true,
    weight: "150 ml",
    description:
      "Cold-pressed wild salmon oil rich in EPA & DHA omega-3 fatty acids. Drizzle directly on food to improve coat shine, reduce inflammation, and support brain and heart health.",
    features: [
      "Wild Alaskan salmon source",
      "High EPA & DHA concentration",
      "Improves coat shine & reduces itching",
      "Supports cardiovascular health",
      "No additives or preservatives",
    ],
  },
  {
    id: 10,
    name: "Stainless Steel Bowl Set",
    price: 299,
    originalPrice: 399,
    discount: "25% OFF",
    category: "Accessories",
    image: i4,
    rating: 4.5,
    reviews: 81,
    inStock: true,
    description:
      "Set of two premium stainless-steel bowls — one for food, one for water. Anti-skid rubber base prevents sliding, and the non-porous surface stays hygienic and odour-free.",
    features: [
      "Food-grade 304 stainless steel",
      "Anti-skid silicone base",
      "Dishwasher safe",
      "Non-toxic, rust-proof",
      "Set of 2 (800 ml each)",
    ],
  },
  {
    id: 11,
    name: "Puppy Training Treats",
    price: 399,
    originalPrice: 549,
    discount: "27% OFF",
    category: "Food",
    image: i5,
    rating: 4.8,
    reviews: 203,
    badge: "Best Seller",
    inStock: true,
    weight: "200 g",
    description:
      "Soft, bite-sized treats specially formulated for puppies in training. Low-calorie, high-reward snacks made with real chicken liver — the taste your pup will work for.",
    features: [
      "Real chicken liver — 60% meat content",
      "Soft texture — gentle on puppy teeth",
      "Low calorie — guilt-free rewarding",
      "No wheat, soy, or corn",
      "For puppies 8 weeks and older",
    ],
  },
  {
    id: 12,
    name: "Pet First Aid Kit",
    price: 1099,
    category: "Health",
    image: i6,
    rating: 4.6,
    reviews: 38,
    inStock: true,
    description:
      "Be prepared for every pet emergency with this 30-piece first aid kit. Includes bandages, antiseptic wipes, tweezers, a digital thermometer, and an emergency guide booklet.",
    features: [
      "30 essential first-aid items",
      "Portable zip-lock carry case",
      "Digital pet thermometer included",
      "Emergency guide booklet",
      "Suitable for dogs, cats & small pets",
    ],
  },
];

export const categories = ["All", "Food", "Grooming", "Toys", "Health", "Accessories"] as const;
