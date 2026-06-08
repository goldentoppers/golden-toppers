import type { Ingredient } from "../../types/nutrition";

export const DAIRY_INGREDIENTS: Ingredient[] = [
  // --- THE "GOLDEN" STANDARDS (Highly Beneficial Toppers) ---
  {
    id: "kefir",
    name: "Kefir (Plain)",
    kcalPerGram: 0.6,
    role: "topper",
    category: "dairy",
    icon: "kefir",
    benefits: ["Probiotic Power", "Gut Health"],
    vitamins: ["B12", "Calcium", "Probiotics"],
    maxGramsCap: 45.0, // Safe ceiling for a large golden retriever (~3 tbsp max probiotic dose)
    preparation: "Swirl Raw into Bowl",
    preparationAlert: "Fermentation makes this much easier to digest than plain milk.",
  },
  {
    id: "greek-yogurt",
    name: "Greek Yogurt",
    kcalPerGram: 0.59,
    role: "topper",
    category: "dairy",
    icon: "greek-yogurt",
    benefits: ["Digestive Support"],
    vitamins: ["Calcium", "Protein"],
    maxGramsCap: 45.0, // Safe volumetric cap (~3 tbsp max)
    preparation: "Dollop Raw Over Food",
    preparationAlert: 'Must be plain and Xylitol-free. Avoid "fruit-on-the-bottom" varieties.',
  },
  {
    id: "cottage-cheese",
    name: "Cottage Cheese",
    kcalPerGram: 0.98,
    role: "topper",
    category: "dairy",
    icon: "cottage",
    benefits: ["Easily Digestible Protein"],
    vitamins: ["Calcium", "Selenium"],
    maxGramsCap: 30.0, // Safe soft curd limit (~2 tbsp max)
    preparation: "Spoon into Mix",
    preparationAlert: "Choose low-sodium varieties. Great for dogs recovering from upset stomachs.",
  },

  // --- HARD CHEESES (Occasional Treats) ---
  {
    id: "cheddar",
    name: "Cheddar",
    kcalPerGram: 4.02,
    role: "topper",
    category: "dairy",
    icon: "cheddar",
    isHighRisk: true,
    benefits: ["High Value Reward"],
    vitamins: [],
    maxGramsCap: 7.0, // ⚠️ CRITICAL CLINICAL CAP: Limits dense saturated fat load to ~0.5 tbsp max
    preparation: "Finely Cube or Shred",
    preparationAlert:
      "High fat and salt. Limit to tiny amounts to prevent weight gain or pancreatitis.",
  },
  {
    id: "parmesan",
    name: "Parmesan",
    kcalPerGram: 4.31,
    role: "topper",
    category: "dairy",
    icon: "parmesan cheese",
    isHighRisk: true,
    maxGramsCap: 3.0, // ⚠️ CRITICAL SODIUM SHIELD: Limits sodium spike (~1 tsp max dusted powder)
    preparation: "Lightly Dust / Grate Sparingly",
    preparationAlert: "Extremely high sodium. Use only as a very sparse flavor topper.",
    vitamins: [],
    benefits: [],
  },

  // --- ⚠️ HIGH RISK / AVOID (Maintained for Explore Page) ---
  {
    id: "milk-whole",
    name: "Whole Milk",
    kcalPerGram: 0.61,
    role: "topper",
    category: "dairy",
    icon: "20-milk",
    isHighRisk: true,
    maxGramsCap: 0, // Disabled in calculation loops
    preparation: "Not Recommended for Use",
    preparationAlert:
      "Most dogs are lactose intolerant. Can cause severe gas, bloating, and diarrhea.",
    vitamins: [],
    benefits: [],
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    kcalPerGram: 0,
    role: "topper",
    category: "dairy",
    icon: "ice-cream",
    isToxic: true,
    vitamins: [],
    benefits: [],
    maxGramsCap: 0, // Disabled in calculation loops
    preparation: "DO NOT SERVE",
    preparationAlert:
      'PROHIBITED. High sugar, fat, and lactose. High risk of Xylitol poisoning in "sugar-free" types.',
  },
  {
    id: "butter",
    name: "Butter / Margarine",
    kcalPerGram: 0,
    role: "topper",
    category: "dairy",
    icon: "23-butter",
    isHighRisk: true,
    vitamins: [],
    benefits: [],
    maxGramsCap: 0, // Disabled in calculation loops
    preparation: "AVOID ENTIRELY",
    preparationAlert: "Pure fat. High risk of triggering acute Pancreatitis. Avoid entirely.",
  },
  {
    id: "blue-cheese",
    name: "Brie / Roquefort",
    kcalPerGram: 0,
    role: "topper",
    category: "dairy",
    icon: "roquefort",
    isToxic: true,
    vitamins: [],
    benefits: [],
    maxGramsCap: 0, // Disabled in calculation loops
    preparation: "TOXIC - REMOVE FROM KITCHEN",
    preparationAlert:
      "Toxic. Mold-ripened cheeses can produce roquefortine C, which causes tremors and seizures.",
  },
  {
    id: "soya-drink",
    name: "Soya Drink",
    kcalPerGram: 0.45,
    role: "topper",
    category: "dairy",
    icon: "soya-drink",
    isHighRisk: true,
    vitamins: [],
    benefits: [],
    maxGramsCap: 0, // Disabled in calculation loops
    preparation: "Check Component Additives",
    preparationAlert: "Often contains added sugars and thickeners not suitable for dogs.",
  },
];
