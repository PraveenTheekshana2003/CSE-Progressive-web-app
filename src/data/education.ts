export type Category = 'Basics' | 'Analysis' | 'Risk' | 'Using the App'

export interface Lesson {
  id: string
  title: string
  summary: string
  category: Category
  minutes: number
  content: string[]
}

export const categories: Category[] = ['Basics', 'Analysis', 'Risk', 'Using the App']

export const lessons: Lesson[] = [
  {
    id: 'what-is-cse',
    title: 'What is the Colombo Stock Exchange?',
    summary: 'How the exchange works and what owning a share means.',
    category: 'Basics',
    minutes: 4,
    content: [
      "The Colombo Stock Exchange (CSE) is Sri Lanka's main stock exchange. It is where shares of listed companies are bought and sold.",
      'When you buy a share, you become a part-owner of that company. Share prices move with supply and demand, company results, interest rates and news.',
    ],
  },
  {
    id: 'cds-account',
    title: 'CDS accounts and stockbrokers',
    summary: 'What you need before you can place your first trade.',
    category: 'Basics',
    minutes: 4,
    content: [
      'A CDS (Central Depository System) account records the shares you own electronically.',
      'You place orders through a licensed stockbroker. Always check that a broker is licensed before opening an account.',
    ],
  },
  {
    id: 'reading-indices',
    title: 'Understanding ASPI and S&P SL20',
    summary: 'What the market indices measure and how to read them.',
    category: 'Analysis',
    minutes: 5,
    content: [
      'The ASPI (All Share Price Index) tracks the price movement of all listed companies. The S&P SL20 tracks 20 of the largest and most actively traded companies.',
      'If an index rises, the market overall moved up, but an individual stock can still move the other way.',
    ],
  },
  {
    id: 'risk-profiles',
    title: 'Risk profiles and diversification',
    summary: 'Why different investors need different portfolios.',
    category: 'Risk',
    minutes: 5,
    content: [
      'A risk profile describes how much price swing you can handle: for example Conservative, Balanced or Aggressive.',
      'Diversification means spreading money across several companies and sectors, so one bad result does not hurt your whole portfolio.',
    ],
  },
  {
    id: 'reading-signals',
    title: 'How to read BUY / HOLD signals',
    summary: 'Time horizons and confidence scores explained.',
    category: 'Using the App',
    minutes: 4,
    content: [
      'Each signal in CSE Insight belongs to a time horizon: short-term (1-10 days), mid-term (1-3 months) or long-term (6-12 months). Check that the horizon matches your own plan.',
      'The confidence percentage is the model\'s own estimate. It is not a guarantee, so use it as one input to your decision, not the only one.',
    ],
  },
]

export const glossary = [
  { term: 'Dividend', meaning: 'A share of company profit paid to shareholders.' },
  { term: 'Market capitalization', meaning: 'Share price multiplied by the number of shares: the total value of a company.' },
  { term: 'P/E ratio', meaning: 'Share price divided by earnings per share. It shows how much investors pay for each rupee of profit.' },
  { term: 'Volatility', meaning: 'How much and how quickly a price moves up and down.' },
  { term: 'Liquidity', meaning: 'How easily a share can be bought or sold without moving its price.' },
]