import { webpackBundler } from '@payloadcms/bundler-webpack' // bundler-import
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import formBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { slateEditor } from '@payloadcms/richtext-slate' // editor-import
import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'
import imagekitPlugin from 'payloadcms-plugin-imagekit'

import Categories from './collections/Categories'
import Comments from './collections/Comments'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'
import Reviews from './collections/Reviews/Reviews'
// import Reviews from './collections/Reviews'
import Users from './collections/Users'
import BeforeDashboard from './components/BeforeDashboard'
import BeforeLogin from './components/BeforeLogin'
// import { seed } from './endpoints/seed'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { Settings } from './globals/Settings'

const generateTitle: GenerateTitle = () => {
  return 'Berleen Safaris'
}

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, '../../tailwind.css'),
    bundler: webpackBundler(), // bundler-config
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: [BeforeLogin],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, './dotenv.js'),
          [path.resolve(__dirname, './endpoints/seed')]: path.resolve(
            __dirname,
            './emptyModuleMock.js',
          ),
        },
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\tailwind.css$/i,
            use: ['css-loader', 'postcss-loader'],
          },
        ],
      },
    }),
  },
  editor: slateEditor({}), // editor-config
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // database-adapter-config-end
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Reviews, Posts, Projects, Media, Categories, Users, Comments],
  globals: [Settings, Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    'https://berleensafaris.com',
    'https://berleensafaris.com/api/form-submissions',
    'https://lobster-app-vveq3.ondigitalocean.app/api/form-submissions',
    'https://berleensafaris.com/api/reviews',
    'https://lobster-app-vveq3.ondigitalocean.app/api/reviews',
    'https://lobster-app-vveq3.ondigitalocean.app/api/comments',
    'https://berleensafaris.com/api/comments',
    'https://analytics.google.com',
    'https://google.com',
  ].filter(Boolean),
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    'https://berleensafaris.com',
    'https://berleensafaris.com/api/form-submissions',
    'https://lobster-app-vveq3.ondigitalocean.app/api/form-submissions',
    'https://berleensafaris.com/api/reviews',
    'https://lobster-app-vveq3.ondigitalocean.app/api/reviews',
    'https://lobster-app-vveq3.ondigitalocean.app/api/comments',
    'https://berleensafaris.com/api/comments',
    'https://analytics.google.com',
    'https://google.com',
  ].filter(Boolean),
  endpoints: [
    // The seed endpoint is used to populate the database with some example data
    // You should delete this endpoint before deploying your site to production
    // {
    //   path: '/seed',
    //   method: 'get',
    //   handler: seed,
    // },
  ],
  plugins: [
    redirects({
      collections: ['pages', 'posts'],
    }),
    nestedDocs({
      collections: ['categories'],
    }),
    seo({
      collections: ['pages', 'posts', 'projects'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    formBuilder({
      formOverrides: {
        admin: {
          group: 'Content',
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Admin',
        },
      },
      redirectRelationships: ['pages'],
    }),
    imagekitPlugin({
      config: {
        publicKey: process.env.IK_PUBLIC_KEY,
        privateKey: process.env.IK_PRIVATE_KEY,
        endpoint: process.env.IK_ENDPOINT,
      },
      collections: {
        media: {
          uploadOption: {
            folder: 'Payload_Blog',
          },
          savedProperties: ['url'],
        },
      },
    }),
  ],
})
