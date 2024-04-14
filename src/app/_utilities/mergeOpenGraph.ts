import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Berleen Safaris',
  title: 'Berleen Safaris - Explore Africas Wildlife',
  description:
    'Experience the adventure of a lifetime with Berleen Safaris. Explore Africas stunning wildlife and natural beauty on our expertly guided tours',
  images: [
    {
      url: 'https://berleensafaris-d9f76eb.payloadcms.app/beerleen.jpeg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
