"use client"

import React from 'react'
import ClientProvider from './client-provider'
import Footer from './footer'
import CookieConsent from './cookie-consent'

export default function RootClient({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return (
    <>
      <ClientProvider>
        {children}
        <Footer />
        <CookieConsent />
      </ClientProvider>
    </>
  )
} 