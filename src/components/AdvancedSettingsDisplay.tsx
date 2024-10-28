import React from 'react';
import { CostDisplay } from './CostDisplay';

interface CalculatedSettings {
  totalInvestment: number;
  lifetimeCost: number;
  estimatedUptimeHours: number;
  printerDepreciation: number;
  annualMaintenanceCost: number;
  electricityCostPerHour: number;
  printerCostPerHour: number;
}

interface AdvancedSettingsDisplayProps {
  calculatedSettings: CalculatedSettings;
}

export function AdvancedSettingsDisplay({ calculatedSettings }: AdvancedSettingsDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <CostDisplay
        label="Total Investment"
        value={calculatedSettings.totalInvestment}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700"
        tooltip="Total initial investment including printer and additional equipment"
      />
      <CostDisplay
        label="Lifetime Cost"
        value={calculatedSettings.lifetimeCost}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700"
        tooltip="Total cost over the printer's lifetime including maintenance"
      />
      <CostDisplay
        label="Estimated Uptime (hrs/year)"
        value={calculatedSettings.estimatedUptimeHours}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700"
        isHours={true}
        tooltip="Expected annual printing hours based on uptime percentage"
      />
      <CostDisplay
        label="Printer Depreciation (€/hr)"
        value={calculatedSettings.printerDepreciation}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700"
        tooltip="Hourly cost of printer depreciation"
      />
      <CostDisplay
        label="Maintenance Cost (€/hr)"
        value={calculatedSettings.annualMaintenanceCost}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700"
        tooltip="Hourly maintenance cost based on annual estimates"
      />
      <CostDisplay
        label="Electricity Cost (€/hr)"
        value={calculatedSettings.electricityCostPerHour}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700"
        tooltip="Hourly electricity cost based on power consumption"
      />
      <CostDisplay
        label="Total Printer Cost (€/hr)"
        value={calculatedSettings.printerCostPerHour}
        className="bg-blue-100 dark:bg-[#2D2D3D] border border-blue-300 dark:border-blue-900"
        tooltip="Total hourly operating cost including all factors"
      />
    </div>
  );
}