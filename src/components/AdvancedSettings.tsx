import React from 'react';
import { Settings } from 'lucide-react';
import { InputField } from './InputField';
import { AdvancedSettingsDisplay } from './AdvancedSettingsDisplay';
import { calculateAdvancedMetrics } from '../utils/calculations';
import { useLanguage } from '../context/LanguageContext';
import { useCurrency } from '../context/CurrencyContext';
import type { PrinterSettings } from '../constants';

interface AdvancedSettingsProps {
  settings: PrinterSettings;
  onSettingChange: (name: string, value: number) => void;
}

export function AdvancedSettings({ settings, onSettingChange }: AdvancedSettingsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();
  const { currency } = useCurrency();
  const calculatedSettings = calculateAdvancedMetrics(settings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onSettingChange(name, parseFloat(value) || 0);
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
      >
        <Settings className="w-4 h-4" />
        {isOpen ? t.advanced.hide : t.advanced.show}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg p-6 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField
              label={t.advanced.materialEfficiency}
              name="MATERIAL_EFFICIENCY"
              icon={Settings}
              value={settings.MATERIAL_EFFICIENCY}
              onChange={handleChange}
              tooltip={t.tooltips.materialEfficiency}
              unit="x"
            />
            <InputField
              label={t.advanced.laborRate}
              name="LABOR_RATE"
              icon={Settings}
              value={settings.LABOR_RATE}
              onChange={handleChange}
              tooltip={t.tooltips.laborRate}
              unit={`${currency}/hr`}
            />
            <InputField
              label={t.advanced.printerCost}
              name="PRINTER_COST"
              icon={Settings}
              value={settings.PRINTER_COST[currency]}
              onChange={handleChange}
              tooltip={t.tooltips.printerCost}
              unit={currency}
            />
            <InputField
              label={t.advanced.additionalCost}
              name="ADDITIONAL_COST"
              icon={Settings}
              value={settings.ADDITIONAL_COST}
              onChange={handleChange}
              tooltip={t.tooltips.additionalCost}
              unit={currency}
            />
            <InputField
              label={t.advanced.maintenance}
              name="MAINTENANCE_COST"
              icon={Settings}
              value={settings.MAINTENANCE_COST[currency]}
              onChange={handleChange}
              tooltip={t.tooltips.maintenance}
              unit={currency}
            />
            <InputField
              label={t.advanced.printerLife}
              name="PRINTER_LIFE"
              icon={Settings}
              value={settings.PRINTER_LIFE}
              onChange={handleChange}
              tooltip={t.tooltips.printerLife}
              unit={t.units.years}
            />
            <InputField
              label={t.advanced.uptime}
              name="UPTIME_PERCENTAGE"
              icon={Settings}
              value={settings.UPTIME_PERCENTAGE}
              onChange={handleChange}
              tooltip={t.tooltips.uptime}
              unit="%"
            />
            <InputField
              label={t.advanced.powerConsumption}
              name="POWER_CONSUMPTION"
              icon={Settings}
              value={settings.POWER_CONSUMPTION}
              onChange={handleChange}
              tooltip={t.tooltips.powerConsumption}
              unit="W"
            />
            <InputField
              label={t.advanced.electricityCost}
              name="ELECTRICITY_COST"
              icon={Settings}
              value={settings.ELECTRICITY_COST}
              onChange={handleChange}
              tooltip={t.tooltips.electricityCost}
              unit={`${currency}/kWh`}
            />
            <InputField
              label={t.advanced.bufferFactor}
              name="BUFFER_FACTOR"
              icon={Settings}
              value={settings.BUFFER_FACTOR}
              onChange={handleChange}
              tooltip={t.tooltips.bufferFactor}
              unit="x"
            />
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">
              {t.advanced.calculatedMetrics}
            </h3>
            <AdvancedSettingsDisplay calculatedSettings={calculatedSettings} />
          </div>
        </div>
      )}
    </div>
  );
}
