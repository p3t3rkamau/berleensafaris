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

  const router = usePathname()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setIsLoading(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Adjust payload data as needed
          rating: formData.rating,
          name: formData.name,
          message: formData.message,
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
      setIsLoading(false) // Reset loading state after form submission completes
    }
  }

  return (
    <div className={classes.supaviews}>
      <div className={classes.supaviews__gradient}></div>
      <div className={classes.supaviews__add}>
        <div className={classes.supaview}>
          <p className={classes.supaview__title}>Add a new review</p>
          <form onSubmit={handleSubmit}>
            <div className={classes.supaview__rating}>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={classes.starContainer}>
                  <input
                    type="radio"
                    id={`star${index + 1}`}
                    name="rating"
                    value={index + 1}
                    checked={formData.rating === index + 1}
                    onChange={handleChange}
                    className={classes.hiddenRadio}
                  />
                  <label htmlFor={`star${index + 1}`} className={classes.starLabel}>
                    <FaStar className={formData.rating >= index + 1 ? classes.checked : ''} />
                  </label>
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

            <Button
              type="submit"
              appearance="primary"
              label={isLoading ? 'Processing' : 'Add Review'}
              disabled={isLoading}
              className={classes.submit}
            />
          </form>
          <Message className={classes.message} error={error} success={success} />
        </div>
      </div>
    </div>
  )
}

export default AddReview
