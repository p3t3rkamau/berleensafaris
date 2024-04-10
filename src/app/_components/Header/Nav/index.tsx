'use client'

import React, { useState } from 'react'

// import Link from 'next/link'
import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import Hamburger from '../../Hamburger'
import { CMSLink } from '../../Link'
import CloseButton from '../closeHamburger'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
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

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      <div className={classes.desktopNav}>
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="none" />
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
