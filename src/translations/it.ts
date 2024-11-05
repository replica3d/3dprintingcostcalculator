export const it = {
  meta: {
    title: "Calcolatore Costi Stampa 3D",
    description: "Calcola i costi di stampa 3D con massima precisione. Ottimizza la tua strategia di prezzo analizzando materiali, manodopera e costi operativi."
  },
  calculator: {
    title: "Calcolatore Costi Stampa 3D",
    subtitle: "Analisi professionale dei costi per i tuoi progetti di stampa 3D",
    projectDetails: "Dettagli Progetto",
    costBreakdown: "Analisi Dettagliata Costi",
    suggestedPricing: "Prezzi Consigliati"
  },
  inputs: {
    partName: "Nome Componente",
    material: "Tipo di Filamento",
    filamentCost: "Prezzo Filamento",
    filamentWeight: "Peso Filamento",
    printingTime: "Tempo di Stampa",
    laborTime: "Tempo di Lavorazione",
    hardwareCost: "Costi Aggiuntivi",
    packagingCost: "Costo Imballaggio"
  },
  costs: {
    materialCost: "Costo Materiale",
    laborCost: "Costo Manodopera",
    machineCost: "Costo Macchina",
    totalLandedCost: "Costo Totale Finale",
    margin50: "Margine del 50%",
    margin60: "Margine del 60%",
    margin70: "Margine del 70%"
  },
  advanced: {
    title: "Impostazioni Avanzate",
    show: "Mostra Impostazioni Avanzate",
    hide: "Nascondi Impostazioni Avanzate",
    calculatedMetrics: "Metriche Calcolate",
    materialEfficiency: "Efficienza Materiale",
    laborRate: "Tariffa Oraria",
    printerCost: "Costo Stampante",
    additionalCost: "Costi Iniziali Extra",
    maintenance: "Manutenzione Annuale",
    printerLife: "Vita Utile",
    uptime: "Percentuale Operatività",
    powerConsumption: "Consumo Energetico",
    electricityCost: "Costo Elettricità",
    bufferFactor: "Fattore di Sicurezza",
    metrics: {
      totalInvestment: "Investimento Totale",
      lifetimeCost: "Costo Vita Utile",
      uptimeHours: "Ore Operative Annue",
      depreciation: "Ammortamento (€/ora)",
      maintenanceCost: "Manutenzione (€/ora)",
      electricityCost: "Elettricità (€/ora)",
      totalCost: "Costo Totale (€/ora)"
    }
  },
  tooltips: {
    partName: "Inserisci il nome o il codice identificativo del componente",
    material: "Seleziona il tipo di filamento più adatto al tuo progetto",
    filamentCost: "Prezzo al chilogrammo del filamento scelto",
    filamentWeight: "Peso stimato del componente in grammi",
    printingTime: "Durata totale prevista della stampa",
    laborTime: "Tempo necessario per preparazione, monitoraggio e finitura",
    hardwareCost: "Costo di componenti aggiuntivi (viti, inserti, supporti)",
    packagingCost: "Costo dei materiali per imballaggio e protezione",
    materialEfficiency: "Tiene conto degli sprechi e delle stampe fallite (1.1 = 10% di spreco)",
    laborRate: "Costo orario della manodopera incluse le spese generali",
    printerCost: "Investimento iniziale per la stampante 3D",
    additionalCost: "Costi per attrezzature supplementari (strumenti, accessori)",
    maintenance: "Spese annuali per manutenzione e ricambi",
    printerLife: "Durata operativa prevista della stampante",
    uptime: "Percentuale di tempo effettivo di stampa",
    powerConsumption: "Consumo medio di energia in watt",
    electricityCost: "Costo locale dell'energia elettrica per kWh",
    bufferFactor: "Margine per imprevisti (1.3 = 30% extra)",
    totalInvestment: "Somma di tutti i costi iniziali di investimento",
    lifetimeCost: "Costo totale durante l'intera vita operativa",
    uptimeHours: "Ore di stampa previste all'anno",
    depreciation: "Ammortamento orario della stampante",
    maintenanceCost: "Costo orario della manutenzione",
    electricityCostHourly: "Costo orario dell'energia elettrica",
    totalCostHourly: "Costo operativo totale per ora di funzionamento"
  },
  share: {
    button: "Condividi Impostazioni",
    copied: "Copiato!"
  },
  guide: {
    title: "Guida all'Utilizzo del Calcolatore",
    steps: [
      "Inserisci il nome del componente e seleziona il materiale appropriato",
      "Specifica il peso del filamento e il tempo di stampa previsto",
      "Aggiungi eventuali costi extra per componenti e imballaggio",
      "Affina il calcolo con le impostazioni avanzate se necessario"
    ]
  },
  faq: {
    title: "Domande Frequenti",
    items: [
      {
        question: "Quanto è preciso questo calcolatore di costi per la stampa 3D?",
        answer: "Il nostro calcolatore fornisce risultati altamente precisi considerando molteplici fattori: costi dei materiali, tempo macchina, manodopera e spese generali. Tuttavia, i costi effettivi possono variare in base alle impostazioni specifiche della stampante, alle condizioni ambientali e ai fattori di prezzo locali."
      },
      {
        question: "Quali fattori influenzano il costo totale di una stampa 3D?",
        answer: "Il calcolatore considera i costi del filamento, il tempo di stampa, il consumo energetico, l'ammortamento della macchina, i costi di manodopera e i materiali aggiuntivi. Le impostazioni avanzate permettono di perfezionare questi parametri per stime più accurate."
      },
      {
        question: "Come determino il peso del filamento per la mia stampa?",
        answer: "La maggior parte dei software di slicing fornisce una stima del peso del filamento. Per ottenere i risultati più precisi con il nostro calcolatore, utilizza il peso indicato dal tuo software dopo aver configurato i parametri di stampa."
      },
      {
        question: "Perché dovrei includere i costi di manodopera nei miei calcoli?",
        answer: "I costi di manodopera sono particolarmente importanti per una corretta determinazione dei prezzi, soprattutto in ambito professionale. Questo include il tempo dedicato alla preparazione, post-elaborazione e controllo qualità. Il nostro calcolatore ti aiuta a considerare questi costi per decisioni di prezzo più accurate."
      },
      {
        question: "Come posso ottimizzare i miei costi di stampa 3D?",
        answer: "Utilizza il nostro calcolatore per sperimentare diverse impostazioni e materiali. Considera fattori come la densità di riempimento, l'altezza degli strati e l'orientamento della stampa per ottimizzare l'utilizzo del materiale mantenendo la qualità. La sezione delle impostazioni avanzate può aiutarti a identificare le aree di risparmio."
      }
    ]
  },
  units: {
    years: "anni"
  }
};