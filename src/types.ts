export interface CalculatorInputs {
  partName: string;
  material: string;
  filamentCost: number;
  filamentWeight: number;
  printingTime: number;
  laborRequired: number;
  hardwareCost: number;
  packagingCost: number;
}

export interface CostBreakdown {
  materialCost: number;
  laborCost: number;
  machineCost: number;
  landedCost: number;
  margin50: number;
  margin60: number;
  margin70: number;
}