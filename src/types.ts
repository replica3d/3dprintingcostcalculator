export interface CalculatorInputs {
  partName: string;
  material: string;
  filamentCost: number;
  filamentWeight: string | number;
  printingTimeHours: string | number;
  printingTimeMinutes: string | number;
  laborRequired: string | number;
  hardwareCost: string | number;
  packagingCost: string | number;
  vatRate: string | number;
}
