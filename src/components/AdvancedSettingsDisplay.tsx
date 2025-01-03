import React from 'react';
import { CostDisplay } from './CostDisplay';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <CostDisplay
        label={t.advanced.metrics.totalInvestment}
        value={calculatedSettings.totalInvestment}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]"
        tooltip={t.tooltips.totalInvestment}
      />
      <CostDisplay
        label={t.advanced.metrics.lifetimeCost}
        value={calculatedSettings.lifetimeCost}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]"
        tooltip={t.tooltips.lifetimeCost}
      />
      <CostDisplay
        label={t.advanced.metrics.uptimeHours}
        value={calculatedSettings.estimatedUptimeHours}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]"
        isHours={true}
        tooltip={t.tooltips.uptimeHours}
      />
      <CostDisplay
        label={t.advanced.metrics.depreciation}
        value={calculatedSettings.printerDepreciation}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]"
        tooltip={t.tooltips.depreciation}
      />
      <CostDisplay
        label={t.advanced.metrics.maintenanceCost}
        value={calculatedSettings.annualMaintenanceCost}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]"
        tooltip={t.tooltips.maintenanceCost}
      />
      <CostDisplay
        label={t.advanced.metrics.electricityCost}
        value={calculatedSettings.electricityCostPerHour}
        className="bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-[#696969]"
        tooltip={t.tooltips.electricityCostHourly}
      />
      <CostDisplay
        label={t.advanced.metrics.totalCost}
        value={calculatedSettings.printerCostPerHour}
        className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-900"
        tooltip={t.tooltips.totalCostHourly}
      />
    </div>
  );
}
