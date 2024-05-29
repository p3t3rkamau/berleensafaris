import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Page } from '../../../payload/payload-types'
import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import Accordion from '../../_components/Accordion'
import { Blocks } from '../../_components/Blocks'
// import Categories from '../../_components/Categories'
import CardComponent from '../../_components/CategoryCard'
import ExpandableFloatingActionButton from '../../_components/ChatInterface/FloatingAction/ExpandableFloatingActionButton'
import EnquiryForm from '../../_components/EnquiryForm'
import { Hero } from '../../_components/Hero'
import HeroSection from '../../_components/HeroSection'
import { HR } from '../../_components/HR'
import { InfiniteMovingCard } from '../../_components/Infinitecards/infinitemovingcards'
import QuickBooking from '../../_components/QuickEnquiry'
import Reviews from '../../_components/Reviews'
import Testimonials from '../../_components/Testimonials'
import SlidingHero from '../../_heros/SlidingHero'
import { generateMeta } from '../../_utilities/generateMeta'

import classes from './index.module.scss'
// Payload Cloud caches all files through Cloudflare, so we don't need Next.js to cache them as well
// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// If you are not using Payload Cloud then this line can be removed, see `../../../README.md#cache`
export const dynamic = 'force-dynamic'

const dummyItems = [
  {
    quote:
      'Absolutely breathtaking! Berleen Safaris delivered an unforgettable adventure filled with stunning wildlife and natural wonders.',
    name: 'Laura James',
    title: 'Wildlife Enthusiast',
  },
  {
    quote:
      'Berleen Safaris exceeded all expectations! Their expert guides provided an educational and exhilarating experience through the heart of Africa.',
    name: 'Peter Johnson',
    title: 'Nature Lover',
  },
  {
    quote:
      'An incredible journey with Berleen Safaris! From sunrise game drives to sunset safaris, every moment was magical.',
    name: 'Sophia Clark',
    title: 'Outdoor Explorer',
  },
  {
    quote:
      'Berleen Safaris offers the ultimate wildlife adventure! We encountered the Big Five and witnessed the wonders of nature up close.',
    name: 'James Williams',
    title: 'Adventure Seeker',
  },
  {
    quote:
      'Unforgettable memories made with Berleen Safaris! Their passion for wildlife conservation and commitment to responsible tourism shines through in every experience.',
    name: 'Emily Brown',
    title: 'Conservationist',
  },
  {
    quote:
      'Traveling with Berleen Safaris was a dream come true! Their knowledgeable guides made the journey both educational and exhilarating.',
    name: 'John Davis',
    title: 'Wildlife Advocate',
  },
  {
    quote:
      "Berleen Safaris provided an unparalleled safari experience! We were treated to breathtaking landscapes and unforgettable encounters with Africa's iconic wildlife.",
    name: 'Emma Wilson',
    title: 'Nature Enthusiast',
  },
  {
    quote:
      'A journey of a lifetime with Berleen Safaris! Their dedication to eco-friendly practices and sustainable tourism is commendable.',
    name: 'Michael Johnson',
    title: 'Environmental Activist',
  },
  {
    quote:
      'Berleen Safaris offers the best of African wildlife! Their attention to detail and personalized service made our safari adventure truly special.',
    name: 'Olivia Lee',
    title: 'Animal Lover',
  },
  {
    quote:
      "Exhilarating and educational! Berleen Safaris provided an immersive experience that deepened my appreciation for Africa's natural beauty.",
    name: 'Benjamin Smith',
    title: 'Adventure Enthusiast',
  },
]

const gifUrls = [
  'https://media.giphy.com/media/1jl7gAIvbOoFx7GZBc/giphy.gif',
  'https://media.giphy.com/media/OPQi3UuK1KesElwIeE/giphy.gif',
  'https://media.giphy.com/media/YlAuPqtjwlSyzy8PZU/giphy.gif',
  'https://media.giphy.com/media/5kFxVCoRl3WhuK7wbQ/giphy.gif',
  'https://media.giphy.com/media/1Y1EUUV4mkglG/giphy.gif',
  'https://media.giphy.com/media/d3bSUSvCDAtjFO1O/giphy.gif',
  'https://media.giphy.com/media/3otPoKjyviyRHSyJS8/giphy.gif',
  'https://media.giphy.com/media/yHc0KdDykO6Kk/giphy.gif',
  'https://media.giphy.com/media/26BGsBUQ9Qi7c7qTu/giphy.gif',
]

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }
  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    return notFound()
  }
  const { hero, layout, Accordion: accordionData, HighlightImages, Categories } = page
  const noHighlightImages = !HighlightImages || HighlightImages.length === 0
  const noCategories = !Categories || Categories.length === 0
  const noAccordionData = !accordionData || accordionData.length === 0

  const scrollToForm = () => {
    const formElement = document.querySelector('.form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <React.Fragment>
      {/* <Hero {...hero} /> */}
      {!noHighlightImages && <SlidingHero slidingImages={HighlightImages} smallSliderImages={[]} />}
      {slug === 'posts' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Best Tours To Visit"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/post"
        />
      )}

      {slug === 'projects' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Best Destinations In East Africa"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/projects"
        />
      )}

      {slug === 'experiences' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Experiences"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/experiences"
        />
      )}

      {slug === 'blog' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Explore Our Wide Range Articles"
          subtitle="A brief description of your content"
          buttonText="Explore"
          buttonLink="/blog"
        />
      )}
      {slug === 'about-us' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="About Berleen Safaris"
          subtitle="A brief description of your content"
          buttonText="Get To Know Us"
          buttonLink="/about-us"
        />
      )}
      {slug === 'contact-us' && (
        <HeroSection
          gifUrls={gifUrls}
          interval={10} // Interval in seconds
          title="Talk To Us"
          subtitle="A brief description of your content"
          buttonText="Message"
          buttonLink="/contact-us"
        />
      )}
      {slug === 'contact-us' && <EnquiryForm />}
      {slug === 'home' && <QuickBooking />}
      {!noCategories && <CardComponent categories={Categories} />}
      <HR />
      <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      />
      <HR />
      {/* <h3 className={classes.TestimonialHeader}>Reviews</h3>
      <Testimonials /> */}
      <InfiniteMovingCard items={dummyItems} />
      <Reviews />
      <HR />
      {!noAccordionData && <Accordion accordion={accordionData} />}
      <ExpandableFloatingActionButton />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render static fallback pages for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  if (!page) {
    if (slug === 'home') page = staticHome
  }

  return generateMeta({ doc: page })
}
