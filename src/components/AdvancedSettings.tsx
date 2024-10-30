import React from 'react';
import { Settings } from 'lucide-react';
import { InputField } from './InputField';
import { AdvancedSettingsDisplay } from './AdvancedSettingsDisplay';
import { calculateAdvancedMetrics } from '../utils/calculations';
import type { PrinterSettings } from '../constants';

interface AdvancedSettingsProps {
  settings: PrinterSettings;
  onSettingChange: (name: string, value: number) => void;
}

export function AdvancedSettings({ settings, onSettingChange }: AdvancedSettingsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
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
        {isOpen ? 'Hide Advanced Settings' : 'Show Advanced Settings'}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg p-6 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField
              label="Material Efficiency Factor"
              name="MATERIAL_EFFICIENCY"
              icon={Settings}
              value={settings.MATERIAL_EFFICIENCY}
              onChange={handleChange}
              tooltip="Accounts for material waste and failed prints (1.1 = 10% waste)"
              unit="x"
            />
            <InputField
              label="Labor Rate"
              name="LABOR_RATE"
              icon={Settings}
              value={settings.LABOR_RATE}
              onChange={handleChange}
              tooltip="Hourly rate for labor costs including overhead"
              unit="€/hr"
            />
            <InputField
              label="Printer Cost"
              name="PRINTER_COST"
              icon={Settings}
              value={settings.PRINTER_COST}
              onChange={handleChange}
              tooltip="Initial cost of the 3D printer"
              unit="€"
            />
            <InputField
              label="Additional Upfront Cost"
              name="ADDITIONAL_COST"
              icon={Settings}
              value={settings.ADDITIONAL_COST}
              onChange={handleChange}
              tooltip="Additional equipment costs (tools, accessories, etc.)"
              unit="€"
            />
            <InputField
              label="Annual Maintenance"
              name="MAINTENANCE_COST"
              icon={Settings}
              value={settings.MAINTENANCE_COST}
              onChange={handleChange}
              tooltip="Yearly maintenance and replacement parts cost"
              unit="€"
            />
            <InputField
              label="Estimated Life"
              name="PRINTER_LIFE"
              icon={Settings}
              value={settings.PRINTER_LIFE}
              onChange={handleChange}
              tooltip="Expected operational lifetime of the printer"
              unit="years"
            />
            <InputField
              label="Uptime Percentage"
              name="UPTIME_PERCENTAGE"
              icon={Settings}
              value={settings.UPTIME_PERCENTAGE}
              onChange={handleChange}
              tooltip="Percentage of time the printer is actively printing"
              unit="%"
            />
            <InputField
              label="Power Consumption"
              name="POWER_CONSUMPTION"
              icon={Settings}
              value={settings.POWER_CONSUMPTION}
              onChange={handleChange}
              tooltip="Average power consumption of the printer in watts"
              unit="W"
            />
            <InputField
              label="Electricity Cost"
              name="ELECTRICITY_COST"
              icon={Settings}
              value={settings.ELECTRICITY_COST}
              onChange={handleChange}
              tooltip="Local electricity rate per kilowatt-hour"
              unit="€/kWh"
            />
            <InputField
              label="Buffer Factor"
              name="BUFFER_FACTOR"
              icon={Settings}
              value={settings.BUFFER_FACTOR}
              onChange={handleChange}
              tooltip="Safety margin for unexpected costs (1.3 = 30% buffer)"
              unit="x"
            />
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">Calculated Metrics</h3>
            <AdvancedSettingsDisplay calculatedSettings={calculatedSettings} />
          </div>
        </div>
      )}
    </div>
  );
}