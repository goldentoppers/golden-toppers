import type { Ingredient } from "../../types/nutrition";

export const SEED_AND_NUT_INGREDIENTS: Ingredient[] = [
  // --- THE "GOLDEN" STANDARDS (Skin, Coat & Vitality Booster) ---
  {
    id: "flaxseed-ground",
    name: "Ground Flaxseed",
    kcalPerGram: 5.34,
    role: "carbohydrate",
    density: "rainbow",
    category: "seeds-nuts",
    icon: "flax-seed",
    benefits: ["Radiant Skin", "Digestive Flow"],
    vitamins: ["Omega-3 (ALA)", "Lignans", "Fiber"],
    maxGramsCap: 7.0, // Safe micro-dose threshold mapping (~1 tbsp max ground powder)
    preparation: "Dust into Bowl",
    preparationAlert: "Must be fed ground; whole flaxseeds pass through undigested.",
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    kcalPerGram: 4.86,
    role: "carbohydrate",
    density: "rainbow",
    category: "seeds-nuts",
    icon: "chia-seed",
    benefits: ["Hydration Support", "Joint Comfort"],
    vitamins: ["Omega-3", "Calcium", "Antioxidants"],
    maxGramsCap: 6.0, // Limits maximum water absorption volume expansion in stomach (~0.5 tbsp max)
    preparation: "Soak in Water 10 Mins",
    preparationAlert:
      "Absorbs 10x its weight in water. Soak before serving to prevent upset stomach.",
  },
  {
    id: "hemp-hearts",
    name: "Hemp Hearts",
    kcalPerGram: 5.53, // Energy-dense seed profile
    role: "carbohydrate" /* Swapped 'carbohydrate' to accurately reflect seed biology */,
    density: "rainbow",
    category: "seeds-nuts",
    icon: "hemp-hearts",
    benefits: ["Immune Support", "Coat Glow"],
    vitamins: ["GLA", "Omega-6", "Omega-3"],
    maxGramsCap: 10.0, // Tight cap (~1 tbsp max) due to high fat density
    preparation: "Sprinkle Raw as Topper",
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    kcalPerGram: 5.59,
    role: "carbohydrate",
    density: "rainbow",
    category: "seeds-nuts",
    icon: "pumpkin-seed",
    benefits: ["Natural Dewormer", "Prostate Health"],
    vitamins: ["Zinc", "Magnesium", "Cucurbitacin"],
    maxGramsCap: 9.0, // Controlled safe trace mineral parameter (~1 tbsp max)
    preparation: "Grind Raw & Unsalted",
    preparationAlert:
      "Contains cucurbitacin, an amino acid known to help eliminate intestinal parasites.",
  },

  // --- SAFE BUT SPREE / HIGH ENERGY ---
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    kcalPerGram: 5.88,
    role: "topper",
    category: "seeds-nuts",
    icon: "peanut-butter",
    isHighRisk: true,
    benefits: ["High Value Reward"],
    vitamins: ["B3", "E", "Healthy Fats"],
    maxGramsCap: 16.0, // ⚠️ CRITICAL PANCREAS SHIELD: Strict weight limit cutoff (~1 tbsp max)
    preparation: "Dollop Plain / Xylitol-Free",
    preparationAlert:
      "CRITICAL: Check physical label. Xylitol is a sweetener that is highly toxic and lethal to dogs.",
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds",
    kcalPerGram: 5.84,
    role: "topper",
    category: "seeds-nuts",
    icon: "sunflower-seeds",
    isHighRisk: true,
    benefits: ["Energy Booster"],
    vitamins: ["Vitamin E", "Selenium"],
    maxGramsCap: 8.0, // Limits concentrated oil accumulation (~1 tbsp max)
    preparation: "De-shell & Grind Raw",
    preparationAlert:
      "Never feed salted varieties or hulls; hulls cause severe gastrointestinal lacerations.",
  },

  // --- ⚠️ TOXIC / HIGH RISK / STRICTLY PROHIBITED (Explore Page Only) ---
  {
    id: "macadamia-nuts",
    name: "Macadamia Nuts",
    kcalPerGram: 0,
    role: "topper",
    category: "seeds-nuts",
    icon: "macadamia",
    isToxic: true,
    vitamins: [],
    benefits: [],
    maxGramsCap: 0, // Blocked completely from active layout calculations
    preparation: "DO NOT SERVE",
    preparationAlert:
      "LETHAL TOXICITY. Causes macadamia weakness, vomiting, tremors, hyperthermia, and hind-limb paralysis.",
  },
  {
    id: "walnuts",
    name: "Black Walnuts",
    kcalPerGram: 0,
    role: "topper",
    category: "seeds-nuts",
    icon: "walnut",
    isToxic: true,
    vitamins: [],
    benefits: [],
    maxGramsCap: 0, // Blocked completely from active layout calculations
    preparation: "TOXIC - STICK TO SEEDS",
    preparationAlert:
      "High risk of mold containing tremorgenic mycotoxins, which cause severe neurological seizures.",
  },
  {
    id: "almonds",
    name: "Almonds",
    kcalPerGram: 5.79,
    role: "topper",
    category: "seeds-nuts",
    icon: "almond",
    isHighRisk: true,
    maxGramsCap: 0, // Set to zero to prevent mechanical choking risks on phone layouts
    preparation: "Strict Choking Hazard",
    vitamins: [],
    benefits: [],
    preparationAlert:
      "Not easily digested by dogs. Can cause severe gastric blockages and sharp stomach blockages.",
  },

  // ==========================================
  // --- 🌻 SUPERFOOD SEEDS (Trace Minerals) ---
  // ==========================================
  {
    id: "sesame-seeds",
    name: "Ground Sesame",
    kcalPerGram: 5.73,
    role: "carbohydrate",
    density: "rainbow",
    category: "seeds-nuts",
    icon: "sesame-seed",
    benefits: ["Bone & Joint Shield"],
    vitamins: ["Calcium", "Copper", "Sesamin"],
    maxGramsCap: 6.0, // Precise micro-mineral volume envelope (~1 tsp max ground)
    preparation: "Grind Whole Raw Seeds",
  },
  {
    id: "sunflower-butter",
    name: "Sunflower Butter",
    kcalPerGram: 6.17,
    role: "carbohydrate",
    density: "rainbow",
    category: "seeds-nuts",
    icon: "seed-butter",
    isHighRisk: true,
    benefits: ["High Energy Boost"],
    vitamins: ["Vitamin E", "Magnesium"],
    maxGramsCap: 15.0, // ⚠️ CRITICAL HIGH-LIPID CEILING: Protects fragile metabolic pathways (~1 tbsp max)
    preparation: "Spoon Raw (Unsalted Only)",
    preparationAlert:
      "Verify raw component matrix label. Strictly avoid items with palm oils or added cane sugars.",
  },
];
