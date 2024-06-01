'use client'

import { useEffect } from 'react'

import useGoogleTagManager from '../googleTagManager'

const GoogleTagManagerInitializer = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGoogleTagManager(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  }, [])

  return null
}

export default GoogleTagManagerInitializer
