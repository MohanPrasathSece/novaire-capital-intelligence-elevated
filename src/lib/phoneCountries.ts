export interface Country {
  code: string;
  name: string;
  dial: string;
  flag: string;
  placeholder?: string;
}

export const COUNTRIES: Country[] = [
  { code: "IE", name: "Ireland", dial: "+353", flag: "🇮🇪", localLen: 9, placeholder: "87 123 4567" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧", localLen: 10, placeholder: "7700 900000" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷", placeholder: "6 12 34 56 78" },
  { code: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭", placeholder: "79 123 45 67" },
  { code: "BE", name: "Belgium", dial: "+32", flag: "🇧🇪", placeholder: "470 12 34 56" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦", placeholder: "555 123 4567" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸", placeholder: "555 123 4567" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧", placeholder: "7700 900077" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪", placeholder: "151 23456789" },
  { code: "ES", name: "Spain", dial: "+34", flag: "🇪🇸", placeholder: "612 345 678" },
  { code: "IT", name: "Italy", dial: "+39", flag: "🇮🇹", placeholder: "312 345 6789" },
  { code: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱", placeholder: "6 12345678" },
  { code: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪", placeholder: "70 123 45 67" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺", placeholder: "412 345 678" },
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳", placeholder: "98765 43210" },
  { code: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪", placeholder: "50 123 4567" },
  { code: "SG", name: "Singapore", dial: "+65", flag: "🇸🇬", placeholder: "8123 4567" },
  { code: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦", placeholder: "82 123 4567" },
  { code: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷", placeholder: "11 91234 5678" },
  { code: "MX", name: "Mexico", dial: "+52", flag: "🇲🇽", placeholder: "55 1234 5678" },
  { code: "JP", name: "Japan", dial: "+81", flag: "🇯🇵", placeholder: "90 1234 5678" },
  { code: "CY", name: "Cyprus", dial: "+357", flag: "🇨🇾", placeholder: "99 123456" },
];
