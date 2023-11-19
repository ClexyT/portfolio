'use client'
import NavApp from '@/Components/NavApp'
import { NextUIProvider } from '@nextui-org/react'
import { TranslateProvider } from '@/useTranslate'

export function Providers ({ children }) {
  return (
    <TranslateProvider>
      <NextUIProvider>
        <NavApp />
        {children}
      </NextUIProvider>
    </TranslateProvider>
  )
}
