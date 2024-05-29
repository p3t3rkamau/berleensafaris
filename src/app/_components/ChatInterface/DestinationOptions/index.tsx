// DestinationOptions.tsx
import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

interface DestinationOptionsProps {
  onSelectDestination: (destination: string) => void
}

const destinations = [
  { src: '/images/1.jpg', alt: 'Destination 1', name: 'Destination 1' },
  { src: '/images/2.jpg', alt: 'Destination 2', name: 'Destination 2' },
  { src: '/images/3.jpg', alt: 'Destination 3', name: 'Destination 3' },
]

const DestinationOptions: React.FC<DestinationOptionsProps> = ({ onSelectDestination }) => {
  return (
    <div className={styles.images}>
      {destinations.map((destination, index) => (
        <Image
          key={index}
          src={destination.src}
          width={200}
          height={250}
          alt={destination.alt}
          onClick={() => onSelectDestination(destination.name)}
        />
      ))}
    </div>
  )
}

export default DestinationOptions
