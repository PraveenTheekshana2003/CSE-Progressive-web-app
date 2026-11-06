import { DEFAULT_PROFILE } from '../types/profile'
import type { InvestorProfile } from '../types/profile'

const KEY = 'cse-investor-profile'

export function loadProfile(): InvestorProfile {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw) as InvestorProfile
  } catch {
    // ignore errors, use default
  }
  return DEFAULT_PROFILE
}

export function saveProfile(profile: InvestorProfile): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(profile))
  } catch {
    // ignore errors
  }
}

export function resetProfile(): void {
  try {
    localStorage.removeItem(KEY)
  } catch {
    // ignore errors
  }
}