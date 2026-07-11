export interface Country {
  code: string;
  name: string;
  dial: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { code: "BE", name: "Belgium", dial: "+32", flag: "🇧🇪" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { code: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { code: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { code: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
];
