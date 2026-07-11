import React from "react";
import { Phone } from "lucide-react";
import { COUNTRIES } from "../lib/phoneCountries";

interface PhoneInputProps {
  phone: string;
  countryCode: string;
  onPhoneChange: (val: string) => void;
  onCountryChange: (val: string) => void;
  disabled?: boolean;
}

export function PhoneInput({ phone, countryCode, onPhoneChange, onCountryChange, disabled }: PhoneInputProps) {
  return (
    <div className="flex gap-2 w-full">
      <select
        value={countryCode}
        onChange={(e) => onCountryChange(e.target.value)}
        disabled={disabled}
        className="shrink-0 w-28 bg-[#0d0c0b] border border-white/5 focus:border-[var(--gold)]/50 rounded-xl py-3 pl-3 pr-2 text-[15px] text-white focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/30 transition-all cursor-pointer appearance-none"
      >
        {COUNTRIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.flag} {c.dial}
          </option>
        ))}
      </select>

      <div className="relative flex-1">
        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="tel"
          placeholder="123 456 789"
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
