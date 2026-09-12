import pumpkinOatsTurkey from "../assets/pumpkin-oats-turkey.jpg";
import salmonGarden from "../assets/salmon-garden.jpg";
import chickenBlueberry from "../assets/chicken-blueberry.jpg";
import beefCarrotQuinoa from "../assets/beef-carrot-quinoa.jpg";
import cottageCheeseMorning from "../assets/cottage-cheese-morning.jpg";
import cottageCheeseMorning2 from "../assets/cottage-cheese-morning-2.jpg";

import lambSweetPotato from "../assets/lamb-sweet-potato.jpg";
import sardinesCucumber from "../assets/sardines-cucumbers.jpg";

// New imports for 10 seasonal recipes
import turkeyPumpkinBowl from "../assets/ground-turkey-pumpkin-bowl.jpg";
import porkGreenBean from "../assets/pork-green-bean-skillet.jpg";
import venisonParsnip from "../assets/venison-parsnip-medley.jpg";
import salmonGardenTopper from "../assets/seasonal-salmon-topper.jpg";
import sardineWinterGreens from "../assets/sardine-winter-greens.jpg";
import whiteFishOatPorridge from "../assets/white-fish-oat-porridge.jpg";
import eggBroccoliBreakfast from "../assets/egg-broccoli-breakfast.jpg";

import type { Ingredient } from "../types/nutrition";
import { INGREDIENT_LIBRARY } from "./ingredients";

interface Recipes {
    "id": string;
    "title": string;
    "tags": string[];
    "summary": string;
    "ingredients": Ingredient[];
    "sunnyLiked": boolean;
    "charlieLiked": boolean;
    "image": string;
    "imageAlt": string;
    "prep": string;
}

const recipeList: Recipes[] = [
    {
        "id": "1",
        "title": "Turkey, Pumpkin & Oat Bowl",
        "tags": ["Balanced", "Gentle"],
        "summary": "A soft, warming topper for busy weeks, with lean turkey and plain pumpkin for a simple, familiar bowl.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "ground-turkey"),
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "pumpkin"),
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "rolled-oats"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": pumpkinOatsTurkey,
        "imageAlt": "Mix of turkey, pumpkin, and oats",
        "prep": "Brown lean ground turkey\nUse plain, canned 100% pure pumpkin puree, never sweetened.\nThoroughly cook oats in plain water and cool before mixing."
    },
    {
        "id": "2",
        "title": "Salmon Garden Topper",
        "tags": [
            "Omega-3",
            "Protein"
        ],
        "summary": "Flaked salmon paired with cucumber and a small spoonful of cooked rice for hydration and shine.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "salmon-fillet" || i.id === "cucumber" || i.id === "white-rice"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": salmonGarden,
        "imageAlt": "Mix of salmon, cucumber, and rice",
        "prep": "Bake or steam the salmon fillet completely until it flakes easily with a fork; carefully check for and remove all tiny bones. Finely dice or puree the cucumber so it is safe to swallow, and use simple, plain boiled white or brown rice without any added seasonings."
    },
    {
        "id": "3",
        "title": "Chicken & Blueberry Spoonful",
        "tags": [
            "Antioxidants",
            "Lean"
        ],
        "summary": "A bright, small-portion mix of unseasoned boiled chicken, blueberries, and a splash of broth.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "chicken-breast" || i.id === "blueberries" || i.id === "broth"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": chickenBlueberry,
        "imageAlt": "Mix of chicken, blueberries, and broth",
        "prep": "Boil the chicken breast thoroughly in plain water until completely cooked through, then shred or dice into small pieces. Rinse fresh blueberries well before tossing them in."
    },
    {
        "id": "4",
        "title": "Beef, Carrot & Quinoa Bowl",
        "tags": [
            "Energy",
            "Fiber"
        ],
        "summary": "A satisfying topper built from lean beef, finely chopped carrot, and fluffy cooked quinoa.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "ground-beef" || i.id === "carrots" || i.id === "quinoa"),
        ],
        "sunnyLiked": true,
        "charlieLiked": false,
        "image": beefCarrotQuinoa,
        "imageAlt": "Mix of beef, carrot and quinoa",
        "prep": "Brown lean ground beef in a pan, draining any excess fat before serving. Steam or finely grate raw carrots to break down the fibrous walls for better nutrient absorption."
    },
    {
        "id": "5",
        "title": "Cottage Cheese Morning Mix",
        "tags": [
            "Calcium",
            "Easy"
        ],
        "summary": "Low-fat cottage cheese with diced pear and a few hemp hearts for a cool morning topper.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "cottage-cheese" || i.id === "pear" || i.id === "hemp-hearts"),
        ],
        "sunnyLiked": false,
        "charlieLiked": true,
        "image": cottageCheeseMorning,
        "imageAlt": "Mix of cottage cheese, pear, and hemp hearts",
        "prep": "Measure out plain, low-sodium cottage cheese. Core the pear completely and cut the flesh into small, bite-sized cubes. Sprinkle the raw hemp hearts over the top right before serving."
    },
    {
        "id": "7",
        "title": "Sardine & Cucumber Crunch",
        "tags": [
            "Omega-3",
            "Hydration"
        ],
        "summary": "A fast no-fuss topper combining water-packed sardines with cool cucumber and fresh dill.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "sardine" || i.id === "cucumber" || i.id === "dill"),
        ],
        "sunnyLiked": true,
        "charlieLiked": false,
        "image": sardinesCucumber,
        "imageAlt": "Mix of sardines, cucumber, and dill",
        "prep": "Use canned sardines packed in 100% water with no added salt or oils. Finely dice or slice the cucumber to match your dog's bite size. Finely chop a small pinch of fresh dill and toss evenly."
    },
    {
        "id": "8",
        "title": "Ground Turkey & Pumpkin Bowl",
        "tags": ["Warming", "Simple"],
        "summary": "A basic, hearty blend of lean ground turkey mixed with smooth pumpkin purée and rolled oats.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "ground-turkey" || i.id === "pumpkin" || i.id === "rolled-oats"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": turkeyPumpkinBowl,
        "imageAlt": "Mix of cooked ground turkey, plain pumpkin purée, and oats",
        "prep": "Brown lean ground turkey completely. Mix with pure, unsweetened pumpkin purée and water-cooked rolled oats until well integrated."
    },
    {
        "id": "10",
        "title": "Lamb & Sweet Potato Mash",
        "tags": ["Comfort", "Novel Protein"],
        "summary": "Tender cooked lamb combined with smooth mashed sweet potatoes and a sprinkle of soft green peas.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "lamb" || i.id === "sweet-potato" || i.id === "peas"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": lambSweetPotato,
        "imageAlt": "Mashed sweet potatoes with crumbled lamb and green peas",
        "prep": "Thoroughly cook the ground lamb or lamb chunks without seasonings. Mash with boiled, skinless sweet potato and add soft-boiled peas."
    },
    {
        "id": "11",
        "title": "Pork & Green Bean Skillet",
        "tags": ["Lean", "Energy"],
        "summary": "Chopped pork pieces tossed with tender green beans and finished with a tiny touch of coconut oil.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "pork" || i.id === "green-beans" || i.id === "coconut-oil"),
        ],
        "sunnyLiked": false,
        "charlieLiked": true,
        "image": porkGreenBean,
        "imageAlt": "Cooked chopped pork with sliced green beans",
        "prep": "Dice lean pork and pan-cook fully until no pink remains. Steam green beans until completely soft, chop finely, and toss with a light coat of liquid coconut oil."
    },
    {
        "id": "12",
        "title": "Venison & Parsnip Medley",
        "tags": ["Premium", "Fiber"],
        "summary": "Rich lean venison balanced with grated, sweet winter parsnips and fine bits of crunchy celery.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "venison" || i.id === "parsnip" || i.id === "celery"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": venisonParsnip,
        "imageAlt": "Cooked ground venison mixed with grated parsnips and fine celery slices",
        "prep": "Brown lean ground venison. Peel and finely grate or steam winter parsnips until completely tender. Finely mince celery and combine the trio together."
    },
    {
        "id": "13",
        "title": "Salmon Seasonal Garden Topper",
        "tags": ["Omega-3", "Shine"],
        "summary": "Wild salmon fillets flaked cleanly over finely chopped broccoli and an optional drop of flaxseed oil.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "salmon-fillet" || i.id === "broccoli" || i.id === "flaxseed-oil"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": salmonGardenTopper,
        "imageAlt": "Flaked wild salmon with finely minced steamed broccoli heads",
        "prep": "Poach or bake the salmon fillet completely, ensuring every tiny bone is felt and removed. Steam broccoli florets until tender, mince them to prevent choking, and stir with flaxseed oil."
    },
    {
        "id": "14",
        "title": "Sardine & Winter Greens Shaker",
        "tags": ["Hydration", "Minerals"],
        "summary": "Water-packed sardines mashed with soft defrosted spinach leaves and a dusting of nutrient-rich kelp.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "sardine" || i.id === "spinach" || i.id === "kelp"),
        ],
        "sunnyLiked": true,
        "charlieLiked": false,
        "image": sardineWinterGreens,
        "imageAlt": "Mashed whole sardines mixed with deep green spinach pieces",
        "prep": "Drain water-packed sardines and mash them down. Use cooked, completely plain defrosted spinach squeezed of excess liquid, chopped finely, and lightly dust with powdered kelp."
    },
    {
        "id": "15",
        "title": "White Fish & Oat Porridge",
        "tags": ["Gentle Digestion", "Soothing"],
        "summary": "Flaked plain white fish over a warm bowl of thick rolled oats, garnished with smooth pumpkin.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "white-fish" || i.id === "rolled-oats" || i.id === "pumpkin"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": whiteFishOatPorridge,
        "imageAlt": "Flaked white fish on top of thick cooked oatmeal with a dollop of pumpkin",
        "prep": "Steam a plain white fish fillet until it flakes easily; inspect for bones. Cook rolled oats in water until soft and gummy, then cool down slightly before folding in fish and pumpkin."
    },
    {
        "id": "16",
        "title": "Oat, Applesauce, & Cottage Cheese Mix",
        "tags": ["Calcium", "No-Cook"],
        "summary": "Low-sodium cottage cheese folded smoothly with plain, sweet applesauce and rolled oats.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "cottage-cheese" || i.id === "applesauce" || i.id === "rolled-oats"),
        ],
        "sunnyLiked": false,
        "charlieLiked": true,
        "image": cottageCheeseMorning2,
        "imageAlt": "White cottage cheese mixed with translucent applesauce and soft oats",
        "prep": "Use a low-fat, low-sodium plain cottage cheese. Blend with 100% unsweetened pure applesauce and soft, water-soaked or fully cooked rolled oats."
    },
    {
        "id": "17",
        "title": "Egg & Broccoli Breakfast Scramble",
        "tags": ["Protein", "Quick"],
        "summary": "A fast morning scramble of a whole cooked egg and fine minces of vibrant steamed broccoli.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "egg" || i.id === "broccoli"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": eggBroccoliBreakfast,
        "imageAlt": "Yellow scrambled egg pieces scattered with green minced broccoli",
        "prep": "Scramble a fresh egg thoroughly in a non-stick pan without using butter, oil, or milk. Finely mince steamed broccoli florets and toss together until cool."
    }
];

export const recipes = [...recipeList].sort((firstRecipe, secondRecipe) => firstRecipe.title.localeCompare(secondRecipe.title));
