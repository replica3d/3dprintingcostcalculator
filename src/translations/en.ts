export const en = {
  meta: {
    title: "3D Printing Cost Calculator",
    description: "Calculate 3D printing costs with precision. Estimate material, labor, and machine expenses to optimize your pricing strategy and maximize profitability."
  },
  calculator: {
    title: "3D Printing Cost Calculator",
    subtitle: "Professional cost estimation for your 3D printing projects",
    projectDetails: "Project Details",
    costBreakdown: "Cost Breakdown",
    suggestedPricing: "Suggested Pricing"
  },
  inputs: {
    partName: "Part Name",
    material: "Filament Type",
    filamentCost: "Filament Cost",
    filamentWeight: "Filament Weight",
    printingTime: "Printing Time",
    laborTime: "Labor Time",
    hardwareCost: "Hardware Cost",
    packagingCost: "Packaging Cost"
  },
  costs: {
    materialCost: "Material Cost",
    laborCost: "Labor Cost",
    machineCost: "Machine Cost",
    totalLandedCost: "Total Landed Cost",
    margin50: "50% Profit Margin",
    margin60: "60% Profit Margin",
    margin70: "70% Profit Margin"
  },
  advanced: {
    title: "Advanced Settings",
    show: "Show Advanced Settings",
    hide: "Hide Advanced Settings",
    calculatedMetrics: "Calculated Metrics",
    materialEfficiency: "Material Efficiency Factor",
    laborRate: "Labor Rate",
    printerCost: "Printer Cost",
    additionalCost: "Additional Upfront Cost",
    maintenance: "Annual Maintenance",
    printerLife: "Estimated Life",
    uptime: "Uptime Percentage",
    powerConsumption: "Power Consumption",
    electricityCost: "Electricity Cost",
    bufferFactor: "Buffer Factor",
    metrics: {
      totalInvestment: "Total Investment",
      lifetimeCost: "Lifetime Cost",
      uptimeHours: "Estimated Uptime (hrs/year)",
      depreciation: "Printer Depreciation (€/hr)",
      maintenanceCost: "Maintenance Cost (€/hr)",
      electricityCost: "Electricity Cost (€/hr)",
      totalCost: "Total Printer Cost (€/hr)"
    }
  },
  tooltips: {
    partName: "Name or identifier for the part",
    material: "Select the type of filament material for your print",
    filamentCost: "Cost per kg of filament",
    filamentWeight: "Estimated weight of the print in grams",
    printingTime: "Estimated print duration",
    laborTime: "Time required for setup, monitoring, and post-processing",
    hardwareCost: "Cost of additional hardware (screws, inserts, etc.)",
    packagingCost: "Cost of packaging materials",
    materialEfficiency: "Accounts for material waste and failed prints (1.1 = 10% waste)",
    laborRate: "Hourly rate for labor costs including overhead",
    printerCost: "Initial cost of the 3D printer",
    additionalCost: "Additional equipment costs (tools, accessories, etc.)",
    maintenance: "Yearly maintenance and replacement parts cost",
    printerLife: "Expected operational lifetime of the printer",
    uptime: "Percentage of time the printer is actively printing",
    powerConsumption: "Average power consumption of the printer in watts",
    electricityCost: "Local electricity rate per kilowatt-hour",
    bufferFactor: "Safety margin for unexpected costs (1.3 = 30% buffer)",
    totalInvestment: "Total initial investment including printer and additional equipment",
    lifetimeCost: "Total cost over the printer's lifetime including maintenance",
    uptimeHours: "Expected annual printing hours based on uptime percentage",
    depreciation: "Hourly cost of printer depreciation",
    maintenanceCost: "Hourly maintenance cost based on annual estimates",
    electricityCostHourly: "Hourly electricity cost based on power consumption",
    totalCostHourly: "Total hourly operating cost including all factors"
  },
  share: {
    button: "Share Calculator Settings",
    copied: "Copied!"
  },
  guide: {
    title: "How to Use This 3D Printing Cost Calculator",
    steps: [
      "Enter your part name and select the material type from the dropdown menu to begin",
      "Input the estimated filament weight (in grams) and printing time (in hours) from your slicer",
      "Add any additional costs such as hardware components and packaging materials",
      "Fine-tune advanced settings for more precise calculations and cost optimization"
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How accurate is this 3D printing cost calculator?",
        answer: "Our 3D printing cost calculator provides highly accurate results by considering multiple factors including material costs, machine time, labor, and overhead. However, actual costs may vary depending on specific printer settings, environmental conditions, and local pricing factors."
      },
      {
        question: "What factors influence the total cost of a 3D print?",
        answer: "The calculator considers filament costs, printing time, power consumption, machine depreciation, labor costs, and additional materials. Advanced settings allow fine-tuning of these parameters for more accurate estimates."
      },
      {
        question: "How do I determine the filament weight for my print?",
        answer: "Most 3D printing slicer programs provide an estimated filament weight. For the most accurate results in our calculator, use the weight indicated by your slicer software after configuring your print settings."
      },
      {
        question: "Why should I include labor costs in my calculations?",
        answer: "Labor costs are particularly important for accurate pricing, especially if running a business. This includes time spent on print preparation, post-processing, and quality control. Our calculator helps you account for these costs for better pricing decisions."
      },
      {
        question: "How can I optimize my 3D printing costs?",
        answer: "Use our calculator to experiment with different settings and materials. Consider factors like infill density, layer height, and print orientation to optimize material usage while maintaining quality. The advanced settings section can help identify areas for cost savings."
      }
    ]
  },
  units: {
    years: "years"
  }
};