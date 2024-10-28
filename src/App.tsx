import React, { useState, useEffect } from 'react';
import { Calculator, Info, Package, Printer, Clock, Wrench, Euro, Weight, Box } from 'lucide-react';
import { InputField } from './components/InputField';
import { CostDisplay } from './components/CostDisplay';
import { AdvancedSettings } from './components/AdvancedSettings';
import { ShareButton } from './components/ShareButton';
import { MATERIALS, DEFAULT_SETTINGS, MATERIAL_PRICES } from './constants';
import { calculateCosts } from './utils/calculations';
import type { PrinterSettings } from './constants';

interface CalculatorInputs {
  partName: string;
  material: string;
  filamentCost: number;
  filamentWeight: number;
  printingTime: number;
  laborRequired: number;
  hardwareCost: number;
  packagingCost: number;
}

interface CostBreakdown {
  materialCost: number;
  laborCost: number;
  machineCost: number;
  landedCost: number;
  margin50: number;
  margin60: number;
  margin70: number;
}

function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    partName: '',
    material: 'PLA',
    filamentCost: MATERIAL_PRICES.PLA,
    filamentWeight: 0,
    printingTime: 0,
    laborRequired: 0,
    hardwareCost: 0,
    packagingCost: 0,
  });

  const [settings, setSettings] = useState<PrinterSettings>(DEFAULT_SETTINGS);
  const [costs, setCosts] = useState<CostBreakdown>({
    materialCost: 0,
    laborCost: 0,
    machineCost: 0,
    landedCost: 0,
    margin50: 0,
    margin60: 0,
    margin70: 0,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    if (data) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(data));
        if (decodedData.inputs) setInputs(decodedData.inputs);
        if (decodedData.settings) setSettings(decodedData.settings);
      } catch (error) {
        console.error('Error parsing URL data:', error);
      }
    }
  }, []);

  useEffect(() => {
    const calculatedCosts = calculateCosts(inputs, settings);
    setCosts(calculatedCosts);
  }, [inputs, settings]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'material') {
      setInputs(prev => ({
        ...prev,
        material: value,
        filamentCost: MATERIAL_PRICES[value as keyof typeof MATERIAL_PRICES]
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [name]: name === 'partName' ? value : parseFloat(value) || 0,
      }));
    }
  };

  const handleSettingChange = (name: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const shareData = {
    inputs,
    settings
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <Calculator className="w-8 h-8 text-blue-500 md:mb-0" />
            <h1 className="text-3xl font-bold text-gray-900">
              3D Printing Cost Calculator
            </h1>
          </div>
          <p className="mt-2 text-gray-600">Calculate accurate pricing for your 3D printed products</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Print Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <InputField
                label="Part Name"
                name="partName"
                type="text"
                icon={Info}
                value={inputs.partName}
                onChange={handleInputChange}
                tooltip="Enter a descriptive name for your 3D printed part"
              />
              
              <InputField
                label="Filament Type"
                name="material"
                icon={Package}
                value={inputs.material}
                isSelect={true}
                options={MATERIALS}
                onChange={handleInputChange}
                tooltip="Select the type of filament material you'll be using"
              />
              
              <InputField
                label="Filament Cost"
                name="filamentCost"
                icon={Euro}
                value={inputs.filamentCost}
                onChange={handleInputChange}
                unit="€/kg"
                tooltip="Cost per kilogram of your selected filament"
              />
              
              <InputField
                label="Part Weight"
                name="filamentWeight"
                icon={Weight}
                value={inputs.filamentWeight}
                onChange={handleInputChange}
                unit="g"
                tooltip="Estimated weight of the printed part in grams (from your slicer)"
              />
            </div>

            <div className="space-y-6">
              <InputField
                label="Printing Time"
                name="printingTime"
                icon={Clock}
                value={inputs.printingTime}
                onChange={handleInputChange}
                unit="hrs"
                tooltip="Total estimated print duration in hours (from your slicer)"
              />
              
              <InputField
                label="Labor Required"
                name="laborRequired"
                icon={Wrench}
                value={inputs.laborRequired}
                onChange={handleInputChange}
                unit="min"
                tooltip="Time needed for print preparation, removal, and post-processing"
              />
              
              <InputField
                label="Hardware Cost"
                name="hardwareCost"
                icon={Printer}
                value={inputs.hardwareCost}
                onChange={handleInputChange}
                unit="€"
                tooltip="Cost of additional hardware (screws, inserts, etc.)"
              />
              
              <InputField
                label="Packaging Cost"
                name="packagingCost"
                icon={Box}
                value={inputs.packagingCost}
                onChange={handleInputChange}
                unit="€"
                tooltip="Cost of packaging materials for shipping"
              />
            </div>
          </div>
        </div>

        <AdvancedSettings settings={settings} onSettingChange={handleSettingChange} />

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cost Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <CostDisplay 
              label="Material Cost" 
              value={costs.materialCost} 
              className="bg-white shadow-sm border border-gray-200"
              tooltip="Total cost of filament and hardware"
            />
            <CostDisplay 
              label="Labor Cost" 
              value={costs.laborCost} 
              className="bg-white shadow-sm border border-gray-200"
              tooltip="Cost of time spent on preparation and post-processing"
            />
            <CostDisplay 
              label="Machine Cost" 
              value={costs.machineCost} 
              className="bg-white shadow-sm border border-gray-200"
              tooltip="Cost of printer operation including depreciation and maintenance"
            />
            <CostDisplay 
              label="Total Landed Cost" 
              value={costs.landedCost} 
              className="bg-red-50 border border-red-200"
              tooltip="Total cost including materials, labor, machine time, and packaging"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggested Retail Prices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CostDisplay 
              label="50% Profit Margin" 
              value={costs.margin50} 
              className="bg-green-50 border border-green-200"
              tooltip="Recommended selling price for 50% profit margin"
            />
            <CostDisplay 
              label="60% Profit Margin" 
              value={costs.margin60} 
              className="bg-blue-50 border border-blue-200"
              tooltip="Recommended selling price for 60% profit margin"
            />
            <CostDisplay 
              label="70% Profit Margin" 
              value={costs.margin70} 
              className="bg-purple-50 border border-purple-200"
              tooltip="Recommended selling price for 70% profit margin"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <ShareButton data={shareData} />
        </div>
      </div>
    </div>
  );
}

export default App;