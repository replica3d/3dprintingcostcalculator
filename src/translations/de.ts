export const de = {
  meta: {
    title: "3D-Druck Kostenrechner",
    description: "Berechnen Sie 3D-Druckkosten mit höchster Präzision. Schätzen Sie Material-, Arbeits- und Maschinenkosten für eine optimale Preisstrategie."
  },
  calculator: {
    title: "3D-Druck Kostenrechner",
    subtitle: "Professionelle Kostenkalkulation für Ihre 3D-Druckprojekte",
    projectDetails: "Projektdetails",
    costBreakdown: "Kostenaufstellung",
    suggestedPricing: "Preisempfehlungen"
  },
  inputs: {
    partName: "Teilename",
    material: "Filamenttyp",
    filamentCost: "Filamentkosten",
    filamentWeight: "Filamentgewicht",
    printingTime: "Druckzeit",
    laborTime: "Arbeitszeit",
    hardwareCost: "Hardwarekosten",
    packagingCost: "Verpackungskosten"
  },
  costs: {
    materialCost: "Materialkosten",
    laborCost: "Arbeitskosten",
    machineCost: "Maschinenkosten",
    totalLandedCost: "Gesamtkosten",
    margin50: "50% Gewinnmarge",
    margin60: "60% Gewinnmarge",
    margin70: "70% Gewinnmarge"
  },
  advanced: {
    title: "Erweiterte Einstellungen",
    show: "Erweiterte Einstellungen anzeigen",
    hide: "Erweiterte Einstellungen ausblenden",
    calculatedMetrics: "Berechnete Kennzahlen",
    materialEfficiency: "Materialeffizienzfaktor",
    laborRate: "Arbeitssatz",
    printerCost: "Druckerkosten",
    additionalCost: "Zusätzliche Anfangskosten",
    maintenance: "Jährliche Wartung",
    printerLife: "Geschätzte Lebensdauer",
    uptime: "Betriebszeit-Prozentsatz",
    powerConsumption: "Stromverbrauch",
    electricityCost: "Stromkosten",
    bufferFactor: "Pufferfaktor",
    metrics: {
      totalInvestment: "Gesamtinvestition",
      lifetimeCost: "Lebenszykluskosten",
      uptimeHours: "Geschätzte Betriebszeit (Std/Jahr)",
      depreciation: "Druckerabschreibung (€/Std)",
      maintenanceCost: "Wartungskosten (€/Std)",
      electricityCost: "Stromkosten (€/Std)",
      totalCost: "Gesamtdruckerkosten (€/Std)"
    }
  },
  tooltips: {
    partName: "Name oder Kennung für das Teil",
    material: "Wählen Sie den Filamenttyp für Ihren Druck",
    filamentCost: "Kosten pro kg Filament",
    filamentWeight: "Geschätztes Gewicht des Drucks in Gramm",
    printingTime: "Geschätzte Druckdauer",
    laborTime: "Zeit für Einrichtung, Überwachung und Nachbearbeitung",
    hardwareCost: "Kosten für zusätzliche Hardware (Schrauben, Einsätze, etc.)",
    packagingCost: "Kosten für Verpackungsmaterial",
    materialEfficiency: "Berücksichtigt Materialverschwendung und fehlgeschlagene Drucke (1.1 = 10% Verschwendung)",
    laborRate: "Stundensatz für Arbeitskosten einschließlich Gemeinkosten",
    printerCost: "Anfängliche Kosten des 3D-Druckers",
    additionalCost: "Zusätzliche Ausrüstungskosten (Werkzeuge, Zubehör, etc.)",
    maintenance: "Jährliche Wartungs- und Ersatzteilkosten",
    printerLife: "Erwartete Betriebslebensdauer des Druckers",
    uptime: "Prozentsatz der Zeit, in der der Drucker aktiv druckt",
    powerConsumption: "Durchschnittlicher Stromverbrauch des Druckers in Watt",
    electricityCost: "Lokaler Stromtarif pro Kilowattstunde",
    bufferFactor: "Sicherheitsmarge für unerwartete Kosten (1.3 = 30% Puffer)",
    totalInvestment: "Gesamte Anfangsinvestition einschließlich Drucker und zusätzlicher Ausrüstung",
    lifetimeCost: "Gesamtkosten über die Lebensdauer des Druckers einschließlich Wartung",
    uptimeHours: "Erwartete jährliche Druckstunden basierend auf dem Betriebszeitprozentsatz",
    depreciation: "Stündliche Kosten der Druckerabschreibung",
    maintenanceCost: "Stündliche Wartungskosten basierend auf Jahresschätzungen",
    electricityCostHourly: "Stündliche Stromkosten basierend auf dem Verbrauch",
    totalCostHourly: "Gesamte stündliche Betriebskosten einschließlich aller Faktoren"
  },
  share: {
    button: "Einstellungen teilen",
    copied: "Kopiert!"
  },
  guide: {
    title: "Wie man diesen 3D-Druck Kostenrechner verwendet",
    steps: [
      "Geben Sie Ihren Teilenamen ein und wählen Sie den Materialtyp aus dem Dropdown-Menü",
      "Geben Sie das geschätzte Filamentgewicht (in Gramm) und die Druckzeit (in Stunden) ein",
      "Fügen Sie zusätzliche Kosten wie Hardwarekomponenten und Verpackungsmaterialien hinzu",
      "Passen Sie die erweiterten Einstellungen für genauere Berechnungen an"
    ]
  },
  faq: {
    title: "Häufig gestellte Fragen",
    items: [
      {
        question: "Wie genau ist dieser 3D-Druck Kostenrechner?",
        answer: "Unser 3D-Druck Kostenrechner liefert hochpräzise Ergebnisse durch Berücksichtigung mehrerer Faktoren wie Materialkosten, Maschinenzeit, Arbeit und Gemeinkosten. Die tatsächlichen Kosten können jedoch je nach spezifischen Druckereinstellungen, Umgebungsbedingungen und lokalen Preisfaktoren variieren."
      },
      {
        question: "Welche Faktoren beeinflussen die Gesamtkosten eines 3D-Drucks?",
        answer: "Der Kostenrechner berücksichtigt Filamentkosten, Druckzeit, Stromverbrauch, Maschinenabschreibung, Arbeitskosten und zusätzliche Materialien. Erweiterte Einstellungen ermöglichen die Feinabstimmung dieser Parameter für genauere Schätzungen."
      },
      {
        question: "Wie bestimme ich das Filamentgewicht für meinen Druck?",
        answer: "Die meisten 3D-Druck Slicer-Programme geben ein geschätztes Filamentgewicht an. Für die genauesten Ergebnisse in unserem Kostenrechner verwenden Sie das von Ihrer Slicer-Software angegebene Gewicht nach der Konfiguration Ihrer Druckeinstellungen."
      },
      {
        question: "Warum sollte ich Arbeitskosten in meine Berechnungen einbeziehen?",
        answer: "Arbeitskosten sind besonders wichtig für eine genaue Preisgestaltung, vor allem wenn Sie ein Unternehmen betreiben. Dies umfasst Zeit für Druckvorbereitung, Nachbearbeitung und Qualitätskontrolle. Unser Rechner hilft Ihnen, diese Kosten für bessere Preisentscheidungen zu berücksichtigen."
      },
      {
        question: "Wie kann ich meine 3D-Druckkosten optimieren?",
        answer: "Nutzen Sie unseren Kostenrechner, um mit verschiedenen Einstellungen und Materialien zu experimentieren. Berücksichtigen Sie Faktoren wie Fülldichte, Schichthöhe und Druckorientierung, um den Materialverbrauch zu optimieren und gleichzeitig die Qualität zu erhalten. Der Bereich für erweiterte Einstellungen kann helfen, Bereiche für Kosteneinsparungen zu identifizieren."
      }
    ]
  },
  units: {
    years: "Jahre"
  }
};