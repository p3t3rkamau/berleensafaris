'use client'
import React, { useState } from 'react'

import classes from './index.module.scss'
const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    checkin: '',
    checkout: '',
    adults: 0,
    currency: '',
    amount: 0,
    travelPlans: '',
    name: '',
    email: '',
    contact: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: '660d4a6e76a3c13ddd00dab8', // Replace with your form ID
          submissionData: Object.entries(formData).map(([name, value]) => ({
            field: name,
            value,
          })),
        }),
      })

      const res = await req.json()

      setIsLoading(false)

      if (req.status >= 400) {
        setError({
          status: res.status,
          message: res.errors?.[0]?.message || 'Internal Server Error',
        })
        return
      }

      setHasSubmitted(true)
      setFormData({
        destination: '',
        checkin: '',
        checkout: '',
        adults: 0,
        currency: '',
        amount: 0,
        travelPlans: '',
        name: '',
        email: '',
        contact: '',
      }) // Reset the form data
    } catch (err) {
      console.error(err)
      setIsLoading(false)
      setError({
        message: 'Something went wrong.',
      })
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="duration" className={classes.label}>
            Where Do You Want To Go?
          </label>
          <textarea
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="checkin" className={classes.label}>
            Check In
          </label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="checkout" className={classes.label}>
            Check Out
          </label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            required
            className={classes.textarea}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="adults" className={classes.label}>
            Number of Adults
          </label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="currency" className={classes.label}>
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            required
            className={classes.select}
          >
            <option value="">Select currency</option>
            <option value="usd">USD</option>
            <option value="ksh">KSH</option>
          </select>
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="amount" className={classes.label}>
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="travelPlans" className={classes.label}>
            Tell Us About Your Travel Plans
          </label>
          <textarea
            id="travelPlans"
            name="travelPlans"
            value={formData.travelPlans}
            onChange={handleChange}
            required
            className={classes.textarea}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="name" className={classes.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="contact" className={classes.label}>
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className={classes.input}
          />
        </div>

        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
        {isLoading && <p>Loading, please wait...</p>}
        {hasSubmitted && <p>Form submitted successfully!</p>}
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  )
}

export default EnquiryForm
