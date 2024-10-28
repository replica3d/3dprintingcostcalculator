import React from 'react';
import { CostDisplay } from './CostDisplay';
import type { CalculatedSettings } from '../constants';

interface AdvancedSettingsDisplayProps {
  calculatedSettings: CalculatedSettings;
}

export function AdvancedSettingsDisplay({ calculatedSettings }: AdvancedSettingsDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <CostDisplay
        label="Total Investment"
        value={calculatedSettings.totalInvestment}
        className="bg-gray-50 border border-gray-200"
        tooltip="Total initial investment including printer and additional equipment"
      />
      <CostDisplay
        label="Lifetime Cost"
        value={calculatedSettings.lifetimeCost}
        className="bg-gray-50 border border-gray-200"
        tooltip="Total cost over the printer's lifetime including maintenance"
      />
      <CostDisplay
        label="Estimated Uptime (hrs/year)"
        value={calculatedSettings.estimatedUptimeHours}
        className="bg-gray-50 border border-gray-200"
        isHours={true}
        tooltip="Expected annual printing hours based on uptime percentage"
      />
      <CostDisplay
        label="Printer Depreciation (€/hr)"
        value={calculatedSettings.printerDepreciation}
        className="bg-gray-50 border border-gray-200"
        tooltip="Hourly cost of printer depreciation"
      />
      <CostDisplay
        label="Maintenance Cost (€/hr)"
        value={calculatedSettings.annualMaintenanceCost}
        className="bg-gray-50 border border-gray-200"
        tooltip="Hourly maintenance cost based on annual estimates"
      />
      <CostDisplay
        label="Electricity Cost (€/hr)"
        value={calculatedSettings.electricityCostPerHour}
        className="bg-gray-50 border border-gray-200"
        tooltip="Hourly electricity cost based on power consumption"
      />
      <CostDisplay
        label="Total Printer Cost (€/hr)"
        value={calculatedSettings.printerCostPerHour}
        className="bg-blue-50 border border-blue-200"
        tooltip="Total hourly operating cost including all factors"
      />
    </div>
  );
}