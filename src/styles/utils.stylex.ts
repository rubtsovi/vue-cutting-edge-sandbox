import { globalTokens } from './globalTokens.stylex';

export function compoundHSL(color: ExtractBySuffix<typeof globalTokens, 'H' | 'S' | 'L'>, alpha?: number) {
  const hsl = `${globalTokens[`${color}H`]}, ${globalTokens[`${color}S`]}, ${globalTokens[`${color}L`]}`;
  if (alpha && alpha >= 0 && alpha <= 1) {
    return `hsla(${hsl}, ${alpha})`;
  }

  return `hsl(${hsl})`;
}
