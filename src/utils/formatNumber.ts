export function formatNumber(number: number): string {
  if (number == 0) return "0";
  const absNumber = Math.abs(number);
  const sign = number < 0 ? "-" : "";
  const units: { value: number; symbol: string }[] = [
    { value: 1_000_000_000_000, symbol: "T" },
    { value: 1_000_000_000, symbol: "B" },
    { value: 1_000_000, symbol: "M" },
    { value: 1_000, symbol: "K" },
  ];

  for (const unit of units) {
    if (absNumber >= unit.value) {
      const result = absNumber / unit.value;
      const formatted = result.toFixed(2);

      const clean = parseFloat(formatted).toString();
      return `${sign}${clean}${unit.symbol}`;
    }
  }
  return number.toString();
}
