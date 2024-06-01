'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
    gtag: (...args: any[]) => void
  }
}

const useGoogleTagManager = (googleAnalyticsId: string) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    gtag('js', new Date())

    gtag('config', googleAnalyticsId)
  }, [googleAnalyticsId])
}

export default useGoogleTagManager
