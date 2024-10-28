export const DEFAULT_SETTINGS = {
  MATERIAL_EFFICIENCY: 1.1,
  LABOR_RATE: 20.00,
  PRINT_TIME_RATE: 0.16,
  ELECTRICITY_COST: 0.20,
  BUFFER_FACTOR: 1.3,
  PRINTER_COST: 1000.00,
  MAINTENANCE_COST: 75.00,
  PRINTER_LIFE: 3,
  UPTIME_PERCENTAGE: 50,
  POWER_CONSUMPTION: 150,
  ADDITIONAL_COST: 0.00
};

export const MATERIALS = ['PLA', 'PETG', 'ASA', 'TPU', 'PC', 'PA'];

export const MATERIAL_PRICES = {
  PLA: 19.99,
  PETG: 19.99,
  ASA: 29.99,
  TPU: 39.99,
  PC: 39.99,
  PA: 44.99
};

export interface PrinterSettings {
  MATERIAL_EFFICIENCY: number;
  LABOR_RATE: number;
  PRINT_TIME_RATE: number;
  ELECTRICITY_COST: number;
  BUFFER_FACTOR: number;
  PRINTER_COST: number;
  MAINTENANCE_COST: number;
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