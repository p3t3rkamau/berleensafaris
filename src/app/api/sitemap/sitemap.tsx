import type { NextApiRequest, NextApiResponse } from 'next'

import generateSitemap from '../../genarateSitemap' // Update this path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const sitemap = await generateSitemap() // Generate the sitemap
      res.setHeader('Content-Type', 'application/xml')
      res.send(sitemap) // Use send instead of write/end for simplicity
    } catch (error) {
      console.error('Error generating sitemap:', error)
      res.status(500).send('Internal Server Error')
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
