import type { Ingredient } from "../../types/nutrition";

export const OIL_INGREDIENTS: Ingredient[] = [
  // ==========================================
  // --- 💧 HEALTHY OILS (Glow & Cellular) ---
  // ==========================================
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    kcalPerGram: 8.6,
    role: "carbohydrate", // Routes directly into your 10% Energy Boost dock
    density: "rainbow",
    category: "oil",
    icon: "oil-pouring-cup",
    benefits: ["Medium-Chain Fats", "Brain Support"],
    vitamins: ["Lauric Acid", "MCTs"],
    maxGramsCap: 14.0, // ⚠️ CRITICAL DIGESTIVE SHIELD: Limits pure saturated fat load (~1 tbsp max)
    preparation: "Melt & Drizzle Warm",
    preparationAlert: "Contains highly saturated MCT fats. Introduce slowly to avoid loose stools.",
  },
  {
    id: "cod-liver-oil",
    name: "Cod Liver Oil",
    kcalPerGram: 8.6,
    role: "carbohydrate",
    density: "rainbow",
    category: "oil",
    icon: "fish",
    benefits: ["Bone Density Support"],
    vitamins: ["Vitamin A", "Vitamin D", "Omega-3"],
    maxGramsCap: 4.5, // ⚠️ CRITICAL VITAMIN A CEILING: Hard micro-dose cutoff (~1 tsp max) to avoid hypervitaminosis A
    preparation: "Mix Cold into Bowl",
    preparationAlert:
      "High concentration of pure pre-formed Vitamin A. Strictly adhere to micro-dosing parameters.",
  },
  {
    id: "krill-oil",
    name: "Krill Oil",
    kcalPerGram: 8.6,
    role: "carbohydrate",
    density: "rainbow",
    category: "oil",
    icon: "shrimp",
    benefits: ["Cellular Support"],
    vitamins: ["EPA / DHA", "Astaxanthin"],
    maxGramsCap: 2.0, // Standard therapeutic gel capsule dosage volume cap
    preparation: "Pierce Capsule Over Food",
  },
  {
    id: "hempseed-oil",
    name: "Hempseed Oil",
    kcalPerGram: 8.8,
    role: "carbohydrate",
    density: "rainbow",
    category: "oil",
    icon: "hemp-oil",
    benefits: ["Skin Barrier Health"],
    vitamins: ["Omega-6 to Omega-3 3:1 Ratio"],
    maxGramsCap: 9.0, // Safe therapeutic omega balance envelope (~2 tsp max)
    preparation: "Drizzle Fresh Raw",
  },
  {
    id: "salmon-oil",
    name: "Salmon Oil",
    kcalPerGram: 8.7,
    role: "carbohydrate",
    category: "oil",
    icon: "salmon",
    benefits: ["Radiant Coat", "Joint Comfort", "Heart Health"],
    vitamins: ["Omega-3 (EPA/DHA)", "Vitamin D", "Astaxanthin"],
    maxGramsCap: 9.0, // Safe anti-inflammatory ceiling parameter (~2 tsp max)
    preparation: "Drizzle Fresh Over Bowl",
    preparationAlert: "Store in a cool, dark place. Oxidation can reduce potency.",
  },
];
