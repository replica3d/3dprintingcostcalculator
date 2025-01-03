export const DEFAULT_SETTINGS = {
  MATERIAL_EFFICIENCY: 1.1,
  LABOR_RATE: 20.00,
  PRINT_TIME_RATE: 0.16,
  ELECTRICITY_COST: 0.20,
  BUFFER_FACTOR: 1.3,
  PRINTER_COST: {
    EUR: 1000,
    USD: 1000,
    PLN: 4000
  },
  MAINTENANCE_COST: {
    EUR: 75,
    USD: 75,
    PLN: 300
  },
  PRINTER_LIFE: 3,
  UPTIME_PERCENTAGE: 50,
  POWER_CONSUMPTION: 150,
  ADDITIONAL_COST: 0.00
};

export const MATERIALS = ['PLA', 'PETG', 'ASA', 'TPU', 'PC', 'PA'];

export const MATERIAL_PRICES = {
  EUR: {
    PLA: 19.99,
    PETG: 19.99,
    ASA: 29.99,
    TPU: 39.99,
    PC: 39.99,
    PA: 44.99
  },
  USD: {
    PLA: 21.99,
    PETG: 21.99,
    ASA: 29.99,
    TPU: 39.99,
    PC: 44.99,
    PA: 49.99
  },
  PLN: {
    PLA: 89.99,
    PETG: 89.99,
    ASA: 134.99,
    TPU: 179.99,
    PC: 179.99,
    PA: 199.99
  }
};

export interface PrinterSettings {
  MATERIAL_EFFICIENCY: number;
  LABOR_RATE: number;
  PRINT_TIME_RATE: number;
  ELECTRICITY_COST: number;
  BUFFER_FACTOR: number;
  PRINTER_COST: Record<string, number>;
  MAINTENANCE_COST: Record<string, number>;
  PRINTER_LIFE: number;
  UPTIME_PERCENTAGE: number;
  POWER_CONSUMPTION: number;
  ADDITIONAL_COST: number;
}

export interface CalculatedSettings {
  totalInvestment: number;
  lifetimeCost: number;
  estimatedUptimeHours: number;
  printerDepreciation: number;
  annualMaintenanceCost: number;
  electricityCostPerHour: number;
  printerCostPerHour: number;
}
