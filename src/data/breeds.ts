export interface HealthPredisposition {
    condition: string;
    riskLevel: "High" | "Moderate" | "Watch";
    description: string;
}

export interface BreedHealthProfile {
    id: string;
    name: string;
    category: "Sporting" | "Herding" | "Working" | "Hound" | "Toy" | "Terrier" | "Non-Sporting";
    weightRange: string;
    lifespan: string;
    icon: string;
    svgKey?: string;
    overview: string;
    healthPredispositions: HealthPredisposition[];
    nutritionalFocus: string[];
    recommendedToppers: string[];
}

export const ALL_BREEDS: BreedHealthProfile[] = [
    {
        "id": "afghan-hound",
        "name": "Afghan Hound",
        "category": "Hound",
        "weightRange": "50 - 60 lbs",
        "lifespan": "12 - 14 years",
        "icon": "standing",
        "svgKey": "Afghan Hound",
        "overview": "Aristocratic sighthound with a breathtaking silk coat, exotic silhouette, and sensitive metabolism demanding lean, high-quality lipid nutrition.",
        "healthPredispositions": [
            {
                "condition": "Low Body Fat Anesthesia Sensitivity",
                "riskLevel": "High",
                "description": "Extremely low natural adiposity slows drug clearance and requires gentle, non-toxic metabolic support."
            },
            {
                "condition": "Chylothorax",
                "riskLevel": "Moderate",
                "description": "Accumulation of lymphatic fluid in pleural cavity; requires low-fat, highly digestible diets."
            },
            {
                "condition": "Cataracts & Retinal Dystrophy",
                "riskLevel": "Moderate",
                "description": "Ocular sensitivities benefiting from lutein and dietary carotenoids."
            }
        ],
        "nutritionalFocus": [
            "Coat lipid enhancement (Omega-3 and Omega-6 balanced oils)",
            "Low-fat clean protein sources",
            "Ocular cellular defense antioxidants"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Cooked Turkey Breast",
            "Steamed Spinach",
            "Blueberries"
        ]
    },
    {
        "id": "airedale-terrier",
        "name": "Airedale Terrier",
        "category": "Terrier",
        "weightRange": "50 - 70 lbs",
        "lifespan": "11 - 14 years",
        "icon": "standing",
        "svgKey": "Airedale Terrier",
        "overview": "'King of Terriers' combining versatile hunting power, dense wiry coat, and protective devotion with skin and thyroid sensitivities.",
        "healthPredispositions": [
            {
                "condition": "Hypothyroidism",
                "riskLevel": "High",
                "description": "Autoimmune thyroid dysfunction predisposing to sudden weight gain, lethargy, and dry skin."
            },
            {
                "condition": "Atopic Dermatitis & Hot Spots",
                "riskLevel": "High",
                "description": "Allergic skin flare-ups common with dense wiry coats; benefited by anti-inflammatory marine oils."
            },
            {
                "condition": "Hip Dysplasia",
                "riskLevel": "Moderate",
                "description": "Large terrier stature puts mechanical wear on pelvic sockets during vigorous jumping."
            }
        ],
        "nutritionalFocus": [
            "Thyroid-protective measured caloric ratios",
            "Dermal barrier lipids (EPA/DHA)",
            "Joint cartilage building blocks"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Pumpkin Puree",
            "Steamed Broccoli",
            "Cooked Ground Turkey"
        ]
    },
    {
        "id": "akita",
        "name": "Akita",
        "category": "Working",
        "weightRange": "70 - 130 lbs",
        "lifespan": "10 - 13 years",
        "icon": "standing",
        "svgKey": "Akita",
        "overview": "Spiritual monument dog of Japan\u2014commanding, courageous, and deeply dignified, with distinctive immune-mediated health patterns.",
        "healthPredispositions": [
            {
                "condition": "Vogt-Koyanagi-Harada (VKH) / Uveodermatologic Syndrome",
                "riskLevel": "High",
                "description": "Autoimmune attack on melanocytes causing ocular uveitis, retinal detachment, and skin depigmentation."
            },
            {
                "condition": "Sebaceous Adenitis (SA)",
                "riskLevel": "High",
                "description": "Destruction of sebum glands leading to severe hair loss and dermal infections."
            },
            {
                "condition": "Gastric Torsion & Hip Dysplasia",
                "riskLevel": "High",
                "description": "Deep broad chest makes bloat prevention crucial."
            }
        ],
        "nutritionalFocus": [
            "High-potency essential fatty acids for follicular restoration",
            "Immune-modulating antioxidants to calm autoimmune hyperactivity",
            "Moisture-dense mixers that slow meal gulping"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Cooked Duck",
            "Blueberries",
            "Steamed Zucchini"
        ]
    },
    {
        "id": "alaskan-malamute",
        "name": "Alaskan Malamute",
        "category": "Working",
        "weightRange": "75 - 100 lbs",
        "lifespan": "10 - 14 years",
        "icon": "running-dog",
        "svgKey": "Alaskan Malamute",
        "overview": "Ancient Arctic heavy freight hauler with immense bone substance, endurance, and weather-resistant double coat.",
        "healthPredispositions": [
            {
                "condition": "Chondrodysplasia (Dwarfism)",
                "riskLevel": "Moderate",
                "description": "Genetic bone malformation causing bowed limbs and joint stress."
            },
            {
                "condition": "Zinc-Responsive Dermatosis",
                "riskLevel": "High",
                "description": "Impaired zinc absorption causing thick nasal/facial crusting and alopecia."
            },
            {
                "condition": "Gastric Torsion & Hip Dysplasia",
                "riskLevel": "High",
                "description": "Deep thoracic cavity creates bloat risks; massive bone mass strains hips."
            }
        ],
        "nutritionalFocus": [
            "Zinc bio-availability enhancement",
            "Heavy-load joint lubrication (Omega-3s, glucosamine)",
            "High-protein lean animal meat anchors"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Cooked Ground Beef",
            "Steamed Spinach",
            "Bone Broth"
        ]
    },
    {
        "id": "american-eskimo-dog",
        "name": "American Eskimo Dog",
        "category": "Non-Sporting",
        "weightRange": "10 - 35 lbs",
        "lifespan": "13 - 15 years",
        "icon": "standing",
        "svgKey": "American Eskimo Dog",
        "overview": "Nordic Spitz companion famous for snowy white coat, acute alertness, and agility, facing small-to-medium breed ocular and joint challenges.",
        "healthPredispositions": [
            {
                "condition": "Progressive Retinal Atrophy (PRA)",
                "riskLevel": "High",
                "description": "Degeneration of photoreceptors leading to gradual vision loss."
            },
            {
                "condition": "Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Kneecap instability common in miniature and toy sizes."
            },
            {
                "condition": "Tear Staining & Allergies",
                "riskLevel": "Moderate",
                "description": "Excess porphyrin tear production often exacerbated by food dyes and wheat fillers."
            }
        ],
        "nutritionalFocus": [
            "Retinal carotenoids (lutein, zeaxanthin)",
            "Clean whole foods free of artificial coloring to reduce tear staining",
            "Stifle joint support nutrients"
        ],
        "recommendedToppers": [
            "Fresh Blueberries",
            "Steamed Carrots",
            "Cooked Chicken Breast",
            "Pumpkin Puree"
        ]
    },
    {
        "id": "anatolian-shepherd",
        "name": "Anatolian Shepherd",
        "category": "Working",
        "weightRange": "80 - 150 lbs",
        "lifespan": "11 - 13 years",
        "icon": "standing",
        "svgKey": "Anatolian Shepherd",
        "overview": "Rugged, ancient Turkish flock guardian with immense territorial loyalty, independent mind, and slow metabolic rate.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Deep-chested giant build vulnerable to acute stomach twisting."
            },
            {
                "condition": "Hip & Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Heavy skeletal loading over decades requires early joint preservation."
            },
            {
                "condition": "Sensitivity to Chemical Additives",
                "riskLevel": "Moderate",
                "description": "Primitive metabolism responds best to simple, whole-food ingredients."
            }
        ],
        "nutritionalFocus": [
            "Measured caloric portions for naturally slow metabolism",
            "Hydrated, moisture-rich meals",
            "Joint cartilage anti-inflammatory support"
        ],
        "recommendedToppers": [
            "Cooked Lamb",
            "Bone Broth",
            "Steamed Broccoli",
            "Pureed Pumpkin"
        ]
    },
    {
        "id": "australian-cattle-dog",
        "name": "Australian Cattle Dog",
        "category": "Herding",
        "weightRange": "35 - 50 lbs",
        "lifespan": "12 - 16 years",
        "icon": "running-dog",
        "svgKey": "Australian Cattle Dog",
        "overview": "Tough, indomitable drover bred to herd wild cattle across the Australian Outback; exceptional longevity and tireless endurance.",
        "healthPredispositions": [
            {
                "condition": "Progressive Retinal Atrophy (prcd-PRA)",
                "riskLevel": "High",
                "description": "Genetic degenerative retinal blindness."
            },
            {
                "condition": "Cruciate Ligament & Stifle Strain",
                "riskLevel": "Moderate",
                "description": "Hard-braking agility around cattle creates mechanical wear across stifle ligaments."
            },
            {
                "condition": "Deafness (Congenital Hereditary)",
                "riskLevel": "Watch",
                "description": "Linked to piebald/roan coat patterning."
            }
        ],
        "nutritionalFocus": [
            "Athletic muscular recovery and tendon support",
            "Antioxidant retinal protection",
            "Lean protein replenishment"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Sweet Potato Puree",
            "Steamed Spinach",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "australian-shepherd",
        "name": "Australian Shepherd",
        "category": "Herding",
        "weightRange": "40 - 65 lbs",
        "lifespan": "12 - 15 years",
        "icon": "running-dog",
        "svgKey": "Australian Shepherd",
        "overview": "Brilliant, tirelessly active Western ranch herder with stunning coat variety, keen eyes, and intense work drive.",
        "healthPredispositions": [
            {
                "condition": "MDR1 Gene Mutation Sensitivity",
                "riskLevel": "High",
                "description": "Defective P-glycoprotein transporter permits toxins and certain medications past blood-brain barrier; clean whole foods minimize toxic load."
            },
            {
                "condition": "Hereditary Cataracts & Collie Eye Anomaly (CEA)",
                "riskLevel": "Moderate",
                "description": "Ocular lens and retinal hypoplasia vulnerabilities; supported by dietary lutein, zeaxanthin, and carotenoids."
            },
            {
                "condition": "Hip Dysplasia & Autoimmune Allergies",
                "riskLevel": "Moderate",
                "description": "High athletic agility increases cumulative impact across pelvic joints."
            }
        ],
        "nutritionalFocus": [
            "Clean, unadulterated whole foods with minimal synthetic additives",
            "Ocular antioxidant protection (beta-carotene, lutein from carrots and spinach)",
            "Anti-inflammatory recovery nutrition for high-energy herding muscles"
        ],
        "recommendedToppers": [
            "Steamed Carrots",
            "Cooked Salmon",
            "Steamed Spinach",
            "Plain Kefir"
        ]
    },
    {
        "id": "basenji",
        "name": "Basenji",
        "category": "Hound",
        "weightRange": "22 - 24 lbs",
        "lifespan": "13 - 14 years",
        "icon": "standing",
        "svgKey": "Basenji",
        "overview": "Africa's ancient 'barkless dog' with tightly curled tail, forehead wrinkles, cat-like grooming habits, and unique renal sensitivities.",
        "healthPredispositions": [
            {
                "condition": "Fanconi Syndrome",
                "riskLevel": "High",
                "description": "Kidney tubule transport defect causing glucose, potassium, and amino acid leakage into urine."
            },
            {
                "condition": "Immunoproliferative Enteropathy (IPSID)",
                "riskLevel": "High",
                "description": "Severe chronic malabsorption and lymphocytic enteritis of the small intestine."
            },
            {
                "condition": "Progressive Retinal Atrophy",
                "riskLevel": "Moderate",
                "description": "Night vision loss leading to total blindness."
            }
        ],
        "nutritionalFocus": [
            "Kidney tubule protective hydration and electrolyte balance",
            "Hypoallergenic, ultra-gentle digestive ingredients",
            "High-moisture bone broths and purees"
        ],
        "recommendedToppers": [
            "Cooked Turkey",
            "Pumpkin Puree",
            "Steamed Zucchini",
            "Plain White Rice"
        ]
    },
    {
        "id": "basset-hound",
        "name": "Basset Hound",
        "category": "Hound",
        "weightRange": "40 - 65 lbs",
        "lifespan": "12 - 13 years",
        "icon": "laying-down-head-up",
        "svgKey": "Basset Hound",
        "overview": "Charming, mournful-eyed trailing hound possessing second only to the Bloodhound in scent power, with heavy bone on dwarf limbs.",
        "healthPredispositions": [
            {
                "condition": "Intervertebral Disc Disease (IVDD)",
                "riskLevel": "High",
                "description": "Elongated spine and heavy body create immense disc shear stress."
            },
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Surprising deep-chested capacity leads to frequent bloat emergencies."
            },
            {
                "condition": "Chronic Otitis Externa & Ectropion",
                "riskLevel": "High",
                "description": "Sweeping ears and loose facial skin invite chronic bacterial/yeast infections."
            }
        ],
        "nutritionalFocus": [
            "Strict body weight enforcement to spare spinal discs",
            "Low-glycemic anti-yeast vegetable fiber",
            "Anti-inflammatory omega fatty acids"
        ],
        "recommendedToppers": [
            "Steamed Green Beans",
            "Cooked Turkey Breast",
            "Pure Pumpkin",
            "Wild Sardines"
        ]
    },
    {
        "id": "beagle",
        "name": "Beagle",
        "category": "Hound",
        "weightRange": "20 - 30 lbs",
        "lifespan": "12 - 15 years",
        "icon": "downward-dog-tail-wagging",
        "svgKey": "Beagle",
        "overview": "Merry, scent-driven hound with floppy ears, charming persistence, and an almost limitless appetite for scavenged food.",
        "healthPredispositions": [
            {
                "condition": "Rapid Weight Gain & Canine Obesity",
                "riskLevel": "High",
                "description": "Scents dictate appetite over satiety; unchecked weight exacerbates intervertebral disc and orthopedic issues."
            },
            {
                "condition": "Intervertebral Disc Disease (IVDD)",
                "riskLevel": "Moderate",
                "description": "Moderately elongated spinal column carries herniation risks when stressed by excess belly weight or jumping."
            },
            {
                "condition": "Chronic Otitis Externa (Ear Infections)",
                "riskLevel": "Moderate",
                "description": "Pendulous ear flaps trap humidity, predisposing to yeast and bacterial blooms frequently triggered by food allergens."
            }
        ],
        "nutritionalFocus": [
            "Bulking, calorie-sparing fiber additions for satiety (green beans, celery)",
            "Anti-inflammatory omega fatty acids to keep ear canals calm",
            "Low-sugar whole-fruit toppers"
        ],
        "recommendedToppers": [
            "Steamed Green Beans",
            "Pureed Pumpkin",
            "Cooked Chicken Breast",
            "Diced Apple (No Seeds)"
        ]
    },
    {
        "id": "belgian-malinois",
        "name": "Belgian Malinois",
        "category": "Herding",
        "weightRange": "40 - 80 lbs",
        "lifespan": "14 - 16 years",
        "icon": "running-dog",
        "svgKey": "Belgian Malinois",
        "overview": "World-class tactical military and police working dog possessing unmatched drive, lightning speed, and intense work ethic.",
        "healthPredispositions": [
            {
                "condition": "Cruciate Ligament & Orthopedic Wear",
                "riskLevel": "Moderate",
                "description": "Extreme bite-work and vertical leaping create high impact on joints."
            },
            {
                "condition": "Progressive Retinal Atrophy & Cataracts",
                "riskLevel": "Moderate",
                "description": "Vision clarity is vital for working agility; benefits from carotenoids."
            },
            {
                "condition": "Gastric Torsion",
                "riskLevel": "Moderate",
                "description": "High respiratory rate during work requires cooling, calm feeding windows."
            }
        ],
        "nutritionalFocus": [
            "High-energy working muscular recovery nutrients",
            "Marine Omega-3 fatty acids for joint and tendon resilience",
            "Electrolyte hydration"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Sweet Potato Puree",
            "Bone Broth",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "belgian-sheepdog",
        "name": "Belgian Sheepdog",
        "category": "Herding",
        "weightRange": "45 - 75 lbs",
        "lifespan": "12 - 14 years",
        "icon": "standing",
        "svgKey": "Belgian Sheepdog",
        "overview": "Elegant, jet-black herder combining sensitive intelligence with fierce devotion and high physical agility.",
        "healthPredispositions": [
            {
                "condition": "Epilepsy",
                "riskLevel": "High",
                "description": "Idiopathic seizure vulnerability requiring stable, balanced metabolic fuel."
            },
            {
                "condition": "Hip & Elbow Dysplasia",
                "riskLevel": "Moderate",
                "description": "Pelvic socket wear from intense agility."
            },
            {
                "condition": "Gastric Carcinoma",
                "riskLevel": "Moderate",
                "description": "Oncological stomach predisposition; benefits from antioxidant cruciferous nutrients."
            }
        ],
        "nutritionalFocus": [
            "Cellular antioxidants (Sulforaphane, polyphenols)",
            "MCT lipids and neuroprotective omega fatty acids",
            "Joint cartilage buffers"
        ],
        "recommendedToppers": [
            "Steamed Broccoli",
            "Blueberries",
            "Wild Sardines",
            "Cooked Turkey"
        ]
    },
    {
        "id": "belgian-tervuren",
        "name": "Belgian Tervuren",
        "category": "Herding",
        "weightRange": "45 - 75 lbs",
        "lifespan": "12 - 14 years",
        "icon": "running-dog",
        "svgKey": "Belgian Tervuren",
        "overview": "Breathtaking fawn-to-russet long-coated herder renowned for elegance, brilliant working mind, and emotional sensitivity.",
        "healthPredispositions": [
            {
                "condition": "Idiopathic Epilepsy",
                "riskLevel": "High",
                "description": "Higher genetic rate of seizure disorders requiring neurological nutritional stabilization."
            },
            {
                "condition": "Hip Dysplasia & Osteoarthritis",
                "riskLevel": "Moderate",
                "description": "Repetitive impact wear on pelvic joints."
            },
            {
                "condition": "Gastric Torsion",
                "riskLevel": "Moderate",
                "description": "Deep-chested frame vulnerable to post-exercise bloat."
            }
        ],
        "nutritionalFocus": [
            "Neuroprotective antioxidants and marine lipids",
            "Joint anti-inflammatory support",
            "High-moisture meal hydration"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Blueberries",
            "Bone Broth",
            "Steamed Spinach"
        ]
    },
    {
        "id": "bernese-mountain-dog",
        "name": "Bernese Mountain Dog",
        "category": "Working",
        "weightRange": "70 - 115 lbs",
        "lifespan": "7 - 10 years",
        "icon": "laying-down-head-up",
        "svgKey": "Bernese Mountain Dog",
        "overview": "Gentle, tri-colored Swiss alpine draft dog loved for warm devotion, patience with children, and heart-breakingly short longevity.",
        "healthPredispositions": [
            {
                "condition": "Histiocytic Sarcoma & Cancer",
                "riskLevel": "High",
                "description": "Highest cancer mortality of any domestic breed; cruciferous sulforaphane, indole-3-carbinols, and dark fruit polyphenols provide vital cellular armor."
            },
            {
                "condition": "Severe Osteoarthritis & Hip/Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Massive frame exerts unrelenting pressure on cartilage; early anti-inflammatory intervention is mandatory."
            },
            {
                "condition": "Bloat (Gastric Torsion)",
                "riskLevel": "High",
                "description": "Deep chest anatomy requires careful portioning and pre-hydrating dry food with bone broths."
            }
        ],
        "nutritionalFocus": [
            "Heavy-duty cruciferous cellular defense (Sulforaphane from steamed broccoli)",
            "High-dose marine Omega-3s (EPA/DHA)",
            "Joint and collagen replenishment from whole food broths"
        ],
        "recommendedToppers": [
            "Steamed Broccoli",
            "Wild Sardines",
            "Cottage Cheese",
            "Mashed Blueberries"
        ]
    },
    {
        "id": "bichon-frise",
        "name": "Bichon Frise",
        "category": "Non-Sporting",
        "weightRange": "12 - 18 lbs",
        "lifespan": "14 - 15 years",
        "icon": "downward-dog-tail-wagging",
        "svgKey": "Bichon Frise",
        "overview": "Cheerful, velvety white powder-puff companion prized for merry optimism, hypoallergenic coat, and delicate urinary tract.",
        "healthPredispositions": [
            {
                "condition": "Calcium Oxalate & Struvite Urolithiasis (Bladder Stones)",
                "riskLevel": "High",
                "description": "Breed with highest rate of bladder stone formation; strict high-moisture diet and low-oxalate ingredients are life-saving."
            },
            {
                "condition": "Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Shallow knee groove causing slipping kneecaps."
            },
            {
                "condition": "Atopic Skin Allergies",
                "riskLevel": "Moderate",
                "description": "Prone to pollen and food allergies causing facial scratching and tear stains."
            }
        ],
        "nutritionalFocus": [
            "High dietary moisture to flush bladder crystals and maintain low urine specific gravity",
            "Avoid high-oxalate foods (spinach, sweet potatoes, nuts)",
            "Clean low-allergen poultry and fish proteins"
        ],
        "recommendedToppers": [
            "Cooked Turkey Breast",
            "Steamed Zucchini",
            "Fresh Cucumber",
            "Blueberries"
        ]
    },
    {
        "id": "bloodhound",
        "name": "Bloodhound",
        "category": "Hound",
        "weightRange": "80 - 110 lbs",
        "lifespan": "10 - 12 years",
        "icon": "laying-down-head-up",
        "svgKey": "Bloodhound",
        "overview": "Supreme trailing hound with unmatched olfactory sensory power, noble wrinkled head, and profound bloat and joint risks.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Extremely deep, narrow chest puts breed at grave risk for stomach twisting."
            },
            {
                "condition": "Hip & Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Heavy, loose-jointed skeletal structure subject to severe osteoarthritis."
            },
            {
                "condition": "Entropion / Ectropion & Severe Ear Infections",
                "riskLevel": "High",
                "description": "Profound facial skin folds and pendulous ears trap moisture and debris."
            }
        ],
        "nutritionalFocus": [
            "Pre-hydrated, slow-fed meals to mitigate bloat expansion",
            "High-dose marine joint anti-inflammatories",
            "Anti-yeast low-sugar vegetables"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Bone Broth",
            "Steamed Green Beans",
            "Pure Pumpkin"
        ]
    },
    {
        "id": "blue-heeler",
        "name": "Blue Heeler",
        "category": "Herding",
        "weightRange": "35 - 50 lbs",
        "lifespan": "12 - 16 years",
        "icon": "running-dog",
        "svgKey": "Blue Heeler",
        "overview": "Blue-mottled Australian Cattle Dog variant famous for tenacity, endurance, and fearless cattle-nipping herding instincts.",
        "healthPredispositions": [
            {
                "condition": "Progressive Retinal Atrophy (PRA)",
                "riskLevel": "High",
                "description": "Degeneration of retina leading to total blindness."
            },
            {
                "condition": "Hip & Stifle Joint Strain",
                "riskLevel": "Moderate",
                "description": "Rough pasture work accelerates wear across stifles and hips."
            },
            {
                "condition": "Congenital Hereditary Deafness",
                "riskLevel": "Watch",
                "description": "Pigment-associated sensory defect."
            }
        ],
        "nutritionalFocus": [
            "Working muscle recovery and glycogen synthesis",
            "Retinal carotenoids (lutein, zeaxanthin)",
            "Cartilage lubrication"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Sweet Potato Puree",
            "Steamed Spinach",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "border-collie",
        "name": "Border Collie",
        "category": "Herding",
        "weightRange": "30 - 55 lbs",
        "lifespan": "12 - 15 years",
        "icon": "running-dog",
        "svgKey": "Border Collie",
        "overview": "World\u2019s premier herding mastermind\u2014possessing intense athletic stamina, famous predatory herding 'eye', and exceptional kinetic power.",
        "healthPredispositions": [
            {
                "condition": "Collie Eye Anomaly (CEA)",
                "riskLevel": "High",
                "description": "Choroidal hypoplasia genetic defect affecting deep eye vascular structures."
            },
            {
                "condition": "Border Collie Collapse (BCC)",
                "riskLevel": "Moderate",
                "description": "Exercise-induced hyperthermia and disorientation during strenuous, high-drive work in warm weather."
            },
            {
                "condition": "Osteochondritis Dissecans (OCD) & Hip Dysplasia",
                "riskLevel": "Moderate",
                "description": "Cartilage flaps peel away in shoulders or hocks from extreme athletic braking and cornering."
            }
        ],
        "nutritionalFocus": [
            "Rapid glycogen replenishment and working muscular recovery",
            "Retinal and vascular carotenoid support",
            "Connective tissue joint repair (Omega-3s, collagen broths)"
        ],
        "recommendedToppers": [
            "Cooked Salmon",
            "Sweet Potato Puree",
            "Steamed Spinach",
            "Bone Broth"
        ]
    },
    {
        "id": "boston-terrier",
        "name": "Boston Terrier",
        "category": "Non-Sporting",
        "weightRange": "12 - 25 lbs",
        "lifespan": "11 - 13 years",
        "icon": "playing-with-tennis-ball",
        "svgKey": "Boston Terrier",
        "overview": "Tuxedo-clad 'American Gentleman' celebrated for lively intelligence, comical expressions, and brachycephalic respiratory traits.",
        "healthPredispositions": [
            {
                "condition": "Brachycephalic Airway Obstruction",
                "riskLevel": "High",
                "description": "Stenotic nares and elongated palate cause snoring and heat intolerance; lean body conditioning is mandatory."
            },
            {
                "condition": "Corneal Ulcers & Cataracts",
                "riskLevel": "High",
                "description": "Large, prominent eyes vulnerable to abrasions and early hereditary cataracts."
            },
            {
                "condition": "Hemivertebrae & Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Screw-tail genetics can lead to butterfly vertebrae and spinal curvature issues."
            }
        ],
        "nutritionalFocus": [
            "Strict body-mass index control to protect breathing efficiency",
            "Eye-protective antioxidants (Anthocyanins, Lutein)",
            "Digestive prebiotics that reduce notorious flatulence"
        ],
        "recommendedToppers": [
            "Fresh Blueberries",
            "Steamed Zucchini",
            "Plain Kefir",
            "Cooked White Fish"
        ]
    },
    {
        "id": "boxer",
        "name": "Boxer",
        "category": "Working",
        "weightRange": "50 - 80 lbs",
        "lifespan": "10 - 12 years",
        "icon": "playing-with-tennis-ball",
        "svgKey": "Boxer",
        "overview": "Playful, exuberant athlete with a muscular frame, expressive wrinkled muzzle, and known oncological and cardiac vulnerabilities.",
        "healthPredispositions": [
            {
                "condition": "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC)",
                "riskLevel": "High",
                "description": "Known as Boxer Cardiomyopathy; fatty replacement of heart muscle causes arrhythmias, fainting, and sudden collapse."
            },
            {
                "condition": "Mast Cell Tumors & Oncology Risks",
                "riskLevel": "High",
                "description": "Breed has one of the highest canine tumor incidences; dietary sulforaphanes, quercetin, and polyphenols supply vital support."
            },
            {
                "condition": "Bloat (GDV) & Colitis",
                "riskLevel": "High",
                "description": "Deep, athletic chest predisposing to torsion; sensitive colon prone to inflammatory bowel flare-ups."
            }
        ],
        "nutritionalFocus": [
            "Cardiac support nutrients (Taurine, L-Carnitine, marine Omega-3s)",
            "Oncological antioxidant shields (Cruciferous vegetables and dark berries)",
            "Gut-soothing soluble fibers to protect colonic mucosa"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Steamed Broccoli",
            "Pureed Blueberries",
            "Pure Pumpkin"
        ]
    },
    {
        "id": "brittany",
        "name": "Brittany",
        "category": "Sporting",
        "weightRange": "30 - 40 lbs",
        "lifespan": "12 - 14 years",
        "icon": "playing-with-tennis-ball",
        "svgKey": "Brittany",
        "overview": "Bright, agile, leggy pointing gun dog with boundless bird dog energy, sweet temperament, and relatively hardy constitution.",
        "healthPredispositions": [
            {
                "condition": "Hip Dysplasia",
                "riskLevel": "Moderate",
                "description": "High athletic speed and tight hunting cuts put repetitive torque on pelvic joints."
            },
            {
                "condition": "Hypothyroidism",
                "riskLevel": "Moderate",
                "description": "Slowed thyroid hormone production causing unexpected weight gain, lethargy, and coat thinning."
            },
            {
                "condition": "Epilepsy",
                "riskLevel": "Watch",
                "description": "Idiopathic seizure vulnerability; stable neuroprotective diets rich in medium-chain triglycerides provide ketone support."
            }
        ],
        "nutritionalFocus": [
            "Cartilage and ligament recovery from intense field exercise",
            "Thyroid metabolic safeguards via measured caloric additions",
            "MCT and omega fatty acids for neurological balance"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Steamed Green Beans",
            "Rolled Oats",
            "Blueberries"
        ]
    },
    {
        "id": "bull-terrier",
        "name": "Bull Terrier",
        "category": "Terrier",
        "weightRange": "50 - 70 lbs",
        "lifespan": "12 - 14 years",
        "icon": "standing",
        "svgKey": "Bull Terrier",
        "overview": "Distinctive egg-shaped head, muscular powerhouse body, and clownish personality with specific renal and heart susceptibilities.",
        "healthPredispositions": [
            {
                "condition": "Hereditary Nephritis (Kidney Disease)",
                "riskLevel": "High",
                "description": "Glomerular basement membrane defect causing protein loss and early renal failure."
            },
            {
                "condition": "Aortic & Mitral Valve Heart Disease",
                "riskLevel": "Moderate",
                "description": "Cardiovascular valve stenosis requiring low-sodium nutrition."
            },
            {
                "condition": "Lethal Acrodermatitis (LAD) & Skin Allergies",
                "riskLevel": "Moderate",
                "description": "Zinc metabolism and severe allergic skin sensitivities."
            }
        ],
        "nutritionalFocus": [
            "High dietary moisture to ease renal workload",
            "Low-sodium cardiovascular support",
            "Zinc and marine omega-3s for skin barrier fortification"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Cooked Turkey",
            "Pumpkin Puree",
            "Steamed Zucchini"
        ]
    },
    {
        "id": "english-bulldog",
        "name": "Bulldog",
        "category": "Non-Sporting",
        "weightRange": "40 - 50 lbs",
        "lifespan": "8 - 10 years",
        "icon": "sleeping",
        "svgKey": "Bulldog",
        "overview": "Heavy-set, low-slung, calm companion with extreme brachycephalic conformation and significant dermal and orthopedic challenges.",
        "healthPredispositions": [
            {
                "condition": "Severe Brachycephalic Syndrome & Heat Stroke",
                "riskLevel": "High",
                "description": "Severe upper airway resistance impairs thermoregulation; lean weight maintenance is the #1 medical defense against collapse."
            },
            {
                "condition": "Facial Fold Dermatitis & Interdigital Cysts",
                "riskLevel": "High",
                "description": "Deep anatomical skin folds harbor moisture and yeast; anti-inflammatory fatty acids help calm dermal hyper-reactivity."
            },
            {
                "condition": "Hip Dysplasia & Patellar Luxation",
                "riskLevel": "High",
                "description": "Shallow acetabula and wide stance exert heavy torque across stifles and hips."
            }
        ],
        "nutritionalFocus": [
            "Strict calorie restriction to preserve airway patency",
            "Anti-yeast, low-glycemic vegetable fiber",
            "Hydrating, cooling whole-food mixers"
        ],
        "recommendedToppers": [
            "Cooked White Fish Fillet",
            "Steamed Zucchini",
            "Fresh Cucumber",
            "Blueberries"
        ]
    },
    {
        "id": "cane-corso",
        "name": "Cane Corso",
        "category": "Working",
        "weightRange": "90 - 120 lbs",
        "lifespan": "9 - 12 years",
        "icon": "standing",
        "svgKey": "Cane Corso",
        "overview": "Ancient Italian mastiff warrior and estate guardian with commanding musculature, deep loyalty, and giant-breed orthopedic challenges.",
        "healthPredispositions": [
            {
                "condition": "Severe Hip & Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Extreme muscular weight combined with steep pelvic angulation accelerates secondary osteoarthritis and cartilage wear."
            },
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Deep, barrel-chested cavity creates dangerous potential for stomach distention and torsion."
            },
            {
                "condition": "Entropion / Ectropion & Cherry Eye",
                "riskLevel": "Moderate",
                "description": "Facial skin laxity leads to eyelid rolling and tear gland inflammation."
            }
        ],
        "nutritionalFocus": [
            "Anti-inflammatory joint lubrication to support massive physical mass",
            "Moisture-rich purees to hydrate kibble and slow eating pace",
            "Pure lean proteins that avoid excess visceral fat accumulation"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Bone Broth",
            "Steamed Green Beans",
            "Pure Pumpkin"
        ]
    },
    {
        "id": "cavalier-king-charles-spaniel",
        "name": "Cavalier King Charles Spaniel",
        "category": "Toy",
        "weightRange": "13 - 18 lbs",
        "lifespan": "9 - 14 years",
        "icon": "sleeping",
        "svgKey": "Cavalier King Charles Spaniel",
        "overview": "Sweet-tempered, soulful toy spaniel prized for gentle companionship, though facing major cardiovascular and neurological challenges.",
        "healthPredispositions": [
            {
                "condition": "Myxomatous Mitral Valve Disease (MMVD)",
                "riskLevel": "High",
                "description": "Nearly 100% of Cavaliers show mitral valve murmurs by age 10; requires early cardiovascular support and strict low-sodium nutrition."
            },
            {
                "condition": "Syringomyelia (SM / Chiari-like Malformation)",
                "riskLevel": "High",
                "description": "Skull back is too small for cerebellum, obstructing cerebrospinal fluid flow and forming painful spinal cord cavities."
            },
            {
                "condition": "Keratoconjunctivitis Sicca (Dry Eye)",
                "riskLevel": "Moderate",
                "description": "Autoimmune tear gland destruction benefiting from dietary vitamin A and protective fatty acids."
            }
        ],
        "nutritionalFocus": [
            "Strict low-sodium foods to reduce ventricular workload",
            "Cardiac energy substrates (CoQ10, Omega-3s, Taurine)",
            "Anti-inflammatory neuroprotective nutrients to soothe spinal pressure"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Steamed Blueberries",
            "Steamed Green Beans",
            "Cooked Turkey Breast"
        ]
    },
    {
        "id": "chihuahua",
        "name": "Chihuahua",
        "category": "Toy",
        "weightRange": "3 - 6 lbs",
        "lifespan": "14 - 18 years",
        "icon": "standing",
        "svgKey": "Chihuahua",
        "overview": "World's smallest domestic canine, packed with big-dog courage, alert charm, and fragile tracheal and dental conformation.",
        "healthPredispositions": [
            {
                "condition": "Tracheal Collapse",
                "riskLevel": "High",
                "description": "Weakened cartilaginous airway rings cause honking cough and airway obstruction under excitement."
            },
            {
                "condition": "Medial Patellar Luxation",
                "riskLevel": "High",
                "description": "Extremely shallow knee grooves cause slipping kneecaps."
            },
            {
                "condition": "Hypoglycemia & Dental Disease",
                "riskLevel": "High",
                "description": "Rapid metabolic rate and tiny glycogen reserves in puppies/teacups require stable complex nutrients."
            }
        ],
        "nutritionalFocus": [
            "Soft, hydrated teaspoon portions to protect delicate trachea",
            "Stable low-glycemic nutrients to prevent blood sugar drops",
            "Dental-supportive natural enzymes"
        ],
        "recommendedToppers": [
            "Cooked Chicken Breast",
            "Pure Pumpkin",
            "Plain Yogurt",
            "Steamed Carrots"
        ]
    },
    {
        "id": "chow-chow",
        "name": "Chow Chow",
        "category": "Non-Sporting",
        "weightRange": "45 - 70 lbs",
        "lifespan": "11 - 13 years",
        "icon": "standing",
        "svgKey": "Chow Chow",
        "overview": "Ancient lion-like Chinese guardian with a distinctive blue-black tongue, deep scowl, straight hocks, and severe orthopedic and ocular risks.",
        "healthPredispositions": [
            {
                "condition": "Entropion & Ocular Irritation",
                "riskLevel": "High",
                "description": "Inward rolling eyelids cause eyelashes to scratch corneas, causing severe pain and ulceration."
            },
            {
                "condition": "Cruciate Ligament Ruptures & Dysplasia",
                "riskLevel": "High",
                "description": "Unusually straight hind-leg stilted gait puts intense mechanical pressure on stifle joints."
            },
            {
                "condition": "Hypothyroidism & Pemphigus",
                "riskLevel": "Moderate",
                "description": "Autoimmune skin and thyroid conditions."
            }
        ],
        "nutritionalFocus": [
            "Heavy-duty anti-inflammatory joint lubrication",
            "Ocular cellular defense nutrients (carotenoids)",
            "Hypoallergenic novel proteins"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Cooked Turkey",
            "Steamed Spinach",
            "Blueberries"
        ]
    },
    {
        "id": "cocker-spaniel",
        "name": "Cocker Spaniel",
        "category": "Sporting",
        "weightRange": "20 - 30 lbs",
        "lifespan": "10 - 14 years",
        "icon": "downward-dog-tail-wagging",
        "svgKey": "Cocker Spaniel",
        "overview": "Beloved sporting companion with melting expressive eyes, lush silky coat, and significant dermatological and ocular sensitivities.",
        "healthPredispositions": [
            {
                "condition": "Severe Otitis Externa & Malassezia Dermatitis",
                "riskLevel": "High",
                "description": "Heavy ear flaps harbor yeast and secondary bacterial infections; high-glycemic carbohydrates worsen dermal flareups."
            },
            {
                "condition": "Autoimmune Hemolytic Anemia (AIHA/IMHA)",
                "riskLevel": "High",
                "description": "Immune system attacks its own red blood cells; requires clean nutrition and avoidance of dietary trigger allergens."
            },
            {
                "condition": "Cataracts & Glaucoma",
                "riskLevel": "High",
                "description": "High rate of lens clouding and intraocular pressure elevation."
            }
        ],
        "nutritionalFocus": [
            "Anti-yeast low-sugar vegetable mixers",
            "Marine Omega-3s to modulate systemic immune hyper-reactivity",
            "Ocular antioxidants (lutein, zeaxanthin, anthocyanins)"
        ],
        "recommendedToppers": [
            "Cooked Turkey",
            "Steamed Zucchini",
            "Wild Sardines",
            "Blueberries"
        ]
    },
    {
        "id": "dachshund",
        "name": "Dachshund",
        "category": "Hound",
        "weightRange": "11 - 32 lbs",
        "lifespan": "12 - 16 years",
        "icon": "laying-down-head-up",
        "svgKey": "Dachshund",
        "overview": "Spunky, determined scent hunter with a famously elongated back and short legs, bred originally to dig into badger dens.",
        "healthPredispositions": [
            {
                "condition": "Intervertebral Disc Disease (IVDD)",
                "riskLevel": "High",
                "description": "Highest IVDD risk of any breed (up to 25% lifetime incidence); spine discs calcify early. Every additional pound dramatically increases disc rupture probability."
            },
            {
                "condition": "Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Kneecap slips out of groove due to limb angulation, causing intermittent skipping and lameness."
            },
            {
                "condition": "Mitral Valve Disease",
                "riskLevel": "Moderate",
                "description": "Degenerative heart murmur common in senior dachshunds; benefits from low-sodium, cardiovascular-friendly nutrition."
            }
        ],
        "nutritionalFocus": [
            "Ultra-strict caloric envelope to keep spinal load featherlight",
            "Collagen and cartilage support for intervertebral elasticity",
            "Low-sodium whole foods to protect heart valve efficiency"
        ],
        "recommendedToppers": [
            "Cooked Turkey",
            "Steamed Green Beans",
            "Cottage Cheese (Low Sodium)",
            "Blueberries"
        ]
    },
    {
        "id": "doberman-pinscher",
        "name": "Doberman Pinscher",
        "category": "Working",
        "weightRange": "60 - 100 lbs",
        "lifespan": "10 - 12 years",
        "icon": "standing",
        "svgKey": "Doberman Pinscher",
        "overview": "Sleek, powerful protector celebrated for peerless loyalty, rapid reflexes, and high genetic predisposition to myocardial failure.",
        "healthPredispositions": [
            {
                "condition": "Dilated Cardiomyopathy (DCM)",
                "riskLevel": "High",
                "description": "Up to 50% lifetime incidence of heart muscle thinning and sudden cardiac failure; early taurine, carnitine, and omega-3s are vital."
            },
            {
                "condition": "Cervical Spondylomyelopathy (Wobbler Syndrome)",
                "riskLevel": "High",
                "description": "Cervical spinal cord compression causing unstable gait in hind limbs; requires anti-inflammatory tissue support."
            },
            {
                "condition": "Von Willebrand's Disease (vWD)",
                "riskLevel": "Moderate",
                "description": "Hereditary bleeding disorder caused by deficiency in clotting factor protein."
            }
        ],
        "nutritionalFocus": [
            "High-potency myocardial defense (Taurine, marine DHA/EPA)",
            "Spinal connective tissue anti-inflammatory buffers",
            "Lean novel proteins with zero artificial preservatives"
        ],
        "recommendedToppers": [
            "Wild Sardines in Water",
            "Cooked Beef Liver (Tiny amounts)",
            "Steamed Spinach",
            "Blueberries"
        ]
    },
    {
        "id": "english-springer-spaniel",
        "name": "English Springer Spaniel",
        "category": "Sporting",
        "weightRange": "40 - 50 lbs",
        "lifespan": "12 - 14 years",
        "icon": "running-dog",
        "svgKey": "English Springer Spaniel",
        "overview": "Enthusiastic, tireless flushing bird dog celebrated for cheerful tail-wagging drive, bird scenting, and rich feathered coat.",
        "healthPredispositions": [
            {
                "condition": "Phosphofructokinase (PFK) Deficiency",
                "riskLevel": "Moderate",
                "description": "Metabolic enzyme deficiency causing exertional muscle cramping and hemolytic anemia."
            },
            {
                "condition": "Chronic Otitis Externa & Seborrhea",
                "riskLevel": "High",
                "description": "Heavy pendulous feathered ears trap ear canal moisture; epidermal lipid balance is key to preventing yeast overgrowth."
            },
            {
                "condition": "Progressive Retinal Atrophy (PRA)",
                "riskLevel": "Moderate",
                "description": "Gradual retinal thinning requiring sustained dietary antioxidant defense."
            }
        ],
        "nutritionalFocus": [
            "Skin and ear canal anti-inflammatory lipids (EPA/DHA)",
            "Easily metabolized lean whole proteins for working recovery",
            "Retinal carotenoids (beta-carotene, lutein)"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Steamed Spinach",
            "Cooked Duck",
            "Pureed Pumpkin"
        ]
    },
    {
        "id": "finnish-spitz",
        "name": "Finnish Spitz",
        "category": "Non-Sporting",
        "weightRange": "20 - 33 lbs",
        "lifespan": "13 - 15 years",
        "icon": "standing",
        "svgKey": "Finnish Spitz",
        "overview": "Vibrant golden-red bark-pointer of Finland with fox-like beauty, lively intelligence, and vocal hunting heritage.",
        "healthPredispositions": [
            {
                "condition": "Idiopathic Epilepsy",
                "riskLevel": "High",
                "description": "Genetic seizure predisposition in the breed requiring stable, neuroprotective nutrition."
            },
            {
                "condition": "Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Stifle joint laxity causing intermittent hopping gait."
            },
            {
                "condition": "Pemphigus Foliaceus",
                "riskLevel": "Watch",
                "description": "Autoimmune blistering skin disease."
            }
        ],
        "nutritionalFocus": [
            "MCT fats and neuroprotective omega fatty acids",
            "Joint cartilage support",
            "Antioxidant-rich whole berries"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Blueberries",
            "Steamed Green Beans",
            "Rolled Oats"
        ]
    },
    {
        "id": "french-bulldog",
        "name": "French Bulldog",
        "category": "Non-Sporting",
        "weightRange": "18 - 28 lbs",
        "lifespan": "10 - 12 years",
        "icon": "sleeping",
        "svgKey": "French Bulldog",
        "overview": "Compact, heavy-boned companion with a distinctive bat-eared silhouette, brachycephalic airway anatomy, and chronic allergy sensitivities.",
        "healthPredispositions": [
            {
                "condition": "Brachycephalic Airway Syndrome (BOAS)",
                "riskLevel": "High",
                "description": "Elongated soft palate and stenotic nares restrict airflow; strict body condition control is life-saving to prevent respiratory distress and heat stroke."
            },
            {
                "condition": "Intervertebral Disc Disease (IVDD)",
                "riskLevel": "High",
                "description": "Chondrodystrophic spinal conformation predisposes vertebrae to premature disc calcification and painful ruptures."
            },
            {
                "condition": "Atopic Dermatitis & Food Allergies",
                "riskLevel": "High",
                "description": "Proneness to recurrent skin fold dermatitis, paw pododermatitis, and ear infections; highly responsive to bioavailable marine anti-inflammatory lipids."
            }
        ],
        "nutritionalFocus": [
            "Strict body-condition control to reduce respiratory and spinal strain",
            "Marine Omega-3 fatty acids (EPA/DHA) to fortify epidermal lipid barriers",
            "Easily swallowed, hydrated purees that minimize swallowing airway fatigue"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Pure Pumpkin Puree",
            "Steamed Zucchini",
            "Plain Kefir"
        ]
    },
    {
        "id": "german-shepherd",
        "name": "German Shepherd",
        "category": "Herding",
        "weightRange": "50 - 90 lbs",
        "lifespan": "9 - 13 years",
        "icon": "standing",
        "svgKey": "German Shepherd",
        "overview": "Noble, highly trainable working dog recognized for protective courage, athletic power, and notoriously sensitive gastrointestinal tracts.",
        "healthPredispositions": [
            {
                "condition": "Exocrine Pancreatic Insufficiency (EPI)",
                "riskLevel": "High",
                "description": "Acinar cell atrophy prevents normal digestive enzyme synthesis, causing maldigestion, loose stools, and nutrient starvation."
            },
            {
                "condition": "Degenerative Myelopathy (DM)",
                "riskLevel": "High",
                "description": "SOD1 gene mutation causing progressive spinal cord demyelination; neuroprotective antioxidant and B-complex nutrition supports nerve vitality."
            },
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Deep, narrow thoracic cavity allows stomach rotation upon gaseous distention; requires smaller, hydrated, non-aerated feedings."
            }
        ],
        "nutritionalFocus": [
            "Soothing gut-barrier prebiotics and digestive hydration (bone broth, plain yogurt)",
            "Lean, single-source novel meats for gentle digestion",
            "Neurological myelin-sheath support (B-vitamins, Omega-3s)"
        ],
        "recommendedToppers": [
            "Plain Kefir",
            "Cooked Ground Turkey",
            "Pumpkin Puree",
            "Steamed Spinach"
        ]
    },
    {
        "id": "german-shorthaired-pointer",
        "name": "German Shorthaired Pointer",
        "category": "Sporting",
        "weightRange": "45 - 70 lbs",
        "lifespan": "10 - 12 years",
        "icon": "running-dog",
        "svgKey": "German Shorthaired Pointer",
        "overview": "All-purpose gun dog built for immense stamina, explosive speed, and intense field work in demanding terrain.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "High athletic respiration rate coupled with deep-chested anatomy makes rapid drinking or post-exercise feeding hazardous."
            },
            {
                "condition": "Hip Dysplasia & Joint Wear",
                "riskLevel": "Moderate",
                "description": "Relentless galloping and jumping across rough cover accelerates joint inflammation."
            },
            {
                "condition": "Lupoid Dermatosis & Ear Canal Issues",
                "riskLevel": "Watch",
                "description": "Immune-mediated skin crusting and ear flap dermatitis; benefits from bioavailable essential fatty acids."
            }
        ],
        "nutritionalFocus": [
            "Metabolic recovery glycogen replenishment (cooked sweet potatoes, oats)",
            "Hydrated, non-aerated topper broths that slow food consumption rate",
            "High-potency marine anti-inflammatories for connective tissue recovery"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Sweet Potato Puree",
            "Bone Broth",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "golden-retriever",
        "name": "Golden Retriever",
        "category": "Sporting",
        "weightRange": "55 - 75 lbs",
        "lifespan": "10 - 12 years",
        "icon": "standing",
        "svgKey": "Golden Retriever",
        "overview": "Warm, affectionate, versatile sporting dog with a rich golden coat, enthusiastic energy, and recognized vulnerabilities to oncology and joint wear.",
        "healthPredispositions": [
            {
                "condition": "Hemangiosarcoma & Oncology Risks",
                "riskLevel": "High",
                "description": "High breed prevalence of oncology diagnoses; dietary sulforaphanes, anthocyanins, and polyphenols provide crucial cellular defense."
            },
            {
                "condition": "Hip & Elbow Osteoarthritis",
                "riskLevel": "High",
                "description": "Mechanical stress on large joints accelerates degenerative cartilage breakdown, needing lifelong anti-inflammatory nutritional buffers."
            },
            {
                "condition": "Hypothyroidism & Slowed Metabolism",
                "riskLevel": "Moderate",
                "description": "Autoimmune thyroiditis slows resting metabolic rate, making exact 10% caloric measurement vital to avoid secondary obesity."
            },
            {
                "condition": "Pigmentary Uveitis & Skin Allergies",
                "riskLevel": "Moderate",
                "description": "Ocular cysts and environmental dermal sensitivities; benefits from lutein, zeaxanthin, and marine omega-3s."
            }
        ],
        "nutritionalFocus": [
            "Cellular antioxidant defenses (Polyphenols, Sulforaphanes, Anthocyanins)",
            "Synovial fluid lubrication and joint cartilage protection",
            "Caloric guardrails to protect thyroid-compromised metabolism"
        ],
        "recommendedToppers": [
            "Fresh Blueberries",
            "Wild Salmon Fillets",
            "Steamed Broccoli",
            "Pureed Sweet Potato"
        ]
    },
    {
        "id": "great-dane",
        "name": "Great Dane",
        "category": "Working",
        "weightRange": "110 - 180 lbs",
        "lifespan": "7 - 10 years",
        "icon": "standing",
        "svgKey": "Great Dane",
        "overview": "Majestic 'Apollo of Dogs' combining immense towering scale with gentle, easygoing indoor temperament.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat #1 Breed Risk)",
                "riskLevel": "High",
                "description": "Highest statistical incidence of fatal stomach twisting; meals must be measured, hydrated, and fed in non-stressful conditions."
            },
            {
                "condition": "Dilated Cardiomyopathy (DCM)",
                "riskLevel": "High",
                "description": "Massive heart requires high cellular energy output; prone to ventricular thinning and failure."
            },
            {
                "condition": "Rapid Growth Skeletal Disorders (HOD, Osteosarcoma)",
                "riskLevel": "High",
                "description": "Gigantic bone turnover rate accelerates joint stress and oncological bone risks."
            }
        ],
        "nutritionalFocus": [
            "Hydrated, moisture-rich mixers that prevent dry kibble stomach expansion",
            "Cardiac cellular protection (Taurine, CoQ10 from whole foods)",
            "Heavy-duty joint lubrication (Omega-3 fatty acids)"
        ],
        "recommendedToppers": [
            "Cooked Salmon",
            "Steamed Broccoli",
            "Bone Broth",
            "Pumpkin Puree"
        ]
    },
    {
        "id": "great-pyrenees",
        "name": "Great Pyrenees",
        "category": "Working",
        "weightRange": "85 - 120 lbs",
        "lifespan": "10 - 12 years",
        "icon": "laying-down-head-up",
        "svgKey": "Great Pyrenees",
        "overview": "Zen-like flock guardian of the Pyrenees mountains with a weather-proof white coat, calm majesty, and low resting metabolic rate.",
        "healthPredispositions": [
            {
                "condition": "Osteosarcoma (Bone Cancer)",
                "riskLevel": "High",
                "description": "Giant-breed bone cell turnover elevates bone oncology vulnerability."
            },
            {
                "condition": "Gastric Torsion (Bloat)",
                "riskLevel": "High",
                "description": "Deep thoracic build vulnerable to stomach twisting."
            },
            {
                "condition": "Hip Dysplasia & Patellar Luxation",
                "riskLevel": "High",
                "description": "Massive frame puts sustained load across joints."
            }
        ],
        "nutritionalFocus": [
            "Sulforaphane cruciferous cellular defense (broccoli)",
            "Measured caloric portions for naturally low baseline metabolism",
            "Joint lubrication with marine EPA/DHA"
        ],
        "recommendedToppers": [
            "Steamed Broccoli",
            "Wild Sardines",
            "Pumpkin Puree",
            "Bone Broth"
        ]
    },
    {
        "id": "greyhound",
        "name": "Greyhound",
        "category": "Hound",
        "weightRange": "60 - 75 lbs",
        "lifespan": "10 - 14 years",
        "icon": "running-dog",
        "svgKey": "Greyhound",
        "overview": "Ancient, gentle cheetah of the dog world built for 45-mph bursts, with ultra-low body fat, thin skin, and unique blood chemistry.",
        "healthPredispositions": [
            {
                "condition": "Greyhound Bleeding Disorder (Delayed Fibrinolysis)",
                "riskLevel": "High",
                "description": "Clots break down prematurely 24-48 hours after minor trauma or surgery."
            },
            {
                "condition": "Osteosarcoma",
                "riskLevel": "High",
                "description": "High prevalence of bone tumors in long limbs."
            },
            {
                "condition": "Gastric Torsion & Corns on Paw Pads",
                "riskLevel": "Moderate",
                "description": "Enormous deep heart-girth chest creates bloat risk."
            }
        ],
        "nutritionalFocus": [
            "Cellular bone and vascular antioxidant defense",
            "Moisture-dense meal hydration to prevent bloat",
            "Clean, easily metabolized lean proteins"
        ],
        "recommendedToppers": [
            "Steamed Broccoli",
            "Wild Salmon",
            "Bone Broth",
            "Sweet Potato Puree"
        ]
    },
    {
        "id": "havanese",
        "name": "Havanese",
        "category": "Toy",
        "weightRange": "7 - 13 lbs",
        "lifespan": "14 - 16 years",
        "icon": "downward-dog-tail-wagging",
        "svgKey": "Havanese",
        "overview": "Cuba's national dog\u2014a spirited, silky-coated charmer that thrives on cheerful companionship, generally healthy but facing small-breed joint risks.",
        "healthPredispositions": [
            {
                "condition": "Patellar Luxation",
                "riskLevel": "High",
                "description": "Kneecap displaces easily from the shallow trochlear groove, creating premature stifle arthritis."
            },
            {
                "condition": "Heart Murmurs (Mitral Valve)",
                "riskLevel": "Moderate",
                "description": "Senior onset of valve insufficiency; benefits from clean low-sodium topper mixers."
            },
            {
                "condition": "Cataracts & Retinal Dysplasia",
                "riskLevel": "Moderate",
                "description": "Ocular vulnerabilities that benefit from regular dietary carotenoids."
            }
        ],
        "nutritionalFocus": [
            "Stifle joint and cartilage protection",
            "Low-sodium cardiovascular support",
            "Hydrating whole foods for long-term renal health"
        ],
        "recommendedToppers": [
            "Cooked Turkey Breast",
            "Steamed Carrots",
            "Fresh Blueberries",
            "Bone Broth"
        ]
    },
    {
        "id": "irish-setter",
        "name": "Irish Setter",
        "category": "Sporting",
        "weightRange": "60 - 70 lbs",
        "lifespan": "12 - 14 years",
        "icon": "running-dog",
        "svgKey": "Irish Setter",
        "overview": "Glamorous mahogany-red bird dog with rollicking good spirits, feathering coats, and distinct gluten-sensitive enteropathy genetics.",
        "healthPredispositions": [
            {
                "condition": "Gluten-Sensitive Enteropathy",
                "riskLevel": "High",
                "description": "Breed-specific celiac-like villous atrophy triggered by wheat gluten causing severe chronic diarrhea and weight loss."
            },
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Extremely deep, narrow ribcage predisposes to stomach rotation."
            },
            {
                "condition": "Progressive Retinal Atrophy & Epilepsy",
                "riskLevel": "Moderate",
                "description": "Night blindness and seizure sensitivities."
            }
        ],
        "nutritionalFocus": [
            "Strictly 100% gluten-free whole food additions (no wheat, barley, or rye)",
            "Moisture-rich pre-hydrated meals to prevent dry food bloat",
            "Retinal carotenoids (carrots, blueberries)"
        ],
        "recommendedToppers": [
            "Cooked Salmon",
            "Pumpkin Puree",
            "Steamed Carrots",
            "Plain White Rice"
        ]
    },
    {
        "id": "irish-wolfhound",
        "name": "Irish Wolfhound",
        "category": "Hound",
        "weightRange": "105 - 140 lbs",
        "lifespan": "6 - 8 years",
        "icon": "standing",
        "svgKey": "Irish Wolfhound",
        "overview": "Gentle giant sighthound originally bred to hunt fierce wolves, possessing quiet grace, immense height, and very brief life expectancy.",
        "healthPredispositions": [
            {
                "condition": "Dilated Cardiomyopathy (DCM)",
                "riskLevel": "High",
                "description": "Up to 30% lifetime prevalence of heart failure and atrial fibrillation."
            },
            {
                "condition": "Osteosarcoma (Bone Cancer)",
                "riskLevel": "High",
                "description": "Highest rate of bone tumors among giant breeds."
            },
            {
                "condition": "Gastric Torsion & Pneumonia",
                "riskLevel": "High",
                "description": "Massive deep chest requires extreme bloat caution."
            }
        ],
        "nutritionalFocus": [
            "Heavy-duty myocardial support (Taurine, L-Carnitine, marine EPA/DHA)",
            "Cellular antioxidant defense (Cruciferous vegetables)",
            "Hydrating broths to prevent dry food expansion"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Steamed Broccoli",
            "Bone Broth",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "italian-greyhound",
        "name": "Italian Greyhound",
        "category": "Toy",
        "weightRange": "7 - 14 lbs",
        "lifespan": "14 - 15 years",
        "icon": "standing",
        "svgKey": "Italian Greyhound",
        "overview": "Miniature sighthound combining lightning grace with delicate fine-boned anatomy, fragile limbs, and periodontal sensitivities.",
        "healthPredispositions": [
            {
                "condition": "Distal Radius/Ulna Fractures",
                "riskLevel": "High",
                "description": "Pencil-thin front leg bones break easily from ordinary jumps from couches."
            },
            {
                "condition": "Severe Periodontal Disease",
                "riskLevel": "High",
                "description": "Narrow jaw crowding leads to rapid tartar, gingivitis, and early tooth loss."
            },
            {
                "condition": "Autoimmune Thyroiditis & Alopecia",
                "riskLevel": "Moderate",
                "description": "Thyroid imbalances and color-dilution hair thinning."
            }
        ],
        "nutritionalFocus": [
            "Bone-supporting minerals and natural collagen",
            "Dental-supportive natural enzymes",
            "Essential fatty acids for skin and coat barrier"
        ],
        "recommendedToppers": [
            "Cooked Salmon",
            "Steamed Carrots",
            "Plain Yogurt",
            "Blueberries"
        ]
    },
    {
        "id": "jack-russell-terrier",
        "name": "Jack Russell Terrier",
        "category": "Terrier",
        "weightRange": "13 - 17 lbs",
        "lifespan": "13 - 16 years",
        "icon": "playing-with-tennis-ball",
        "svgKey": "Jack Russell Terrier",
        "overview": "Boundlessly energetic earth dog with fearless hunting instincts, intense prey drive, and generally robust longevity.",
        "healthPredispositions": [
            {
                "condition": "Primary Lens Luxation (PLL)",
                "riskLevel": "High",
                "description": "Zonular ligament fibers break down, causing eye lens dislocation and glaucoma."
            },
            {
                "condition": "Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "High-impact jumping strains stifle grooves."
            },
            {
                "condition": "Late-Onset Ataxia (LOA) & Myasthenia",
                "riskLevel": "Watch",
                "description": "Neurological coordination and balance issues."
            }
        ],
        "nutritionalFocus": [
            "Ocular antioxidants (lutein, zeaxanthin)",
            "Stifle joint and tendon support",
            "High-energy working recovery nutrients"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Steamed Blueberries",
            "Cooked Turkey Breast",
            "Steamed Carrots"
        ]
    },
    {
        "id": "keeshond",
        "name": "Keeshond",
        "category": "Non-Sporting",
        "weightRange": "35 - 45 lbs",
        "lifespan": "12 - 15 years",
        "icon": "standing",
        "svgKey": "Keeshond",
        "overview": "Beloved Dutch barge dog with magnificent silver-black lion's ruff, dark spectacles around expressive eyes, and sweet disposition.",
        "healthPredispositions": [
            {
                "condition": "Primary Hyperparathyroidism (PHPT)",
                "riskLevel": "High",
                "description": "Benign tumor on parathyroid gland causes dangerously elevated blood calcium and bladder stones."
            },
            {
                "condition": "Hypothyroidism & Alopecia X",
                "riskLevel": "Moderate",
                "description": "Thyroid and hormonal coat loss."
            },
            {
                "condition": "Mitral Valve Disease",
                "riskLevel": "Moderate",
                "description": "Degenerative heart murmurs in seniors."
            }
        ],
        "nutritionalFocus": [
            "Balanced calcium metabolism support",
            "Thyroid-protective caloric control",
            "Essential fatty acids for double coat volume"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Pumpkin Puree",
            "Steamed Zucchini",
            "Blueberries"
        ]
    },
    {
        "id": "kelpie",
        "name": "Kelpie",
        "category": "Herding",
        "weightRange": "30 - 50 lbs",
        "lifespan": "12 - 15 years",
        "icon": "running-dog",
        "svgKey": "Kelpie",
        "overview": "Australian mustering master dog built to run across the backs of sheep in burning outback heat with endless stamina.",
        "healthPredispositions": [
            {
                "condition": "Cerebellar Abiotrophy (CA)",
                "riskLevel": "Moderate",
                "description": "Premature death of Purkinje cells causing loss of physical coordination."
            },
            {
                "condition": "Progressive Retinal Atrophy (PRA)",
                "riskLevel": "Moderate",
                "description": "Genetic photoreceptor loss."
            },
            {
                "condition": "Hyperexertion Heat Stress",
                "riskLevel": "Moderate",
                "description": "Will run to exhaustion ignoring biological limits; requires conscious hydration."
            }
        ],
        "nutritionalFocus": [
            "Electrolyte and cellular hydration",
            "Neurological antioxidant protection",
            "Joint and tendon structural repair"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Sweet Potato Puree",
            "Bone Broth",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "komondor",
        "name": "Komondor",
        "category": "Working",
        "weightRange": "80 - 100 lbs",
        "lifespan": "10 - 12 years",
        "icon": "standing",
        "svgKey": "Komondor",
        "overview": "Imposing Hungarian sheep guardian with a heavy white corded coat resembling dreadlocks, guarding fiercely against wolves.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Deep-chested build at elevated risk for fatal torsion."
            },
            {
                "condition": "Hip Dysplasia",
                "riskLevel": "High",
                "description": "Heavy cord coat weight adds to joint strain on pelvic joints."
            },
            {
                "condition": "Skin Infections under Corded Coat",
                "riskLevel": "Moderate",
                "description": "Moisture trapped in dense cords fosters fungal and bacterial dermatitis."
            }
        ],
        "nutritionalFocus": [
            "Moisture-dense meal hydration to prevent bloat",
            "Epidermal lipid fortification",
            "Joint cartilage repair"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Cooked Turkey",
            "Steamed Broccoli",
            "Bone Broth"
        ]
    },
    {
        "id": "kuvasz",
        "name": "Kuvasz",
        "category": "Working",
        "weightRange": "70 - 115 lbs",
        "lifespan": "10 - 12 years",
        "icon": "standing",
        "svgKey": "Kuvasz",
        "overview": "Ancient royal Hungarian flock protector with dense white double coat, fearless loyalty, and giant-breed joint needs.",
        "healthPredispositions": [
            {
                "condition": "Gastric Torsion & Bloat",
                "riskLevel": "High",
                "description": "Deep thoracic cavity creates high bloat vulnerability."
            },
            {
                "condition": "Hip & Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Progressive degenerative joint disease from massive skeletal mass."
            },
            {
                "condition": "Osteochondritis Dissecans (OCD)",
                "riskLevel": "Moderate",
                "description": "Cartilage separation in shoulders during rapid growth periods."
            }
        ],
        "nutritionalFocus": [
            "Joint cartilage lubrication (Omega-3s)",
            "Calorie-controlled additions to avoid excess joint weight",
            "Hydrated digestive mixers"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Pumpkin Puree",
            "Steamed Green Beans",
            "Bone Broth"
        ]
    },
    {
        "id": "labrador-retriever",
        "name": "Labrador Retriever",
        "category": "Sporting",
        "weightRange": "55 - 80 lbs",
        "lifespan": "11 - 13 years",
        "icon": "running-dog",
        "svgKey": "Labrador Retriever",
        "overview": "World-renowned athletic water retriever celebrated for family devotion, high food motivation, and a genetic tendency toward rapid weight gain.",
        "healthPredispositions": [
            {
                "condition": "POMC Gene & Obesity Predisposition",
                "riskLevel": "High",
                "description": "A widespread genetic deletion impairs neurological hunger-satiety signaling, making high-volume low-calorie fiber additions critical."
            },
            {
                "condition": "Hip & Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Polygenic developmental joint malformation causing progressive cartilage loss, osteophytes, and painful degenerative joint disease."
            },
            {
                "condition": "Cranial Cruciate Ligament (CCL) Disease",
                "riskLevel": "High",
                "description": "Chronic ligamentous degeneration under high kinetic load; requires lean weight management and anti-inflammatory support."
            }
        ],
        "nutritionalFocus": [
            "High-volume, low-calorie satiety anchors (steamed green beans and pumpkin)",
            "Protective cartilage nutrients (glucosamine, chondroitin, natural marine lipids)",
            "Lean novel proteins that avoid excess caloric density"
        ],
        "recommendedToppers": [
            "Steamed Green Beans",
            "Canned Sardines in Water",
            "Plain Canned Pumpkin",
            "Steamed Broccoli"
        ]
    },
    {
        "id": "leonberger",
        "name": "Leonberger",
        "category": "Working",
        "weightRange": "90 - 170 lbs",
        "lifespan": "7 - 9 years",
        "icon": "laying-down-head-up",
        "svgKey": "Leonberger",
        "overview": "Majestic German 'gentle lion' bred from Saint Bernards, Newfoundlands, and Great Pyrenees; immense, friendly, and brief-lived.",
        "healthPredispositions": [
            {
                "condition": "Leonberger Polyneuropathy (LPN1 & LPN2)",
                "riskLevel": "High",
                "description": "Severe progressive neurological nerve degeneration causing hind-limb weakness and laryngeal paralysis."
            },
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Gigantic thoracic volume creates severe bloat danger."
            },
            {
                "condition": "Osteosarcoma & Hemangiosarcoma",
                "riskLevel": "High",
                "description": "Heavy oncology vulnerability typical of giant Molosser breeds."
            }
        ],
        "nutritionalFocus": [
            "Myelin sheath and neurological antioxidant support (B-vitamins, Omega-3s)",
            "Cruciferous cellular protection (sulforaphane)",
            "Moisture-dense bloat prevention"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Steamed Broccoli",
            "Bone Broth",
            "Blueberries"
        ]
    },
    {
        "id": "maltese",
        "name": "Maltese",
        "category": "Toy",
        "weightRange": "4 - 7 lbs",
        "lifespan": "12 - 15 years",
        "icon": "standing",
        "svgKey": "Maltese",
        "overview": "Ancient gentle aristocrat of the Mediterranean with a floor-length silky white mantle, fearless charm, and delicate liver and dental health.",
        "healthPredispositions": [
            {
                "condition": "Portosystemic Shunt (PSS)",
                "riskLevel": "High",
                "description": "Abnormal liver bypass vessel preventing normal blood toxin filtration."
            },
            {
                "condition": "Severe Dental Disease & Tracheal Collapse",
                "riskLevel": "High",
                "description": "Tiny crowded teeth accumulate rapid plaque; soft tracheal cartilage weakens."
            },
            {
                "condition": "Hypoglycemia & Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Requires stable, small, nutrient-dense meals."
            }
        ],
        "nutritionalFocus": [
            "Clean, easily filtered proteins that spare liver workload",
            "Hydrated soft teaspoon mixers",
            "Tear stain reduction with natural whole foods"
        ],
        "recommendedToppers": [
            "Cooked Chicken Breast",
            "Pure Pumpkin",
            "Steamed Zucchini",
            "Plain White Rice"
        ]
    },
    {
        "id": "miniature-american-shepherd",
        "name": "Miniature American Shepherd",
        "category": "Herding",
        "weightRange": "20 - 40 lbs",
        "lifespan": "12 - 13 years",
        "icon": "playing-with-tennis-ball",
        "svgKey": "Miniature American Shepherd",
        "overview": "Small-scale, energetic herding dynamo with dazzling eyes, striking double coat, and remarkable agility in a compact package.",
        "healthPredispositions": [
            {
                "condition": "MDR1 Drug Multi-Sensitivity",
                "riskLevel": "High",
                "description": "Genetic P-glycoprotein deficiency reduces ability to pump common toxins out of the central nervous system."
            },
            {
                "condition": "Progressive Retinal Atrophy (prcd-PRA)",
                "riskLevel": "High",
                "description": "Genetic photoreceptor breakdown leading to premature blindness."
            },
            {
                "condition": "Patellar Luxation & Hip Dysplasia",
                "riskLevel": "Moderate",
                "description": "Fast athletic turns place lateral shear on small stifle joints."
            }
        ],
        "nutritionalFocus": [
            "Clean, unadulterated whole foods that minimize neuro-toxic metabolic burden",
            "Retinal defense nutrients (Lutein, Zeaxanthin, Vitamin A)",
            "Anti-inflammatory joint lubrication for high-speed agility"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Steamed Carrots",
            "Fresh Blueberries",
            "Plain Kefir"
        ]
    },
    {
        "id": "miniature-schnauzer",
        "name": "Miniature Schnauzer",
        "category": "Terrier",
        "weightRange": "11 - 20 lbs",
        "lifespan": "12 - 15 years",
        "icon": "downward-dog-tail-wagging",
        "svgKey": "Miniature Schnauzer",
        "overview": "Stocky, whiskered, alert terrier with fearless watchdog instincts, great humor, and acute lipid metabolism disorders.",
        "healthPredispositions": [
            {
                "condition": "Idiopathic Hyperlipidemia",
                "riskLevel": "High",
                "description": "Defective lipid metabolism causes dangerously high blood triglycerides and cholesterol, predisposing to acute pancreatitis."
            },
            {
                "condition": "Acute & Chronic Pancreatitis",
                "riskLevel": "High",
                "description": "Enzyme activation within pancreas causes self-digestion; all fatty oils, bacon, and greasy foods are strictly contraindicated."
            },
            {
                "condition": "Calcium Oxalate Urolithiasis (Bladder Stones)",
                "riskLevel": "High",
                "description": "High formation rate of painful bladder stones requiring moisture-rich foods and lower oxalate ingredients."
            }
        ],
        "nutritionalFocus": [
            "Strict ultra-low-fat diet (<10-12% dry matter fat maximum)",
            "High dietary moisture to dilute urine and flush crystals",
            "Avoid high-oxalate vegetables (spinach, sweet potatoes) in favor of low-oxalate alternatives"
        ],
        "recommendedToppers": [
            "Cooked Turkey Breast (Skinless)",
            "Plain Boiled White Fish",
            "Steamed Zucchini",
            "Fresh Cucumber"
        ]
    },
    {
        "id": "newfoundland",
        "name": "Newfoundland",
        "category": "Working",
        "weightRange": "100 - 150 lbs",
        "lifespan": "8 - 10 years",
        "icon": "laying-down-head-up",
        "svgKey": "Newfoundland",
        "overview": "Gentle giant water lifesaver with webbed feet, water-repellent double coat, extraordinary swimming power, and subvalvular aortic stenosis risks.",
        "healthPredispositions": [
            {
                "condition": "Subvalvular Aortic Stenosis (SAS)",
                "riskLevel": "High",
                "description": "Narrowed aortic outflow tract forces heart muscle to work overtime, risking heart failure."
            },
            {
                "condition": "Cystinuria (Bladder Stones)",
                "riskLevel": "High",
                "description": "Hereditary kidney transport defect leading to recurrent cysteine bladder stones."
            },
            {
                "condition": "Gastric Torsion & Massive Joint Osteoarthritis",
                "riskLevel": "High",
                "description": "Giant weight accelerates cartilage wear and bloat hazard."
            }
        ],
        "nutritionalFocus": [
            "Myocardial energy substrates (Taurine, L-Carnitine, Omega-3s)",
            "High urinary hydration to dilute cystine crystals",
            "Joint cartilage and synovial protection"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Bone Broth",
            "Steamed Broccoli",
            "Pureed Pumpkin"
        ]
    },
    {
        "id": "norwegian-elkhound",
        "name": "Norwegian Elkhound",
        "category": "Hound",
        "weightRange": "48 - 55 lbs",
        "lifespan": "12 - 15 years",
        "icon": "standing",
        "svgKey": "Norwegian Elkhound",
        "overview": "Ancient Viking hunter bred to track giant moose across snowfields with ringing bark, stamina, and renal and cyst vulnerabilities.",
        "healthPredispositions": [
            {
                "condition": "Fanconi-Like Renal Disease & Glomerulonephritis",
                "riskLevel": "High",
                "description": "Hereditary kidney dysfunction common in the breed requiring clean hydration."
            },
            {
                "condition": "Sebaceous Cysts",
                "riskLevel": "High",
                "description": "Frequent development of benign follicular skin cysts."
            },
            {
                "condition": "Hypothyroidism & Retinal Atrophy",
                "riskLevel": "Moderate",
                "description": "Thyroid slowing leading to weight gain."
            }
        ],
        "nutritionalFocus": [
            "High moisture content to support renal filtration",
            "Skin lipid balance (Omega-3s, Zinc)",
            "Antioxidant retinal protection"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Cooked Turkey",
            "Pumpkin Puree",
            "Fresh Blueberries"
        ]
    },
    {
        "id": "old-english-sheepdog",
        "name": "Old English Sheepdog",
        "category": "Herding",
        "weightRange": "60 - 100 lbs",
        "lifespan": "10 - 12 years",
        "icon": "standing",
        "svgKey": "Old English Sheepdog",
        "overview": "Shaggy, clownish drover with distinctive bear-like shuffle, rich double coat, and prone to primary ciliary dyskinesia and hip issues.",
        "healthPredispositions": [
            {
                "condition": "Primary Ciliary Dyskinesia (PCD)",
                "riskLevel": "Moderate",
                "description": "Defective respiratory cilia impair airway clearing, causing chronic bronchitis and pneumonia."
            },
            {
                "condition": "Hip Dysplasia & Osteoarthritis",
                "riskLevel": "High",
                "description": "Heavy bone and coat weight accelerate pelvic joint inflammation."
            },
            {
                "condition": "Cataracts & Otitis Externa",
                "riskLevel": "Moderate",
                "description": "Dense facial hair covers eyes and ears, trapping moisture."
            }
        ],
        "nutritionalFocus": [
            "Respiratory and immune antioxidant defense (Vitamin C, E, polyphenols)",
            "Heavy-duty joint lubrication (Omega-3s)",
            "Low-sugar anti-yeast vegetable fiber"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Steamed Broccoli",
            "Pureed Pumpkin",
            "Cooked Turkey"
        ]
    },
    {
        "id": "papillon",
        "name": "Papillon",
        "category": "Toy",
        "weightRange": "5 - 10 lbs",
        "lifespan": "13 - 16 years",
        "icon": "standing",
        "svgKey": "Papillon",
        "overview": "Dainty, remarkably athletic butterfly-eared toy dog renowned for superior agility, high trainability, and delicate stifles.",
        "healthPredispositions": [
            {
                "condition": "Patellar Luxation",
                "riskLevel": "High",
                "description": "High-jumping agility in toy frame strains shallow femoral knee grooves."
            },
            {
                "condition": "Progressive Retinal Atrophy & Cataracts",
                "riskLevel": "Moderate",
                "description": "Hereditary vision loss."
            },
            {
                "condition": "Dental Crowding & Periodontal Disease",
                "riskLevel": "Moderate",
                "description": "Small jaw causes rapid calculus accumulation."
            }
        ],
        "nutritionalFocus": [
            "Stifle joint and tendon support",
            "Retinal carotenoids (lutein, zeaxanthin)",
            "Dental-supportive natural enzymes"
        ],
        "recommendedToppers": [
            "Cooked Chicken Breast",
            "Steamed Carrots",
            "Fresh Blueberries",
            "Plain Yogurt"
        ]
    },
    {
        "id": "pekingese",
        "name": "Pekingese",
        "category": "Toy",
        "weightRange": "7 - 14 lbs",
        "lifespan": "12 - 14 years",
        "icon": "sleeping",
        "svgKey": "Pekingese",
        "overview": "Ancient sacred lion-dog of Chinese emperors with regal rolling gait, flat face, immense mane, and severe respiratory and spinal sensitivities.",
        "healthPredispositions": [
            {
                "condition": "Severe Brachycephalic Airway Syndrome",
                "riskLevel": "High",
                "description": "Extreme facial compression impairs breathing and thermoregulation; must remain strictly lean."
            },
            {
                "condition": "Intervertebral Disc Disease (IVDD)",
                "riskLevel": "High",
                "description": "Chondrodystrophic spine with short bowed legs creates heavy disc rupture danger."
            },
            {
                "condition": "Corneal Ulcers & Dry Eye",
                "riskLevel": "High",
                "description": "Prominent, shallow eye sockets vulnerable to abrasions and dryness."
            }
        ],
        "nutritionalFocus": [
            "Strict body weight enforcement to spare airway and spine",
            "Ocular vitamin A and protective carotenoids",
            "Easily swallowed soft purees"
        ],
        "recommendedToppers": [
            "Cooked Turkey Breast",
            "Pure Pumpkin",
            "Steamed Zucchini",
            "Blueberries"
        ]
    },
    {
        "id": "pembroke-welsh-corgi",
        "name": "Pembroke Welsh Corgi",
        "category": "Herding",
        "weightRange": "26 - 30 lbs",
        "lifespan": "12 - 13 years",
        "icon": "playing-with-tennis-ball",
        "svgKey": "Pembroke Welsh Corgi",
        "overview": "Low-set, energetic cattle drover with fox-like intelligence, expressive personality, and chondrodysplastic limb structure.",
        "healthPredispositions": [
            {
                "condition": "Degenerative Myelopathy (DM)",
                "riskLevel": "High",
                "description": "Progressive spinal ataxia mimicking ALS; genetic testing and long-term neuroprotective antioxidant nutrition are paramount."
            },
            {
                "condition": "Intervertebral Disc Herniation",
                "riskLevel": "High",
                "description": "Long spinal column supported by short dwarf limbs creates mechanical shear stress along lumbar discs."
            },
            {
                "condition": "Obesity & Metabolic Strain",
                "riskLevel": "High",
                "description": "Heavy appetite with lower relative ground clearance makes excess weight visibly debilitating to mobility."
            }
        ],
        "nutritionalFocus": [
            "Spinal disc relief via precision portion control",
            "Nerve-protective polyphenols and B-vitamins (blueberries, leafy greens)",
            "Hydrating vegetable fillers that satisfy hunger without excess calories"
        ],
        "recommendedToppers": [
            "Blueberries",
            "Steamed Green Beans",
            "Pure Pumpkin",
            "Cooked Egg Whites"
        ]
    },
    {
        "id": "pomeranian",
        "name": "Pomeranian",
        "category": "Toy",
        "weightRange": "3 - 7 lbs",
        "lifespan": "12 - 16 years",
        "icon": "standing",
        "svgKey": "Pomeranian",
        "overview": "Extroverted, vivacious puff of Spitz heritage with a magnificent double coat, fox-like expression, and fragile trachea.",
        "healthPredispositions": [
            {
                "condition": "Tracheal Collapse",
                "riskLevel": "High",
                "description": "Tracheal cartilage rings soften and flatten during excitement or pulling; soft hydrated meals prevent throat spasms."
            },
            {
                "condition": "Alopecia X (Black Skin Disease)",
                "riskLevel": "High",
                "description": "Hormonal follicular arrest causing bilateral woolly hair loss; supported by balanced essential fatty acids and melatonin sources."
            },
            {
                "condition": "Medial Patellar Luxation",
                "riskLevel": "High",
                "description": "Kneecap slips out of femoral groove, causing intermittent hopping gait."
            }
        ],
        "nutritionalFocus": [
            "Coat and follicle lipid stimulation (Omega-3s, zinc, flax)",
            "Soft, micro-portioned teaspoon mixers that ease tracheal passage",
            "Dental-friendly whole nutrients"
        ],
        "recommendedToppers": [
            "Cooked Salmon",
            "Flaxseed Powder",
            "Pure Pumpkin",
            "Plain Yogurt"
        ]
    },
    {
        "id": "poodle",
        "name": "Poodle",
        "category": "Non-Sporting",
        "weightRange": "10 - 70 lbs",
        "lifespan": "12 - 15 years",
        "icon": "fancy-chef-hat",
        "svgKey": "Poodle",
        "overview": "Incredibly sharp, athletic, non-shedding companion breed prone to specific autoimmune endocrine and ocular conditions.",
        "healthPredispositions": [
            {
                "condition": "Addison's Disease (Hypoadrenocorticism)",
                "riskLevel": "Moderate",
                "description": "Adrenal gland cortex failure creating electrolyte imbalances and gastrointestinal crises under acute stress."
            },
            {
                "condition": "Sebaceous Adenitis",
                "riskLevel": "Moderate",
                "description": "Autoimmune destruction of hair follicle sebum glands; requires high doses of dietary essential fatty acids to preserve skin integrity."
            },
            {
                "condition": "Gastric Torsion & Cataracts",
                "riskLevel": "Moderate",
                "description": "Standard varieties carry bloat risk; Miniature and Toy varieties carry increased risk for progressive retinal atrophy."
            }
        ],
        "nutritionalFocus": [
            "Sebum gland and follicle nourishment (Linoleic acid, EPA/DHA)",
            "Hydration and gut-friendly electrolytes",
            "Carotenoids (lutein, beta-carotene) for retinal health"
        ],
        "recommendedToppers": [
            "Hemp Hearts",
            "Cooked Duck Breast",
            "Carrot Batons",
            "Rolled Oats"
        ]
    },
    {
        "id": "pug",
        "name": "Pug",
        "category": "Toy",
        "weightRange": "14 - 18 lbs",
        "lifespan": "13 - 15 years",
        "icon": "sleeping",
        "svgKey": "Pug",
        "overview": "Charming, loving ancient companion with wrinkly face, curled tail, enormous heart, and severe airway and encephalitis susceptibilities.",
        "healthPredispositions": [
            {
                "condition": "Brachycephalic Obstructive Airway Syndrome (BOAS)",
                "riskLevel": "High",
                "description": "Elongated palate, narrow nares, and tracheal hypoplasia make heat and obesity life-threatening."
            },
            {
                "condition": "Pug Dog Encephalitis (PDE / NME)",
                "riskLevel": "High",
                "description": "Fatal necrotizing meningoencephalitis unique to the breed; neuroprotective antioxidants provide cellular support."
            },
            {
                "condition": "Corneal Ulcers & Pigmentary Keratitis",
                "riskLevel": "High",
                "description": "Large exposed eyes subject to chronic friction and pigment deposition."
            }
        ],
        "nutritionalFocus": [
            "Strict body condition score (BCS 4/9) to protect breathing passages",
            "Neuroprotective antioxidants (Anthocyanins from blueberries, Omega-3s)",
            "Cooling, hydrated low-calorie vegetable mixers"
        ],
        "recommendedToppers": [
            "Fresh Blueberries",
            "Steamed Zucchini",
            "Cooked Turkey Breast",
            "Pure Pumpkin"
        ]
    },
    {
        "id": "red-heeler",
        "name": "Red Heeler",
        "category": "Herding",
        "weightRange": "35 - 50 lbs",
        "lifespan": "12 - 16 years",
        "icon": "running-dog",
        "svgKey": "Red Heeler",
        "overview": "Red-speckled Australian Cattle Dog line sharing legendary Australian outback working toughness, drive, and high kinetic agility.",
        "healthPredispositions": [
            {
                "condition": "Progressive Retinal Atrophy (PRA)",
                "riskLevel": "High",
                "description": "Gradual retinal photoreceptor degeneration."
            },
            {
                "condition": "Cruciate Ligament & Stifle Wear",
                "riskLevel": "Moderate",
                "description": "High athletic braking and cutting creates knee strain."
            },
            {
                "condition": "Hip Dysplasia",
                "riskLevel": "Moderate",
                "description": "Pelvic joint wear over decades of active running."
            }
        ],
        "nutritionalFocus": [
            "Working muscular recovery nutrients",
            "Retinal carotenoids (lutein, zeaxanthin)",
            "Cartilage lubrication with marine Omega-3s"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Sweet Potato Puree",
            "Steamed Spinach",
            "Cooked Ground Beef"
        ]
    },
    {
        "id": "rottweiler",
        "name": "Rottweiler",
        "category": "Working",
        "weightRange": "80 - 135 lbs",
        "lifespan": "9 - 11 years",
        "icon": "standing",
        "svgKey": "Rottweiler",
        "overview": "Robust, powerfully muscled working guard dog with a steady temperament, exceptional physical strength, and distinct oncological risks.",
        "healthPredispositions": [
            {
                "condition": "Osteosarcoma (Bone Cancer)",
                "riskLevel": "High",
                "description": "High genetic risk of aggressive skeletal osteosarcoma; dietary antioxidants and cruciferous sulforaphane aid cellular resilience."
            },
            {
                "condition": "Subaortic Stenosis (SAS)",
                "riskLevel": "Moderate",
                "description": "Fibrous ring below aortic valve causes heart murmurs and exercise intolerance; benefits from taurine and L-carnitine support."
            },
            {
                "condition": "Cruciate Ligament Failure & Dysplasia",
                "riskLevel": "High",
                "description": "Immense muscular torque combined with rapid puppy growth strains stifle joints and hip sockets."
            }
        ],
        "nutritionalFocus": [
            "Cardiovascular cellular nutrients (Taurine, L-Carnitine, CoQ10 from whole hearts/fish)",
            "Cruciferous cellular protection (Sulforaphane, indole-3-carbinol)",
            "Joint cartilage integrity and lean body-mass preservation"
        ],
        "recommendedToppers": [
            "Steamed Broccoli",
            "Wild Sardines",
            "Cooked Ground Beef (Lean)",
            "Bone Broth"
        ]
    },
    {
        "id": "rough-collie",
        "name": "Rough Collie",
        "category": "Herding",
        "weightRange": "50 - 75 lbs",
        "lifespan": "12 - 14 years",
        "icon": "standing",
        "svgKey": "rough collie",
        "overview": "The iconic 'Lassie' Scottish herder with breathtaking flowing double coat, sweet aristocratic expression, and genetic MDR1 sensitivity.",
        "healthPredispositions": [
            {
                "condition": "Collie Eye Anomaly (CEA)",
                "riskLevel": "High",
                "description": "Hereditary defect of the choroid eye layer causing impaired vision or retinal detachment."
            },
            {
                "condition": "MDR1 Gene Mutation Drug Sensitivity",
                "riskLevel": "High",
                "description": "Missing P-glycoprotein transporter permits common drugs and antiparasitics to cross the blood-brain barrier."
            },
            {
                "condition": "Gastric Torsion & Dermatomyositis",
                "riskLevel": "High",
                "description": "Deep-chested build prone to bloat; immune-mediated skin/muscle condition."
            }
        ],
        "nutritionalFocus": [
            "Clean, unadulterated whole foods that minimize neuro-toxic metabolic burden",
            "Retinal carotenoids (lutein, zeaxanthin, beta-carotene)",
            "Hydrated meals to prevent bloat"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Steamed Carrots",
            "Fresh Blueberries",
            "Bone Broth"
        ]
    },
    {
        "id": "saint-bernard",
        "name": "Saint Bernard",
        "category": "Working",
        "weightRange": "120 - 180 lbs",
        "lifespan": "8 - 10 years",
        "icon": "laying-down-head-up",
        "svgKey": "Saint Bernard",
        "overview": "Legendary alpine hospice avalanche rescue giant combining gentle benevolence with titanic bone mass, bloat, and cardiac vulnerabilities.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat)",
                "riskLevel": "High",
                "description": "Massive deep chest makes bloat an ever-present critical threat."
            },
            {
                "condition": "Dilated Cardiomyopathy (DCM)",
                "riskLevel": "High",
                "description": "Giant heart muscle thinning requiring taurine and carnitine defense."
            },
            {
                "condition": "Severe Hip Dysplasia & Osteosarcoma",
                "riskLevel": "High",
                "description": "Enormous weight strains cartilage and elevates bone tumor risk."
            }
        ],
        "nutritionalFocus": [
            "Myocardial cellular energy substrates (Taurine, CoQ10, EPA/DHA)",
            "Sulforaphane cruciferous cellular defense (broccoli)",
            "Moisture-dense bloat prevention mixers"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Steamed Broccoli",
            "Bone Broth",
            "Cooked Turkey"
        ]
    },
    {
        "id": "saluki",
        "name": "Saluki",
        "category": "Hound",
        "weightRange": "40 - 65 lbs",
        "lifespan": "12 - 14 years",
        "icon": "running-dog",
        "svgKey": "Saluki",
        "overview": "Ancient royal sighthound of Egypt built for incredible desert hunting speed, featuring silky feathered ears and ultra-lean metabolism.",
        "healthPredispositions": [
            {
                "condition": "Cardiomyopathy & Heart Murmurs",
                "riskLevel": "Moderate",
                "description": "Athletic sighthound heart requires supportive cardiovascular nutrients."
            },
            {
                "condition": "Anesthesia Sensitivity",
                "riskLevel": "High",
                "description": "Low body fat stores impair liver breakdown of fat-soluble sedatives."
            },
            {
                "condition": "Hypothyroidism",
                "riskLevel": "Moderate",
                "description": "Thyroid slowdown affecting energy and coat quality."
            }
        ],
        "nutritionalFocus": [
            "Cardiovascular cellular nutrients (Taurine, marine Omega-3s)",
            "Lean clean novel proteins with low synthetic additives",
            "Feathered ear and skin coat lipid support"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Cooked Turkey Breast",
            "Steamed Spinach",
            "Blueberries"
        ]
    },
    {
        "id": "samoyed",
        "name": "Samoyed",
        "category": "Working",
        "weightRange": "35 - 65 lbs",
        "lifespan": "12 - 14 years",
        "icon": "standing",
        "svgKey": "Samoyed",
        "overview": "All-white Siberian reindeer herder famous for the 'Sammy smile', dense weather-proof coat, and genetic kidney disease risks.",
        "healthPredispositions": [
            {
                "condition": "Samoyed Hereditary Glomerulopathy (SHG)",
                "riskLevel": "High",
                "description": "X-linked hereditary kidney disease causing progressive renal failure in young dogs."
            },
            {
                "condition": "Diabetes Mellitus",
                "riskLevel": "High",
                "description": "Pancreatic beta-cell failure causing insulin deficiency; low-glycemic foods are essential."
            },
            {
                "condition": "Hip Dysplasia & Cataracts",
                "riskLevel": "Moderate",
                "description": "Pelvic joint wear and ocular clouding."
            }
        ],
        "nutritionalFocus": [
            "Low-glycemic fiber additions that prevent insulin spikes",
            "High-moisture hydration to support renal tubule clearance",
            "Retinal and joint protective antioxidants"
        ],
        "recommendedToppers": [
            "Cooked Turkey Breast",
            "Steamed Green Beans",
            "Pure Pumpkin",
            "Wild Salmon"
        ]
    },
    {
        "id": "schipperke",
        "name": "Schipperke",
        "category": "Non-Sporting",
        "weightRange": "10 - 16 lbs",
        "lifespan": "13 - 15 years",
        "icon": "standing",
        "svgKey": "Schipperke",
        "overview": "Curious, black-coated 'little captain' of Belgian canal barges with foxy face, boundless agility, and MPS IIIB storage disease risk.",
        "healthPredispositions": [
            {
                "condition": "Mucopolysaccharidosis Type IIIB (MPS IIIB)",
                "riskLevel": "High",
                "description": "Enzyme deficiency causing toxic cellular metabolite accumulation in brain and nervous system."
            },
            {
                "condition": "Hypothyroidism",
                "riskLevel": "Moderate",
                "description": "Thyroid hormone deficiency."
            },
            {
                "condition": "Patellar Luxation & Legg-Calve-Perthes",
                "riskLevel": "Moderate",
                "description": "Femoral head and knee joint degeneration."
            }
        ],
        "nutritionalFocus": [
            "Neurological antioxidant protection",
            "Metabolic weight control",
            "Joint cartilage support"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Blueberries",
            "Steamed Carrots",
            "Plain Yogurt"
        ]
    },
    {
        "id": "scottish-deerhound",
        "name": "Scottish Deerhound",
        "category": "Hound",
        "weightRange": "75 - 110 lbs",
        "lifespan": "8 - 11 years",
        "icon": "standing",
        "svgKey": "Scottish Deerhound",
        "overview": "Ancient 'Royal Dog of Scotland' bred to run down massive red deer, possessing gentle quiet dignity and high cardiac and bloat risks.",
        "healthPredispositions": [
            {
                "condition": "Dilated Cardiomyopathy (DCM)",
                "riskLevel": "High",
                "description": "Thinning heart walls causing arrhythmias and failure."
            },
            {
                "condition": "Osteosarcoma (Bone Cancer)",
                "riskLevel": "High",
                "description": "High skeletal oncology risk in long limbs."
            },
            {
                "condition": "Gastric Torsion & Delayed Bleeding",
                "riskLevel": "High",
                "description": "Deep-chested build prone to bloat."
            }
        ],
        "nutritionalFocus": [
            "Myocardial cellular nutrients (Taurine, Omega-3s)",
            "Sulforaphane cruciferous bone defense",
            "Hydrated meals to prevent stomach dilation"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Steamed Broccoli",
            "Bone Broth",
            "Cooked Ground Turkey"
        ]
    },
    {
        "id": "scottish-terrier",
        "name": "Scottish Terrier",
        "category": "Terrier",
        "weightRange": "18 - 22 lbs",
        "lifespan": "12 - 15 years",
        "icon": "standing",
        "svgKey": "Scottish Terrier",
        "overview": "Sturdy, dignified 'Diehard' terrier with distinctive beard and jaunty silhouette, facing a dramatic statistical risk for bladder cancer.",
        "healthPredispositions": [
            {
                "condition": "Transitional Cell Carcinoma (Bladder Cancer)",
                "riskLevel": "High",
                "description": "Highest TCC incidence of any dog breed (up to 20x average); feeding leafy green vegetables at least 3x/week reduces risk by 90% in peer-reviewed veterinary studies."
            },
            {
                "condition": "Scottie Cramp",
                "riskLevel": "Moderate",
                "description": "Serotonin metabolism disorder causing hyperflexion of limbs during excitement."
            },
            {
                "condition": "Von Willebrand's Disease (vWD)",
                "riskLevel": "Moderate",
                "description": "Hereditary clotting factor deficiency."
            }
        ],
        "nutritionalFocus": [
            "Leafy green cruciferous vegetables (spinach, kale, broccoli) proven to protect against TCC",
            "High moisture to constantly flush urinary bladder mucosa",
            "Anti-inflammatory antioxidants"
        ],
        "recommendedToppers": [
            "Steamed Spinach",
            "Steamed Broccoli",
            "Cooked Turkey Breast",
            "Pure Pumpkin"
        ]
    },
    {
        "id": "shetland-sheepdog",
        "name": "Shetland Sheepdog",
        "category": "Herding",
        "weightRange": "15 - 25 lbs",
        "lifespan": "12 - 14 years",
        "icon": "downward-dog-tail-wagging",
        "svgKey": "Shetland Sheepdog",
        "overview": "Bright, vocal miniature rough-coated herder from Scotland's Shetland Islands with dazzling agility and specific genetic ocular issues.",
        "healthPredispositions": [
            {
                "condition": "Collie Eye Anomaly (CEA)",
                "riskLevel": "High",
                "description": "Underdevelopment of choroid eye tissue."
            },
            {
                "condition": "Gallbladder Mucoceles",
                "riskLevel": "High",
                "description": "Abnormal mucus accumulation in gallbladder risking rupture and peritonitis."
            },
            {
                "condition": "MDR1 Gene Drug Sensitivity & Dermatomyositis",
                "riskLevel": "High",
                "description": "Blood-brain barrier drug sensitivity and inflammatory skin/muscle condition."
            }
        ],
        "nutritionalFocus": [
            "Low-fat diets to support healthy gallbladder bile emptying",
            "Clean, unadulterated whole foods with minimal synthetic toxins",
            "Retinal carotenoids (lutein, beta-carotene)"
        ],
        "recommendedToppers": [
            "Cooked Turkey Breast",
            "Steamed Carrots",
            "Blueberries",
            "Plain White Rice"
        ]
    },
    {
        "id": "shiba-inu",
        "name": "Shiba Inu",
        "category": "Non-Sporting",
        "weightRange": "17 - 23 lbs",
        "lifespan": "13 - 16 years",
        "icon": "standing",
        "svgKey": "Shiba Inu",
        "overview": "Ancient, spirited Japanese hunter with curled tail, plush coat, foxy expression, and remarkable independence and agility.",
        "healthPredispositions": [
            {
                "condition": "Atopic Dermatitis & Environmental Allergies",
                "riskLevel": "High",
                "description": "Prone to intense seasonal itching, paw chewing, and secondary skin infections."
            },
            {
                "condition": "Patellar Luxation",
                "riskLevel": "Moderate",
                "description": "Kneecap displacement from shallow knee groove."
            },
            {
                "condition": "Glaucoma & Cataracts",
                "riskLevel": "Moderate",
                "description": "Elevated intraocular pressure and lens clouding."
            }
        ],
        "nutritionalFocus": [
            "Marine Omega-3 fatty acids (EPA/DHA) to calm allergic skin reactivity",
            "Antioxidant retinal protection",
            "Lean clean proteins"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Fresh Blueberries",
            "Steamed Zucchini",
            "Plain Kefir"
        ]
    },
    {
        "id": "shih-tzu",
        "name": "Shih Tzu",
        "category": "Toy",
        "weightRange": "9 - 16 lbs",
        "lifespan": "10 - 16 years",
        "icon": "sleeping",
        "svgKey": "Shih Tzu",
        "overview": "Cherished Tibetan palace companion with luxurious flowing coat, warm affectionate lap-dog nature, and brachycephalic facial structure.",
        "healthPredispositions": [
            {
                "condition": "Brachycephalic Syndrome & Heat Sensitivity",
                "riskLevel": "High",
                "description": "Compressed nasal passages and narrow nostrils impair cooling; keeping weight strictly trimmed prevents airway collapse."
            },
            {
                "condition": "Proptosis & Corneal Ulceration",
                "riskLevel": "High",
                "description": "Prominent, shallow eye sockets expose corneas to trauma and dryness; benefits from lutein and vitamin A."
            },
            {
                "condition": "Renal Dysplasia",
                "riskLevel": "Moderate",
                "description": "Congenital kidney underdevelopment requiring clean, bioavailable hydration and kidney-friendly whole foods."
            }
        ],
        "nutritionalFocus": [
            "High moisture content to support delicate kidney function",
            "Ocular antioxidants (lutein, zeaxanthin, beta-carotene)",
            "Soft, easily chewable pureed additions"
        ],
        "recommendedToppers": [
            "Cooked Chicken",
            "Steamed Carrots",
            "Pure Pumpkin",
            "Blueberries"
        ]
    },
    {
        "id": "siberian-husky",
        "name": "Siberian Husky",
        "category": "Working",
        "weightRange": "35 - 60 lbs",
        "lifespan": "12 - 14 years",
        "icon": "running-dog",
        "svgKey": "Siberian Husky",
        "overview": "Remarkable Arctic sled dog possessing extraordinary endurance, metabolic efficiency, striking eyes, and clean self-cleaning coats.",
        "healthPredispositions": [
            {
                "condition": "Zinc-Responsive Dermatosis",
                "riskLevel": "High",
                "description": "Defective intestinal zinc absorption causes facial crusting, hair loss, and scabbing around eyes and mouth."
            },
            {
                "condition": "Progressive Retinal Atrophy (PRA) & Corneal Dystrophy",
                "riskLevel": "Moderate",
                "description": "Degeneration of ocular photoreceptor cells causing gradual night blindness and opacity."
            },
            {
                "condition": "Sensitive Gut / Rapid Transit Time",
                "riskLevel": "Moderate",
                "description": "Arctic metabolism evolved for calorie-dense, low-fiber fat/protein diets; excessive carbs can cause loose stools."
            }
        ],
        "nutritionalFocus": [
            "Bioavailable dietary Zinc and essential fatty acids for dermal lipid health",
            "Carotenoids and retinal antioxidants (blueberries, carrots)",
            "Clean animal proteins with low synthetic filler content"
        ],
        "recommendedToppers": [
            "Wild Salmon Fillets",
            "Cooked Ground Beef",
            "Fresh Blueberries",
            "Plain Kefir"
        ]
    },
    {
        "id": "tibetan-mastiff",
        "name": "Tibetan Mastiff",
        "category": "Working",
        "weightRange": "70 - 150 lbs",
        "lifespan": "10 - 12 years",
        "icon": "standing",
        "svgKey": "Tibetan Mastiff",
        "overview": "Primitive Himalayan high-altitude guardian with dense lion-like mane, nocturnal vigilance, and specialized low-energy metabolism.",
        "healthPredispositions": [
            {
                "condition": "Hypothyroidism",
                "riskLevel": "High",
                "description": "Autoimmune thyroid dysfunction common in breed."
            },
            {
                "condition": "Hip & Elbow Dysplasia",
                "riskLevel": "High",
                "description": "Heavy physical weight strains developing joints."
            },
            {
                "condition": "Canine Inherited Demyelinative Neuropathy (CIDN)",
                "riskLevel": "Moderate",
                "description": "Hereditary nerve myelin loss."
            }
        ],
        "nutritionalFocus": [
            "Calorie-controlled additions matching slow primitive metabolic baseline",
            "Heavy-duty joint lubrication (Omega-3s)",
            "Neurological antioxidant protection"
        ],
        "recommendedToppers": [
            "Wild Sardines",
            "Cooked Lamb",
            "Steamed Broccoli",
            "Bone Broth"
        ]
    },
    {
        "id": "weimaraner",
        "name": "Weimaraner",
        "category": "Sporting",
        "weightRange": "55 - 90 lbs",
        "lifespan": "10 - 13 years",
        "icon": "running-dog",
        "svgKey": "Weimaraner",
        "overview": "Germany's 'Gray Ghost'\u2014a sleek, aristocrat hunter celebrated for high speed, intense human attachment, and severe bloat risk.",
        "healthPredispositions": [
            {
                "condition": "Gastric Dilatation-Volvulus (Bloat #2 Breed Risk)",
                "riskLevel": "High",
                "description": "Extreme deep-chested build puts Weimaraners among the most frequent bloat emergency patients."
            },
            {
                "condition": "Hypoadrenocorticism & Vaccine Sensitivities",
                "riskLevel": "Moderate",
                "description": "Autoimmune sensitivities requiring clean, low-additive nutrition."
            },
            {
                "condition": "Hip Dysplasia & Spinal Dysraphism",
                "riskLevel": "Moderate",
                "description": "Pelvic socket wear and spinal canal disorders."
            }
        ],
        "nutritionalFocus": [
            "Hydrated, non-aerated meals that prevent post-exercise bloat",
            "Joint cartilage repair and anti-inflammatory lipids",
            "Gentle novel proteins with minimal synthetic processing"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Pureed Pumpkin",
            "Bone Broth",
            "Cooked Ground Turkey"
        ]
    },
    {
        "id": "whippet",
        "name": "Whippet",
        "category": "Hound",
        "weightRange": "25 - 40 lbs",
        "lifespan": "12 - 15 years",
        "icon": "running-dog",
        "svgKey": "Whippet",
        "overview": "Athletic, gentle sighthound combining lightning 35-mph sprint acceleration with quiet indoor couch-potato affection.",
        "healthPredispositions": [
            {
                "condition": "Anesthesia Sensitivity",
                "riskLevel": "High",
                "description": "Ultra-low body fat levels slow liver metabolization of fat-soluble sedatives."
            },
            {
                "condition": "Cardiac Murmurs & Mitral Valve Disease",
                "riskLevel": "Moderate",
                "description": "Athletic sighthound heart requires supportive cardiovascular nutrients."
            },
            {
                "condition": "Thin Skin Lacerations & Muscle Tears",
                "riskLevel": "Moderate",
                "description": "Minimal subcutaneous fat and thin skin tear easily on twigs during sprints."
            }
        ],
        "nutritionalFocus": [
            "Cardiovascular cellular nutrients (Taurine, marine Omega-3s)",
            "Connective tissue collagen support",
            "Lean clean proteins for muscular repair"
        ],
        "recommendedToppers": [
            "Wild Salmon",
            "Bone Broth",
            "Cooked Turkey Breast",
            "Fresh Blueberries"
        ]
    },
    {
        "id": "yorkshire-terrier",
        "name": "Yorkshire Terrier",
        "category": "Toy",
        "weightRange": "5 - 7 lbs",
        "lifespan": "11 - 15 years",
        "icon": "standing",
        "svgKey": "Yorkshire Terrier",
        "overview": "Tiny, glamorous terrier with a feisty personality, fine silky human-like hair, and delicate metabolic and hepatic architecture.",
        "healthPredispositions": [
            {
                "condition": "Portosystemic Liver Shunt (PSS)",
                "riskLevel": "High",
                "description": "Abnormal blood vessel bypasses liver filtration, causing toxin accumulation; requires easily digestible, moderate high-quality protein."
            },
            {
                "condition": "Pancreatitis & High Fat Intolerance",
                "riskLevel": "High",
                "description": "Extreme sensitivity to fatty table scraps; requires strict ultra-low-fat topper limits."
            },
            {
                "condition": "Tracheal Collapse & Luxating Patella",
                "riskLevel": "High",
                "description": "Hypoplastic tracheal cartilage rings weaken; soft, hydrated foods reduce coughing and throat irritation."
            }
        ],
        "nutritionalFocus": [
            "Ultra-low-fat, clean protein sources (skinless poultry, egg whites)",
            "Hydrated, soft textures that slip gently past sensitive tracheas",
            "Micro-dosed portions measured precisely in teaspoons rather than grams"
        ],
        "recommendedToppers": [
            "Cooked Chicken Breast",
            "Pure Pumpkin",
            "Steamed Zucchini",
            "Plain White Rice"
        ]
    }
];

export const TOP_30_BREEDS = ALL_BREEDS;
export const PLACEHOLDER_BREEDS = ALL_BREEDS;
