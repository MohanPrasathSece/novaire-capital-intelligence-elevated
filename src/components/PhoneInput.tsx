import React from "react";
import { Phone } from "lucide-react";
import { COUNTRIES } from "../lib/phoneCountries";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface PhoneInputProps {
  phone: string;
  countryCode: string;
  onPhoneChange: (val: string) => void;
  onCountryChange: (val: string) => void;
  disabled?: boolean;
}

export function PhoneInput({ phone, countryCode, onPhoneChange, onCountryChange, disabled }: PhoneInputProps) {
  const selectedCountry = COUNTRIES.find((c) => c.code === countryCode);
  const placeholderText = selectedCountry?.placeholder || "123 456 789";

  return (
    <div className="flex gap-2 w-full">
      <Select value={countryCode} onValueChange={onCountryChange} disabled={disabled}>
        <SelectTrigger className="shrink-0 w-28 h-auto bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 px-3 text-[15px] text-white focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all cursor-pointer">
          <SelectValue placeholder="Pays" />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" className="bg-[#0a0f1c] text-white border-white/10 rounded-xl max-h-[300px]">
          {COUNTRIES.map((c) => (
            <SelectItem key={c.code} value={c.code} className="focus:bg-white/10 focus:text-white cursor-pointer">
              {c.flag} {c.dial}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="relative flex-1">
        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="tel"
          placeholder={placeholderText}
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          disabled={disabled}
          required
          className="w-full bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-10 pr-4 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all"
        />
      </div>
    </div>
  );
}
