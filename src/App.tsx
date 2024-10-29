import React, { useState, useEffect } from 'react';
import { Package2, Timer, Wrench, Box, Calculator } from 'lucide-react';
import { InputField } from './components/InputField';
import { CostDisplay } from './components/CostDisplay';
import { ShareButton } from './components/ShareButton';
import { ThemeToggle } from './components/ThemeToggle';
import { AdvancedSettings } from './components/AdvancedSettings';
import { DEFAULT_SETTINGS, MATERIALS, MATERIAL_PRICES } from './constants';
import { calculateCosts } from './utils/calculations';
import type { CalculatorInputs, CostBreakdown } from './types';

function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    partName: '',
    material: MATERIALS[0],
    filamentCost: MATERIAL_PRICES[MATERIALS[0] as keyof typeof MATERIAL_PRICES],
    filamentWeight: 0,
    printingTime: 0,
    laborRequired: 0,
    hardwareCost: 0,
    packagingCost: 0
  });

  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const sharedData = searchParams.get('data');
    
    if (sharedData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(sharedData));
        if (parsedData.inputs) setInputs(parsedData.inputs);
        if (parsedData.settings) setSettings(parsedData.settings);
        
        // Clean up URL after loading
        window.history.replaceState({}, '', window.location.pathname);
      } catch (error) {
        console.error('Failed to parse shared data:', error);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'material') {
      const materialPrice = MATERIAL_PRICES[value as keyof typeof MATERIAL_PRICES];
      setInputs(prev => ({
        ...prev,
        material: value,
        filamentCost: materialPrice
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [name]: name === 'partName' ? value : parseFloat(value) || 0
      }));
    }
  };

  const handleSettingChange = (name: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const costs: CostBreakdown = calculateCosts(inputs, settings);

  const shareData = {
    inputs,
    settings
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-between md:justify-center md:gap-3 w-full">
            <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-[#121212] dark:text-gray-50">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                3D Printing Cost Calculator
              </a>
            </h1>
            <ThemeToggle className="md:absolute md:right-4 md:top-4" />
          </div>
          <p className="text-[#121212] dark:text-gray-400 mt-2">
            Calculate accurate costs for your 3D printing projects
          </p>
        </div>

        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#121212] dark:text-gray-50 mb-4">Project Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Part Name"
              name="partName"
              type="text"
              icon={Package2}
              value={inputs.partName}
              onChange={handleInputChange}
              tooltip="Name or identifier for the part"
            />
            <InputField
              label="Filament Type"
              name="material"
              icon={Box}
              value={inputs.material}
              onChange={handleInputChange}
              isSelect={true}
              options={MATERIALS}
              tooltip="Type of filament being used"
            />
            <InputField
              label="Filament Cost"
              name="filamentCost"
              icon={Calculator}
              value={inputs.filamentCost}
              onChange={handleInputChange}
              tooltip="Cost per kg of filament"
              unit="€/kg"
            />
            <InputField
              label="Filament Weight"
              name="filamentWeight"
              icon={Package2}
              value={inputs.filamentWeight}
              onChange={handleInputChange}
              tooltip="Estimated weight of the print"
              unit="g"
            />
            <InputField
              label="Printing Time"
              name="printingTime"
              icon={Timer}
              value={inputs.printingTime}
              onChange={handleInputChange}
              tooltip="Estimated print duration"
              unit="hrs"
            />
            <InputField
              label="Labor Time"
              name="laborRequired"
              icon={Wrench}
              value={inputs.laborRequired}
              onChange={handleInputChange}
              tooltip="Time spent on preparation and post-processing"
              unit="min"
            />
            <InputField
              label="Hardware Cost"
              name="hardwareCost"
              icon={Package2}
              value={inputs.hardwareCost}
              onChange={handleInputChange}
              tooltip="Cost of additional hardware (screws, inserts, etc.)"
              unit="€"
            />
            <InputField
              label="Packaging Cost"
              name="packagingCost"
              icon={Box}
              value={inputs.packagingCost}
              onChange={handleInputChange}
              tooltip="Cost of packaging materials"
              unit="€"
            />
          </div>
        </div>

        <AdvancedSettings 
          settings={settings}
          onSettingChange={handleSettingChange}
        />

        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[#121212] dark:text-gray-50 mb-4">Cost Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <CostDisplay 
              label="Material Cost" 
              value={costs.materialCost} 
              className="bg-white dark:bg-[#2D2D2D] shadow-sm border border-gray-200 dark:border-[#696969]"
              tooltip="Total cost of filament and hardware"
            />
            <CostDisplay 
              label="Labor Cost" 
              value={costs.laborCost} 
              className="bg-white dark:bg-[#2D2D2D] shadow-sm border border-gray-200 dark:border-[#696969]"
              tooltip="Cost of time spent on preparation and post-processing"
            />
            <CostDisplay 
              label="Machine Cost" 
              value={costs.machineCost} 
              className="bg-white dark:bg-[#2D2D2D] shadow-sm border border-gray-200 dark:border-[#696969]"
              tooltip="Cost of printer operation including depreciation and maintenance"
            />
            <CostDisplay 
              label="Total Landed Cost" 
              value={costs.landedCost} 
              className="bg-red-100 dark:bg-[#3D2D2D] border border-red-300 dark:border-red-900"
              tooltip="Total cost including materials, labor, machine time, and packaging"
            />
          </div>

          <h2 className="text-xl font-semibold text-[#121212] dark:text-gray-50 mb-4">Suggested Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CostDisplay 
              label="50% Profit Margin" 
              value={costs.margin50} 
              className="bg-green-100 dark:bg-[#2D3D2D] border border-green-300 dark:border-green-900"
              tooltip="Recommended selling price for 50% profit margin"
            />
            <CostDisplay 
              label="60% Profit Margin" 
              value={costs.margin60} 
              className="bg-blue-100 dark:bg-[#2D2D3D] border border-blue-300 dark:border-blue-900"
              tooltip="Recommended selling price for 60% profit margin"
            />
            <CostDisplay 
              label="70% Profit Margin" 
              value={costs.margin70} 
              className="bg-purple-100 dark:bg-[#3D2D3D] border border-purple-300 dark:border-purple-900"
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