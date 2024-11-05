import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Package2, Timer, Wrench, Box, Calculator } from 'lucide-react';
import { InputField } from './components/InputField';
import { CostDisplay } from './components/CostDisplay';
import { ShareButton } from './components/ShareButton';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { AdvancedSettings } from './components/AdvancedSettings';
import { HowToUseGuide } from './components/HowToUseGuide';
import { FAQ } from './components/FAQ';
import { DEFAULT_SETTINGS, MATERIALS, MATERIAL_PRICES } from './constants';
import { calculateCosts } from './utils/calculations';
import { useLanguage } from './context/LanguageContext';
import type { CalculatorInputs, CostBreakdown } from './types';

function App() {
  const { t, language } = useLanguage();
  const [inputs, setInputs] = useState<CalculatorInputs>({
    partName: '',
    material: MATERIALS[0],
    filamentCost: MATERIAL_PRICES[MATERIALS[0] as keyof typeof MATERIAL_PRICES],
    filamentWeight: '',
    printingTime: '',
    laborRequired: '',
    hardwareCost: '',
    packagingCost: ''
  });

  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const baseUrl = 'https://3dprintingcostcalculator.com';
  const canonicalUrl = language === 'en' ? baseUrl : `${baseUrl}/${language}`;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const sharedData = searchParams.get('data');
    
    if (sharedData) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(sharedData));
        if (parsedData.inputs) setInputs(parsedData.inputs);
        if (parsedData.settings) setSettings(parsedData.settings);
        
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
        [name]: name === 'partName' ? value : value === '' ? '' : parseFloat(value) || 0
      }));
    }
  };

  const handleSettingChange = (name: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const costs: CostBreakdown = calculateCosts({
    ...inputs,
    filamentWeight: Number(inputs.filamentWeight) || 0,
    printingTime: Number(inputs.printingTime) || 0,
    laborRequired: Number(inputs.laborRequired) || 0,
    hardwareCost: Number(inputs.hardwareCost) || 0,
    packagingCost: Number(inputs.packagingCost) || 0
  }, settings);

  const shareData = {
    inputs,
    settings
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="it" href={`${baseUrl}/it`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-[#121212] py-6 sm:py-12 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-4xl mx-auto">
          {/* SEO-friendly h1 that's visually hidden but accessible to screen readers */}
          <h1 className="sr-only">{t.meta.h1}</h1>

          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-between w-full">
              <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold text-[#121212] dark:text-gray-50">
                {t.calculator.title}
              </h1>
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
            <p className="text-[#121212] dark:text-gray-400 mt-2 mb-4">
              {t.calculator.subtitle}
            </p>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-xl font-semibold text-[#121212] dark:text-gray-50 mb-4">
              {t.calculator.projectDetails}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label={t.inputs.partName}
                name="partName"
                type="text"
                icon={Package2}
                value={inputs.partName}
                onChange={handleInputChange}
                tooltip={t.tooltips.partName}
              />
              <InputField
                label={t.inputs.material}
                name="material"
                icon={Box}
                value={inputs.material}
                onChange={handleInputChange}
                isSelect={true}
                options={MATERIALS}
                tooltip={t.tooltips.material}
              />
              <InputField
                label={t.inputs.filamentCost}
                name="filamentCost"
                icon={Calculator}
                value={inputs.filamentCost}
                onChange={handleInputChange}
                tooltip={t.tooltips.filamentCost}
                unit="€/kg"
              />
              <InputField
                label={t.inputs.filamentWeight}
                name="filamentWeight"
                icon={Package2}
                value={inputs.filamentWeight}
                onChange={handleInputChange}
                tooltip={t.tooltips.filamentWeight}
                unit="g"
              />
              <InputField
                label={t.inputs.printingTime}
                name="printingTime"
                icon={Timer}
                value={inputs.printingTime}
                onChange={handleInputChange}
                tooltip={t.tooltips.printingTime}
                unit="hrs"
              />
              <InputField
                label={t.inputs.laborTime}
                name="laborRequired"
                icon={Wrench}
                value={inputs.laborRequired}
                onChange={handleInputChange}
                tooltip={t.tooltips.laborTime}
                unit="min"
              />
              <InputField
                label={t.inputs.hardwareCost}
                name="hardwareCost"
                icon={Package2}
                value={inputs.hardwareCost}
                onChange={handleInputChange}
                tooltip={t.tooltips.hardwareCost}
                unit="€"
              />
              <InputField
                label={t.inputs.packagingCost}
                name="packagingCost"
                icon={Box}
                value={inputs.packagingCost}
                onChange={handleInputChange}
                tooltip={t.tooltips.packagingCost}
                unit="€"
              />
            </div>
          </div>

          <AdvancedSettings 
            settings={settings}
            onSettingChange={handleSettingChange}
          />

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-[#121212] dark:text-gray-50 mb-4">
              {t.calculator.costBreakdown}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <CostDisplay 
                label={t.costs.materialCost}
                value={costs.materialCost} 
                className="bg-white dark:bg-[#2D2D2D] shadow-sm border border-gray-200 dark:border-[#696969]"
                tooltip={t.tooltips.hardwareCost}
              />
              <CostDisplay 
                label={t.costs.laborCost}
                value={costs.laborCost} 
                className="bg-white dark:bg-[#2D2D2D] shadow-sm border border-gray-200 dark:border-[#696969]"
                tooltip={t.tooltips.laborTime}
              />
              <CostDisplay 
                label={t.costs.machineCost}
                value={costs.machineCost} 
                className="bg-white dark:bg-[#2D2D2D] shadow-sm border border-gray-200 dark:border-[#696969]"
                tooltip={t.tooltips.printingTime}
              />
              <CostDisplay 
                label={t.costs.totalLandedCost}
                value={costs.landedCost} 
                className="bg-red-100 dark:bg-[#3D2D2D] border border-red-300 dark:border-red-900"
                tooltip={t.tooltips.packagingCost}
              />
            </div>

            <h2 className="text-xl font-semibold text-[#121212] dark:text-gray-50 mb-4">
              {t.calculator.suggestedPricing}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CostDisplay 
                label={t.costs.margin50}
                value={costs.margin50} 
                className="bg-green-100 dark:bg-[#2D3D2D] border border-green-300 dark:border-green-900"
              />
              <CostDisplay 
                label={t.costs.margin60}
                value={costs.margin60} 
                className="bg-blue-100 dark:bg-[#2D2D3D] border border-blue-300 dark:border-blue-900"
              />
              <CostDisplay 
                label={t.costs.margin70}
                value={costs.margin70} 
                className="bg-purple-100 dark:bg-[#3D2D3D] border border-purple-300 dark:border-purple-900"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <ShareButton data={shareData} />
          </div>

          <HowToUseGuide />
          <FAQ />
        </div>
      </div>
    </>
  );
}

export default App;