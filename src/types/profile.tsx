export type Horizon = 'short' | 'medium' | 'long'
export type Risk = 'low' | 'moderate' | 'high'

export interface InvestorProfile {
  capital: number
  risk: Risk
  horizon: Horizon
  sectors: string[]
}

export const SECTORS = [
  'Banking',
  'Diversified Financials',
  'Insurance',
  'Capital Goods',
  'Food, Beverage & Tobacco',
  'Consumer Durables',
  'Healthcare',
  'Materials',
  'Energy',
  'Telecommunication',
  'Utilities',
  'Real Estate',
  'Hotels & Travel',
  'Transportation',
]

export const HORIZON_LABELS: Record<Horizon, string> = {
  short: 'Short-term (1–5 days)',
  medium: 'Mid-term (1–4 weeks)',
  long: 'Long-term (1–6 months)',
}

export const RISK_LABELS: Record<Risk, string> = {
  low: 'Low',
  moderate: 'Moderate',
  high: 'High',
}

export const DEFAULT_PROFILE: InvestorProfile = {
  capital: 500000,
  risk: 'moderate',
  horizon: 'medium',
  sectors: ['Banking', 'Diversified Financials'],
}