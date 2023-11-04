'use client'
import NavApp from '@/Components/NavApp'
import { NextUIProvider } from '@nextui-org/react'

export function Providers ({ children }) {
  return (
    <NextUIProvider>
      <NavApp />
      {children}
    </NextUIProvider>
  )
}
