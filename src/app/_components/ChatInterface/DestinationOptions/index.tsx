// DestinationOptions.tsx
import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

interface DestinationOptionsProps {
  onSelectDestination: (destination: string) => void
}

// const destinations = [
//   {
//     src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/1979bc7b3aa21e5a15483d641e149764__JKhxw8bk.jpg',
//     alt: 'Destination 1',
//     name: 'Destination 1',
//   },
//   {
//     src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/African_savanna_NGigfRmrsK.jpg',
//     alt: 'Destination 2',
//     name: 'Destination 2',
//   },
//   {
//     src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/7c661840fc27fe1d866be773618bda37__QYWFslY-.jpg',
//     alt: 'Destination 3',
//     name: 'Destination 3',
//   },
//   {
//     src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/df1f8c50c50da7d6e0f0cd090a070113_ZcNVVUjVd.jpg',
//     alt: 'Destination 4',
//     name: 'Destination 4',
//   },
//   {
//     src: 'https://ik.imagekit.io/6cga8hi9z/JaeTravels/9af65d31721bab7f9c321711af5c40ba_DaDRBttWn.jpg',
//     alt: 'Destination 5',
//     name: 'Destination 5',
//   },
// ]

const destinations = [
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/26e9e5467c628a227a1e92d066306edc_61NwdN8jk.jpg',
    alt: 'Kenya',
    name: 'Kenya',
    description: 'Kenya Fantastic Budget-Friendly Trip',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/Love-is-in-the-Air-Trip-Tanzania-with-Mauritius-Extension-1024x683_Hx4J7OUOZ.jpg',
    alt: 'Tanzania',
    name: 'Tanzania ',
    description: 'Tanzania Fantastic Budget-Friendly Trip',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/Private-Highlight-of-Rwanda-1024x683_6ugLjCqNP.jpg',
    alt: 'Rwanda Safari Holidays',
    name: 'Rwanda Safari Holidays',
    description: 'Rwanda Fantastic Budget-Friendly Trip',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/Uganda-Essential-1024x683_BCNKCQaW7.jpg',
    alt: 'Uganda African Safaris',
    name: 'Uganda African Safaris',
    description: 'Uganda Fantastic Budget-Friendly Trip',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/top-of-the-table_EUHBipe_h.jpg',
    alt: 'South Africa Safari Holidays',
    name: 'South Africa Safari Holidays',
    description: 'unforgettable adventure with our South Africa',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/Zambia-1024x683_U3YLxeLL2.jpg',
    alt: 'Experience the thrill of the African wilderness',
    name: 'Zambia Safari Holidays',
    description: 'Experience the thrill of the African wilderness',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/2664efdfb6368682fded3def4a68267f_ZVwtbTHan.jpg',
    alt: 'Once In A Lifetime Cairo Trip – Egypt',
    name: 'Once In A Lifetime Cairo Trip – Egypt',
    description: 'Egyptian Escapade',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/Mauritius-1024x683_ZFAcbAY9m.jpg',
    alt: 'Mauritius Safari Holidays',
    name: 'Mauritius Safari Holidays',
    description: 'Indulge in the ultimate luxury adventure',
  },
  {
    src: 'https://ik.imagekit.io/6cga8hi9z/Payload_Blog/Into-Africa-Explore-Safari-Combined-South-Africa-Victoria-Falls-and-Botswana-1024x683_Gqz5qPRz3.jpg',
    alt: 'Botswana Safari Holidays',
    name: 'Botswana Safari Holidays',
    description: 'Embark on an unforgettable journey into the heart of Africa',
  },
]

const DestinationOptions: React.FC<DestinationOptionsProps> = ({ onSelectDestination }) => {
  return (
    <div className={styles.images}>
      {destinations.map((destination, index) => (
        <>
          <div className={styles.imageFlex}>
            <Image
              key={index}
              className={styles.MainImage}
              src={destination.src}
              width={200}
              height={250}
              alt={destination.alt}
              onClick={() => onSelectDestination(destination.name)}
            />
            <div className={styles.content}>
              <div className={styles.title}>{destination.name}</div>
              <div className={styles.description}>{destination.description}</div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default DestinationOptions
