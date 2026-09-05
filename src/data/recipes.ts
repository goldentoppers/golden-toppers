// import kitchenHero from "../assets/hero-woman-and-dog-in-kitchen.jpg";
// import dogHero from "../assets/hero-dog-with-carrots.jpg";
import pumpkinOatsTurkey from "../assets/pumpkin-oats-turkey.jpg";
import salmonGarden from "../assets/salmon-garden.jpg";
import chickenBlueberry from "../assets/chicken-blueberry.jpg";
import beefCarrotQuinoa from "../assets/beef-carrot-quinoa.jpg";
import cottageCheeseMorning from "../assets/cottage-cheese-morning.jpg";
import lambSweetPotato from "../assets/lamb-sweet-potato.jpg";
import sardinesCucumber from "../assets/sardines-cucumbers.jpg";
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

export const recipes: Recipes[] = [
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
        "id": "6",
        "title": "Lamb & Sweet Potato Mash",
        "tags": [
            "Novel Protein",
            "Comfort"
        ],
        "summary": "A gentle mash of cooked lamb and soft sweet potato for a hearty, single-protein variation.",
        "ingredients": [
            ...INGREDIENT_LIBRARY.filter((i) => i.id === "lamb" || i.id === "sweet-potato"),
        ],
        "sunnyLiked": true,
        "charlieLiked": true,
        "image": lambSweetPotato,
        "imageAlt": "Lamb and sweet potato mash in a bowl",
        "prep": "Cook the lamb thoroughly without adding any oils, salt, or seasonings. Bake or boil the sweet potato until soft, remove the skin entirely, and mash it to a smooth consistency."
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
    // {
    //     "title": "Duck, Rice & Green Bean Bowl",
    //     "tags": [
    //         "Gentle",
    //         "Protein"
    //     ],
    //     "summary": "A mild cooked topper for a reset day, using duck, soft rice, and tender green beans.",
    //     "ingredients": [
    //         ...INGREDIENT_LIBRARY.filter((i) => i.id === "duck" || i.id === "rice" || i.id === "green-beans"),
    //     ],
    //     "sunnyLiked": true,
    //     "charlieLiked": true,
    //     "image": dogHero,
    //     "imageAlt": "Mix of duck, rice, and green beans",
    //     "prep": "Cook the ground or diced duck meat thoroughly in a pan, pouring off excess heavy fat. Steam or boil the fresh green beans until tender, then chop into bite-sized pieces. Cook plain white or brown rice thoroughly in water."
    // },
    // {
    //     "title": "Egg & Spinach Weekend Bowl",
    //     "tags": [
    //         "Quick",
    //         "Iron"
    //     ],
    //     "summary": "Soft scrambled egg with wilted spinach and a small amount of cooked white rice.",
    //     "ingredients": [
    //         ...INGREDIENT_LIBRARY.filter((i) => i.id === "egg" || i.id === "spinach" || i.id === "rice"),
    //     ],
    //     "sunnyLiked": true,
    //     "charlieLiked": true,
    //     "image": kitchenHero,
    //     "imageAlt": "Mix of egg, spinach, and rice",
    //     "prep": "Whisk the egg completely and cook it soft-scrambled in a non-stick pan without any butter, oil, milk, or salt. Lightly steam or wilt the fresh spinach leaves, then finely chop them to aid digestion. Mix with fully cooled, plain boiled rice."
    // },
    // {
    //     "title": "Venison & Apple Training Topper",
    //     "tags": [
    //         "Novel Protein",
    //         "Fresh"
    //     ],
    //     "summary": "Lean venison with finely diced, seedless apple makes a bright and rewarding mini topper.",
    //     "ingredients": [
    //         ...INGREDIENT_LIBRARY.filter((i) => i.id === "venison" || i.id === "apple"),
    //     ],
    //     "sunnyLiked": true,
    //     "charlieLiked": true,
    //     "image": dogHero,
    //     "imageAlt": "Mix of venison and apple",
    //     "prep": "Sear or cook the ground venison thoroughly without any seasoning or added cooking fats. Wash the apple, slice away the flesh entirely away from the core, and finely dice into tiny pieces."
    // }
];