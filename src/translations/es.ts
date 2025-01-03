export const es = {
  meta: {
    title: "Calculadora de Costos de Impresión 3D",
    description: "Calcule los costos de impresión 3D con máxima precisión. Estime materiales, mano de obra y gastos de máquina para optimizar su estrategia de precios."
  },
  calculator: {
    title: "Calculadora de Costos de Impresión 3D",
    subtitle: "Estimación profesional de costos para sus proyectos de impresión 3D",
    projectDetails: "Detalles del Proyecto",
    costBreakdown: "Desglose de Costos",
    suggestedPricing: "Precios Sugeridos"
  },
  inputs: {
    partName: "Nombre de la Pieza",
    material: "Tipo de Filamento",
    filamentCost: "Costo del Filamento",
    filamentWeight: "Peso del Filamento",
    printingTime: "Tiempo de Impresión",
    laborTime: "Tiempo de Trabajo",
    hardwareCost: "Costo de Hardware",
    packagingCost: "Costo de Empaque",
    vatRate: "Tasa de IVA"
  },
  costs: {
    materialCost: "Costo de Material",
    laborCost: "Costo de Mano de Obra",
    machineCost: "Costo de Máquina",
    totalLandedCost: "Costo Total",
    margin50: "Margen 50% de Ganancia",
    margin60: "Margen 60% de Ganancia",
    margin70: "Margen 70% de Ganancia"
  },
  advanced: {
    title: "Configuración Avanzada",
    show: "Mostrar Configuración Avanzada",
    hide: "Ocultar Configuración Avanzada",
    calculatedMetrics: "Métricas Calculadas",
    materialEfficiency: "Factor de Eficiencia de Material",
    laborRate: "Tarifa de Mano de Obra",
    printerCost: "Costo de Impresora",
    additionalCost: "Costo Inicial Adicional",
    maintenance: "Mantenimiento Anual",
    printerLife: "Vida Útil Estimada",
    uptime: "Porcentaje de Tiempo Activo",
    powerConsumption: "Consumo de Energía",
    electricityCost: "Costo de Electricidad",
    bufferFactor: "Factor de Margen",
    metrics: {
      totalInvestment: "Inversión Total",
      lifetimeCost: "Costo de Vida Útil",
      uptimeHours: "Tiempo Activo Estimado (hrs/año)",
      depreciation: "Depreciación de Impresora (€/hr)",
      maintenanceCost: "Costo de Mantenimiento (€/hr)",
      electricityCost: "Costo de Electricidad (€/hr)",
      totalCost: "Costo Total de Impresora (€/hr)"
    }
  },
  tooltips: {
    partName: "Nombre o identificador de la pieza",
    material: "Seleccione el tipo de filamento para su impresión",
    filamentCost: "Costo por kg de filamento",
    filamentWeight: "Peso estimado de la impresión en gramos",
    printingTime: "Duración estimada de la impresión",
    laborTime: "Tiempo necesario para configuración, monitoreo y post-procesamiento",
    hardwareCost: "Costo de hardware adicional (tornillos, insertos, etc.)",
    packagingCost: "Costo de materiales de empaque",
    vatRate: "Tasa de Impuesto al Valor Agregado a aplicar al precio final",
    materialEfficiency: "Considera el desperdicio de material e impresiones fallidas (1.1 = 10% de desperdicio)",
    laborRate: "Tarifa por hora para costos de mano de obra incluyendo gastos generales",
    printerCost: "Costo inicial de la impresora 3D",
    additionalCost: "Costos de equipo adicional (herramientas, accesorios, etc.)",
    maintenance: "Costo anual de mantenimiento y piezas de repuesto",
    printerLife: "Vida útil operativa esperada de la impresora",
    uptime: "Porcentaje de tiempo que la impresora está activamente imprimiendo",
    powerConsumption: "Consumo promedio de energía de la impresora en vatios",
    electricityCost: "Tarifa local de electricidad por kilovatio-hora",
    bufferFactor: "Margen de seguridad para costos inesperados (1.3 = 30% de margen)",
    totalInvestment: "Inversión inicial total incluyendo impresora y equipo adicional",
    lifetimeCost: "Costo total durante la vida útil de la impresora incluyendo mantenimiento",
    uptimeHours: "Horas anuales de impresión esperadas basadas en el porcentaje de tiempo activo",
    depreciation: "Costo por hora de la depreciación de la impresora",
    maintenanceCost: "Costo por hora de mantenimiento basado en estimaciones anuales",
    electricityCostHourly: "Costo por hora de electricidad basado en el consumo de energía",
    totalCostHourly: "Costo total de operación por hora incluyendo todos los factores"
  },
  share: {
    button: "Compartir Configuración",
    copied: "¡Copiado!"
  },
  guide: {
    title: "Cómo Usar Esta Calculadora de Costos de Impresión 3D",
    steps: [
      "Ingrese el nombre de su pieza y seleccione el tipo de material del menú desplegable para comenzar",
      "Ingrese el peso estimado del filamento (en gramos) y el tiempo de impresión (en horas) desde su programa de laminado",
      "Agregue los costos adicionales como componentes de hardware y materiales de empaque",
      "Ajuste la configuración avanzada para obtener cálculos más precisos y optimizar costos"
    ]
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Qué tan precisa es esta calculadora de costos de impresión 3D?",
        answer: "Nuestra calculadora proporciona resultados altamente precisos al considerar múltiples factores, incluyendo costos de materiales, tiempo de máquina, mano de obra y gastos generales. Sin embargo, los costos reales pueden variar según la configuración específica de la impresora, las condiciones ambientales y los factores de precios locales."
      },
      {
        question: "¿Qué factores influyen en el costo total de una impresión 3D?",
        answer: "La calculadora considera los costos del filamento, tiempo de impresión, consumo de energía, depreciación de la máquina, costos de mano de obra y materiales adicionales. La configuración avanzada permite ajustar estos parámetros para obtener estimaciones más precisas."
      },
      {
        question: "¿Cómo determino el peso del filamento para mi impresión?",
        answer: "La mayoría de los programas de laminado (slicer) proporcionan un peso estimado del filamento. Para obtener los resultados más precisos en nuestra calculadora, utilice el peso indicado por su software de laminado después de configurar sus ajustes de impresión."
      },
      {
        question: "¿Por qué debo incluir los costos de mano de obra en mis cálculos?",
        answer: "Los costos de mano de obra son particularmente importantes para una fijación de precios precisa, especialmente si se gestiona un negocio. Esto incluye el tiempo dedicado a la preparación de la impresión, post-procesamiento y control de calidad. Nuestra calculadora le ayuda a contabilizar estos costos para tomar mejores decisiones de precios."
      },
      {
        question: "¿Cómo puedo optimizar mis costos de impresión 3D?",
        answer: "Utilice nuestra calculadora para experimentar con diferentes configuraciones y materiales. Considere factores como la densidad de relleno, altura de capa y orientación de impresión para optimizar el uso de material mientras mantiene la calidad. La sección de configuración avanzada puede ayudar a identificar áreas para reducir costos."
      }
    ]
  },
  units: {
    years: "años"
  }
};
