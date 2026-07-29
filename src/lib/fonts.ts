import { Outfit, JetBrains_Mono } from 'next/font/google'

export const fontSans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
