'use client'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

function AddReview() {
  const [formData, setFormData] = useState({
    rating: null,
    name: '',
    message: '',
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useAuth()
  const router = usePathname()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRatingChange = value => {
    setFormData(prevFormData => ({
      ...prevFormData,
      rating: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!user) {
      setError('Please log in to add a review.')
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: formData.rating,
          name: formData.name,
          message: formData.message,
          userId: user.id,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Failed to add review.')
      }

      setSuccess('Review submitted successfully.')
      setFormData({
        rating: null,
        name: '',
        message: '',
      })
    } catch (error) {
      setError(error.message || 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={classes.supaviews}>
      <div className={classes.supaviews__gradient}></div>
      <div className={classes.supaviews__add}>
        <div className={classes.supaview}>
          <p className={classes.supaview__title}>Describe Your Experience</p>
          <form onSubmit={handleSubmit}>
            <div className={classes.supaview__rating}>
              {[...Array(5)].map((_, index) => (
                <div key={index} onClick={() => handleRatingChange(index + 1)}>
                  <FaStar className={formData.rating >= index + 1 ? classes.checked : ''} />
                </div>
              ))}
            </div>
            <div className={classes.supaview__copy}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {!user ? (
              <Button
                href={`/login?redirect=${encodeURIComponent(router.pathname)}`}
                appearance="primary"
                label="Login to comment"
                disabled={isLoading}
                className={classes.submit}
              />
            ) : (
              <Button
                type="submit"
                appearance="primary"
                label={isLoading ? 'Processing' : 'Add Review'}
                disabled={isLoading}
                className={classes.submit}
              />
            )}
          </form>
          <Message error={error} success={success} />
        </div>
      </div>
    </div>
  )
}

export default AddReview
