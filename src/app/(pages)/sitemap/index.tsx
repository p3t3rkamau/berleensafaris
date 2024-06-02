// src/pages/api/sitemap.ts
import type { NextApiRequest, NextApiResponse } from 'next'

import generateSitemap from '../../genarateSitemap' // Import your sitemap generation function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const sitemap = await generateSitemap() // Generate the sitemap
      res.setHeader('Content-Type', 'application/xml')
      res.write(sitemap)
      res.end()
    } catch (error) {
      console.error('Error generating sitemap:', error)
      res.status(500).end() // Internal Server Error
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
