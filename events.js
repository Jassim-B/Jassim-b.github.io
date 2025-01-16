const event_rate = 0.4;
const beggining_of_events_lap = 4;
const events_list = [
    {
        "Title" : "Bonus écologique",
        "Description" : "L'état vient de mettre en place de nouvelles primes pour les villes qui font le plus d'efforts pour l'environnement.",
        "Duration" : 3,
        "Effect activation" : "after end of event",     // "after each round", "after end of event"
        "Effect desc" : "+30💵 pour la ville qui termine avec le plus haut niveau 🌳 dans 2 tours",
        "Effect" : {
            "Target" : "best",                          // "best", "worst", "threshold", "auto"
            "Treshold" : -1,                            
            "Eval Asset" : "environment",               // "environment", "social", "money"
            "Reward Asset" : "money",
            "Increment" : 30,
        },
    },
    {
        "Title" : "Catastrophe climatique",
        "Description" : "De violents feu de forêt menacent les villes.",
        "Duration" : 2,
        "Effect activation" : "after each round",     // "after each round", "after end of event"
        "Effect desc" : "-10🌳 après chaque tour (pendant 2 tours)",
        "Effect" : {
            "Target" : "auto",                       // "best", "worst", "threshold", "auto"
            "Treshold" : -0.01,                            
            "Eval Asset" : "money",                  // "environment", "social", "money"
            "Reward Asset" : "environment",
            "Increment" : -10,
        },
    },
    {
        "Title" : "Election meilleure ville de France",
        "Description" : "Un concours est organisé pour récompenser la ville la plus heureuse.",
        "Duration" : 4,
        "Effect activation" : "after end of event",     // "after each round", "after end of event"
        "Effect desc" : "+30💵 pour la ville qui termine avec le plus haut niveau 🚶 dans 4 tours",
        "Effect" : {
            "Target" : "best",                          // "best", "worst", "threshold", "auto"
            "Treshold" : -0.01,                            
            "Eval Asset" : "social",               // "environment", "social", "money"
            "Reward Asset" : "money",
            "Increment" : 30,
        },
    },
    {
        "Title" : "Réforme sur l'énergie",
        "Description" : "L'état vient d'imposer temporairement à chaque ville de nouveaux seuils de pollution à respecter et impose des amendes aux villes ne se pliant pas aux nouvelles lois.",
        "Duration" : 3,
        "Effect activation" : "after each round",     // "after each round", "after end of event"
        "Effect desc" : "-10💵 après chaque tour pour les villes ayant un niveau 🌳 inférieur à 30 (pendant 3 tours)",
        "Effect" : {
            "Target" : "threshold",                          // "best", "worst", "threshold", "auto"
            "Treshold" : 29.9,   
            "Threshold dir" : "down",                       // "up", "down"                         
            "Eval Asset" : "environment",                   // "environment", "social", "money"
            "Reward Asset" : "money",
            "Increment" : -5,
        },
    },
    {
        "Title" : "\"Pas assez de verdure !\"",
        "Description" : "Les habitants des villes se plaignent du manque de parcs dans les espaces urbains.",
        "Duration" : 5,
        "Effect activation" : "after each round",     // "after each round", "after end of event"
        "Effect desc" : "-5🚶 après chaque tour pour les villes ayant un niveau 🌳 inférieur à 15 (pendant 5 tours)",
        "Effect" : {
            "Target" : "threshold",                       // "best", "worst", "threshold", "auto"
            "Treshold" : 14.9, 
            "Threshold dir" : "down",                     // "up", "down"                                                    
            "Eval Asset" : "environment",                       // "environment", "social", "money"
            "Reward Asset" : "social",
            "Increment" : -5,
        },
    },  
    {
        "Title" : "\"On va perdre notre travail ?\"",
        "Description" : "Après la fermeture de plusieurs magasins, les habitants commencent à s'inquiéter quant à la situation économique de votre ville.",
        "Duration" : 4,
        "Effect activation" : "after end of event",     // "after each round", "after end of event"
        "Effect desc" : "-35🚶 pour la ville qui termine avec le plus bas niveau 💵 dans 4 tours",
        "Effect" : {
            "Target" : "worst",                       // "best", "worst", "threshold", "auto"
            "Treshold" : 14.9, 
            "Threshold dir" : "down",                 // "up", "down"                                                    
            "Eval Asset" : "money",                   // "environment", "social", "money"
            "Reward Asset" : "social",
            "Increment" : -35,
        },
    },  
    {
        "Title" : "Il en faut peu pour être heureux",
        "Description" : "Avec l'arrivée de l'été les habitant de la ville se sentent de meilleure humeur.",
        "Duration" : 3,
        "Effect activation" : "after each round",     // "after each round", "after end of event"
        "Effect desc" : "+5🚶 après chaque tour (pendant 3 tours)",
        "Effect" : {
            "Target" : "auto",                       // "best", "worst", "threshold", "auto"
            "Treshold" : -0.01,                            
            "Eval Asset" : "money",                  // "environment", "social", "money"
            "Reward Asset" : "social",
            "Increment" : +5,
        },
    },
]