export type Signal = 'Bullish' | 'Neutral' | 'Bearish'
export type Liquidity = 'High' | 'Medium' | 'Low'

export interface Stock {
  ticker: string
  name: string
  sector: string
  price: number
  change: number // percent
  signal: Signal
  liquidity: Liquidity
  about: string
  open?: number
  high?: number
  low?: number
  close?: number
  prevClose?: number
  volume?: number // number of shares traded
  turnover?: number // value traded, LKR
}

// DEMO DATA: replace the figures below with real end-of-day data.
export const stocks: Stock[] = [
  { ticker: 'COMB', name: 'Commercial Bank of Ceylon PLC', sector: 'Banking', price: 145.8, change: 2.35, signal: 'Bullish', liquidity: 'High',
    about: 'A Sri Lankan licensed commercial bank listed on the Colombo Stock Exchange.',
    open: 143.0, high: 146.5, low: 142.8, close: 145.8, prevClose: 142.45, volume: 412350, turnover: 59800000 },
  { ticker: 'SAMP', name: 'Sampath Bank PLC', sector: 'Banking', price: 87.2, change: -0.68, signal: 'Neutral', liquidity: 'High',
    about: 'A Sri Lankan licensed commercial bank listed on the Colombo Stock Exchange.',
    open: 87.7, high: 88.0, low: 86.9, close: 87.2, prevClose: 87.8, volume: 185200, turnover: 16200000 },
  { ticker: 'HNB', name: 'Hatton National Bank PLC', sector: 'Banking', price: 205.75, change: 1.08, signal: 'Bullish', liquidity: 'High',
    about: 'A Sri Lankan licensed commercial bank listed on the Colombo Stock Exchange.',
    open: 204.0, high: 206.5, low: 203.8, close: 205.75, prevClose: 203.55, volume: 96400, turnover: 19760000 },
  { ticker: 'JKH', name: 'John Keells Holdings PLC', sector: 'Diversified', price: 189.5, change: 0.75, signal: 'Bullish', liquidity: 'High',
    about: 'A diversified conglomerate with interests in sectors such as transportation, consumer foods, retail, leisure and financial services.',
    open: 188.5, high: 190.0, low: 187.8, close: 189.5, prevClose: 188.08, volume: 310600, turnover: 58700000 },
  { ticker: 'NTB', name: 'Nations Trust Bank PLC', sector: 'Banking', price: 64.8, change: 1.42, signal: 'Neutral', liquidity: 'Medium',
    about: 'A Sri Lankan licensed commercial bank listed on the Colombo Stock Exchange.',
    open: 64.0, high: 65.2, low: 63.9, close: 64.8, prevClose: 63.89, volume: 72800, turnover: 4700000 },
]

export const findStock = (ticker?: string) =>
  stocks.find((s) => s.ticker.toLowerCase() === ticker?.toLowerCase())