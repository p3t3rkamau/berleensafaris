'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Category, Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import Hamburger from '../../Hamburger'
import { CMSLink } from '../../Link'
import CloseButton from '../closeHamburger'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [hoveredItem, setHoveredItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleItemClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Close the menu after a short delay
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  const handleMouseEnter = index => {
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      <div className={classes.desktopNav}>
        {navItems.map(({ link }, i) => (
          <div
            key={i}
            className={classes.navItem}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <CMSLink {...link} appearance="none" />
            {typeof link === 'object' &&
              'MiniCategories' in link &&
              hoveredItem === i &&
              link.MiniCategories.length > 0 && (
                <div className={classes.dummyDataContainer}>
                  <ul>
                    {link.MiniCategories.map((category: string | Category, index: number) => {
                      if (typeof category === 'string') {
                        // Handle the case where category is a string
                        return (
                          <Link href="/posts">
                            <li key={index}>{category}</li>
                          </Link>
                        )
                      } else {
                        // Handle the case where category is a Category object
                        return (
                          <Link href="/" className={classes.MiniCategories}>
                            <li className={classes.MiniCategoriesLinks} key={index}>
                              {category.title}
                            </li>
                          </Link>
                        )
                      }
                    })}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>

      <div className={classes.mobileNav}>
        <Hamburger isOpen={isOpen} handleClick={toggleMenu} />
        {isOpen && (
          <div className={classes.mobileMenu}>
            <CloseButton onClick={toggleMenu} />
            {navItems.map(({ link }, i) => (
              <CMSLink key={i} {...link} appearance="none" onClick={handleItemClick} />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
