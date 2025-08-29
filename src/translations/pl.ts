export const pl = {
  meta: {
    title: "Kalkulator Kosztów Druku 3D",
    description: "Oblicz koszty druku 3D z najwyższą precyzją. Oszacuj koszty materiałów, pracy i maszyn, aby zoptymalizować strategię cenową."
  },
  calculator: {
    title: "Kalkulator Kosztów Druku 3D",
    subtitle: "Profesjonalna kalkulacja kosztów dla projektów druku 3D",
    projectDetails: "Szczegóły Projektu",
    costBreakdown: "Podział Kosztów",
    suggestedPricing: "Sugerowane Ceny"
  },
  inputs: {
    partName: "Nazwa Części",
    material: "Typ Filamentu",
    filamentCost: "Koszt Filamentu",
    filamentWeight: "Waga Filamentu",
    printingTime: "Czas Druku",
    laborTime: "Czas Pracy",
    hardwareCost: "Koszt Sprzętu",
    packagingCost: "Koszt Opakowania",
    vatRate: "Stawka VAT"
  },
  costs: {
    materialCost: "Koszt Materiału",
    laborCost: "Koszt Pracy",
    machineCost: "Koszt Maszyny",
    totalLandedCost: "Całkowity Koszt",
    margin50: "Marża 50%",
    margin60: "Marża 60%",
    margin70: "Marża 70%"
  },
  advanced: {
    title: "Ustawienia Zaawansowane",
    show: "Pokaż Ustawienia Zaawansowane",
    hide: "Ukryj Ustawienia Zaawansowane",
    calculatedMetrics: "Obliczone Metryki",
    materialEfficiency: "Współczynnik Efektywności Materiału",
    laborRate: "Stawka Godzinowa",
    printerCost: "Koszt Drukarki",
    additionalCost: "Dodatkowe Koszty Początkowe",
    maintenance: "Konserwacja Roczna",
    printerLife: "Szacowana Żywotność",
    uptime: "Procent Czasu Pracy",
    powerConsumption: "Zużycie Energii",
    electricityCost: "Koszt Energii",
    bufferFactor: "Współczynnik Bezpieczeństwa",
    metrics: {
      totalInvestment: "Całkowita Inwestycja",
      lifetimeCost: "Koszt Całego Cyklu Życia",
      uptimeHours: "Szacowany Czas Pracy (godz/rok)",
      depreciation: "Amortyzacja Drukarki (zł/godz)",
      maintenanceCost: "Koszt Konserwacji (zł/godz)",
      electricityCost: "Koszt Energii (zł/godz)",
      totalCost: "Całkowity Koszt Drukarki (zł/godz)"
    }
  },
  tooltips: {
    partName: "Nazwa lub identyfikator części",
    material: "Wybierz typ filamentu dla swojego wydruku",
    filamentCost: "Koszt za kg filamentu",
    filamentWeight: "Szacowana waga wydruku w gramach",
    printingTime: "Szacowany czas trwania druku",
    laborTime: "Czas potrzebny na przygotowanie, monitorowanie i obróbkę końcową",
    hardwareCost: "Koszt dodatkowego sprzętu (śruby, wkładki, itp.)",
    packagingCost: "Koszt materiałów opakowaniowych",
    vatRate: "Stawka podatku VAT stosowana do ceny końcowej",
    materialEfficiency: "Uwzględnia marnotrawstwo materiału i nieudane wydruki (1.1 = 10% marnotrawstwa)",
    laborRate: "Stawka godzinowa za koszty pracy wraz z kosztami ogólnymi",
    printerCost: "Początkowy koszt drukarki 3D",
    additionalCost: "Dodatkowe koszty wyposażenia (narzędzia, akcesoria, itp.)",
    maintenance: "Roczny koszt konserwacji i części zamiennych",
    printerLife: "Oczekiwana żywotność operacyjna drukarki",
    uptime: "Procent czasu, gdy drukarka aktywnie drukuje",
    powerConsumption: "Średnie zużycie energii drukarki w watach",
    electricityCost: "Lokalna stawka za energię elektryczną za kilowatogodzinę",
    bufferFactor: "Margines bezpieczeństwa na nieoczekiwane koszty (1.3 = 30% bufora)",
    totalInvestment: "Całkowita początkowa inwestycja wraz z drukarką i dodatkowym wyposażeniem",
    lifetimeCost: "Całkowity koszt przez żywotność drukarki wraz z konserwacją",
    uptimeHours: "Oczekiwane roczne godziny druku na podstawie procentu czasu pracy",
    depreciation: "Godzinowy koszt amortyzacji drukarki",
    maintenanceCost: "Godzinowy koszt konserwacji na podstawie rocznych szacunków",
    electricityCostHourly: "Godzinowy koszt energii na podstawie zużycia energii",
    totalCostHourly: "Całkowity godzinowy koszt operacyjny uwzględniający wszystkie czynniki"
  },
  share: {
    button: "Udostępnij Ustawienia",
    copied: "Skopiowano!"
  },
  guide: {
    title: "Jak Używać Tego Kalkulatora Kosztów Druku 3D",
    steps: [
      "Wprowadź nazwę części i wybierz typ materiału z menu rozwijanego",
      "Podaj szacowaną wagę filamentu (w gramach) i czas druku (w godzinach) z programu do krojenia",
      "Dodaj dodatkowe koszty, takie jak komponenty sprzętowe i materiały opakowaniowe",
      "Dostosuj ustawienia zaawansowane dla bardziej precyzyjnych obliczeń i optymalizacji kosztów"
    ]
  },
  faq: {
    title: "Często Zadawane Pytania",
    items: [
      {
        question: "Jak dokładny jest ten kalkulator kosztów druku 3D?",
        answer: "Nasz kalkulator kosztów druku 3D zapewnia bardzo dokładne wyniki, uwzględniając wiele czynników, w tym koszty materiałów, czas maszyny, pracę i koszty ogólne. Jednak rzeczywiste koszty mogą się różnić w zależności od konkretnych ustawień drukarki, warunków środowiskowych i lokalnych czynników cenowych."
      },
      {
        question: "Jakie czynniki wpływają na całkowity koszt wydruku 3D?",
        answer: "Kalkulator uwzględnia koszty filamentu, czas druku, zużycie energii, amortyzację maszyny, koszty pracy i dodatkowe materiały. Ustawienia zaawansowane pozwalają na dostrojenie tych parametrów dla bardziej dokładnych szacunków."
      },
      {
        question: "Jak określić wagę filamentu dla mojego wydruku?",
        answer: "Większość programów do krojenia modeli 3D podaje szacowaną wagę filamentu. Dla najdokładniejszych wyników w naszym kalkulatorze użyj wagi wskazanej przez oprogramowanie do krojenia po skonfigurowaniu ustawień druku."
      },
      {
        question: "Dlaczego powinienem uwzględnić koszty pracy w moich obliczeniach?",
        answer: "Koszty pracy są szczególnie ważne dla dokładnej wyceny, zwłaszcza jeśli prowadzisz działalność gospodarczą. Obejmuje to czas spędzony na przygotowaniu wydruku, obróbce końcowej i kontroli jakości. Nasz kalkulator pomaga uwzględnić te koszty dla lepszych decyzji cenowych."
      },
      {
        question: "Jak mogę zoptymalizować koszty druku 3D?",
        answer: "Użyj naszego kalkulatora do eksperymentowania z różnymi ustawieniami i materiałami. Rozważ czynniki takie jak gęstość wypełnienia, wysokość warstwy i orientacja wydruku, aby zoptymalizować zużycie materiału przy zachowaniu jakości. Sekcja ustawień zaawansowanych może pomóc zidentyfikować obszary oszczędności kosztów."
      }
    ]
  },
  units: {
    years: "lata"
  }
};