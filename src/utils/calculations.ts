import type { PrinterSettings } from '../constants';
import { useCurrency } from '../context/CurrencyContext';

export function calculateAdvancedMetrics(settings: PrinterSettings) {
  const { currency } = useCurrency();
  const totalInvestment = settings.PRINTER_COST[currency] + settings.ADDITIONAL_COST;
  const lifetimeCost = totalInvestment + (settings.MAINTENANCE_COST[currency] * settings.PRINTER_LIFE);
  const estimatedUptimeHours = 8760 * (settings.UPTIME_PERCENTAGE / 100);
  
  const printerDepreciation = settings.PRINTER_COST[currency] / (settings.PRINTER_LIFE * estimatedUptimeHours);
  const annualMaintenanceCost = settings.MAINTENANCE_COST[currency] / estimatedUptimeHours;
  const electricityCostPerHour = (settings.POWER_CONSUMPTION / 1000) * settings.ELECTRICITY_COST;
  
  const printerCostPerHour = (
    printerDepreciation +
    annualMaintenanceCost +
    electricityCostPerHour
  ) * settings.BUFFER_FACTOR;

  return {
    totalInvestment,
    lifetimeCost,
    estimatedUptimeHours,
    printerDepreciation,
    annualMaintenanceCost,
    electricityCostPerHour,
    printerCostPerHour
  };
}

export function calculateCosts(inputs: {
  filamentCost: number;
  filamentWeight: number;
  printingTime: number;
  laborRequired: number;
  hardwareCost: number;
  packagingCost: number;
  vatRate: number;
}, settings: PrinterSettings) {
  const { printerCostPerHour } = calculateAdvancedMetrics(settings);
  
  const materialCost = (inputs.filamentWeight / 1000) * inputs.filamentCost * settings.MATERIAL_EFFICIENCY;
  const totalMaterialCost = materialCost + inputs.hardwareCost;
  
  const laborCost = (inputs.laborRequired / 60) * settings.LABOR_RATE;
  const machineCost = inputs.printingTime * printerCostPerHour;
  
  const landedCost = totalMaterialCost + inputs.packagingCost + laborCost + machineCost;
  
  const margin50 = landedCost / (1 - 0.50);
  const margin60 = landedCost / (1 - 0.60);
  const margin70 = landedCost / (1 - 0.70);

  const calculateWithVAT = (price: number) => price * (1 + (inputs.vatRate / 100));
  
  return {
    materialCost: totalMaterialCost,
    laborCost,
    machineCost,
    landedCost,
    margin50,
    margin60,
    margin70,
    margin50VAT: calculateWithVAT(margin50),
    margin60VAT: calculateWithVAT(margin60),
    margin70VAT: calculateWithVAT(margin70),
    vatRate: inputs.vatRate
  };
}
