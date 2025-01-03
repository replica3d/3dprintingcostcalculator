export const fr = {
  meta: {
    title: "Calculateur de Coûts d'Impression 3D",
    description: "Calculez les coûts d'impression 3D avec une précision maximale. Optimisez votre stratégie de prix en analysant les coûts de matériaux, main-d'œuvre et exploitation."
  },
  calculator: {
    title: "Calculateur de Coûts d'Impression 3D",
    subtitle: "Analyse professionnelle des coûts pour vos projets d'impression 3D",
    projectDetails: "Détails du Projet",
    costBreakdown: "Analyse des Coûts",
    suggestedPricing: "Prix Recommandés"
  },
  inputs: {
    partName: "Nom de la Pièce",
    material: "Type de Filament",
    filamentCost: "Prix du Filament",
    filamentWeight: "Poids du Filament",
    printingTime: "Temps d'Impression",
    laborTime: "Temps de Travail",
    hardwareCost: "Coûts des Composants",
    packagingCost: "Coût d'Emballage"
  },
  costs: {
    materialCost: "Coût des Matériaux",
    laborCost: "Coût de Main-d'œuvre",
    machineCost: "Coût Machine",
    totalLandedCost: "Coût Total Final",
    margin50: "Marge de 50%",
    margin60: "Marge de 60%",
    margin70: "Marge de 70%"
  },
  advanced: {
    title: "Paramètres Avancés",
    show: "Afficher les Paramètres Avancés",
    hide: "Masquer les Paramètres Avancés",
    calculatedMetrics: "Métriques Calculées",
    materialEfficiency: "Efficacité Matière",
    laborRate: "Taux Horaire",
    printerCost: "Coût de l'Imprimante",
    additionalCost: "Coûts Initiaux Supplémentaires",
    maintenance: "Maintenance Annuelle",
    printerLife: "Durée de Vie",
    uptime: "Taux d'Utilisation",
    powerConsumption: "Consommation Électrique",
    electricityCost: "Coût de l'Électricité",
    bufferFactor: "Facteur de Sécurité",
    metrics: {
      totalInvestment: "Investissement Total",
      lifetimeCost: "Coût sur la Durée de Vie",
      uptimeHours: "Heures d'Utilisation (h/an)",
      depreciation: "Amortissement (€/h)",
      maintenanceCost: "Maintenance (€/h)",
      electricityCost: "Électricité (€/h)",
      totalCost: "Coût Total (€/h)"
    }
  },
  tooltips: {
    partName: "Nom ou référence de la pièce à imprimer",
    material: "Choisissez le type de filament adapté à votre projet",
    filamentCost: "Prix au kilogramme du filament",
    filamentWeight: "Masse estimée de l'impression en grammes",
    printingTime: "Durée totale estimée de l'impression",
    laborTime: "Temps total de préparation, surveillance et finition",
    hardwareCost: "Coût des éléments additionnels (vis, inserts, supports)",
    packagingCost: "Coût de l'emballage et de la protection",
    materialEfficiency: "Prend en compte les pertes et les échecs d'impression (1.1 = 10% de perte)",
    laborRate: "Taux horaire incluant les charges et frais généraux",
    printerCost: "Investissement initial pour l'imprimante 3D",
    additionalCost: "Coûts des équipements complémentaires (outils, accessoires)",
    maintenance: "Coûts annuels de maintenance et pièces de rechange",
    printerLife: "Durée de vie opérationnelle prévue",
    uptime: "Pourcentage du temps en impression effective",
    powerConsumption: "Consommation moyenne en watts",
    electricityCost: "Tarif local du kWh",
    bufferFactor: "Marge pour imprévus (1.3 = 30% de marge)",
    totalInvestment: "Total des investissements initiaux",
    lifetimeCost: "Coût total sur la durée de vie de l'imprimante",
    uptimeHours: "Heures d'impression annuelles estimées",
    depreciation: "Coût horaire de l'amortissement",
    maintenanceCost: "Coût horaire de la maintenance",
    electricityCostHourly: "Coût horaire de l'électricité",
    totalCostHourly: "Coût total de fonctionnement par heure"
  },
  share: {
    button: "Partager les Paramètres",
    copied: "Copié !"
  },
  guide: {
    title: "Guide d'Utilisation du Calculateur",
    steps: [
      "Saisissez le nom de la pièce et sélectionnez le matériau approprié",
      "Indiquez le poids du filament et le temps d'impression estimé",
      "Ajoutez les coûts supplémentaires (composants et emballage)",
      "Affinez le calcul avec les paramètres avancés si nécessaire"
    ]
  },
  faq: {
    title: "Questions Fréquentes",
    items: [
      {
        question: "Quelle est la précision de ce calculateur de coûts d'impression 3D ?",
        answer: "Notre calculateur fournit des résultats très précis en prenant en compte de multiples facteurs : coûts des matériaux, temps machine, main-d'œuvre et frais généraux. Toutefois, les coûts réels peuvent varier selon les paramètres spécifiques de l'imprimante, les conditions environnementales et les facteurs de prix locaux."
      },
      {
        question: "Quels facteurs influencent le coût total d'une impression 3D ?",
        answer: "Le calculateur prend en compte les coûts du filament, le temps d'impression, la consommation électrique, l'amortissement de la machine, les coûts de main-d'œuvre et les matériaux supplémentaires. Les paramètres avancés permettent d'affiner ces variables pour des estimations plus précises."
      },
      {
        question: "Comment déterminer le poids du filament pour mon impression ?",
        answer: "La plupart des logiciels de tranchage (slicers) fournissent une estimation du poids du filament. Pour obtenir les résultats les plus précis avec notre calculateur, utilisez le poids indiqué par votre logiciel après avoir configuré vos paramètres d'impression."
      },
      {
        question: "Pourquoi inclure les coûts de main-d'œuvre dans mes calculs ?",
        answer: "Les coûts de main-d'œuvre sont particulièrement importants pour une tarification précise, surtout dans un contexte professionnel. Cela inclut le temps consacré à la préparation, au post-traitement et au contrôle qualité. Notre calculateur vous aide à intégrer ces coûts pour une meilleure stratégie de prix."
      },
      {
        question: "Comment optimiser mes coûts d'impression 3D ?",
        answer: "Utilisez notre calculateur pour expérimenter différents paramètres et matériaux. Considérez des facteurs comme la densité de remplissage, la hauteur des couches et l'orientation de l'impression pour optimiser l'utilisation du matériau tout en maintenant la qualité. La section des paramètres avancés peut vous aider à identifier les possibilités d'économies."
      }
    ]
  },
  units: {
    years: "ans"
  }
};
