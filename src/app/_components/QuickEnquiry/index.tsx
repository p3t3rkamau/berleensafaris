'use client'
import React, { useState } from 'react'

import classes from './index.module.scss'
const QuickBooking = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    destination: '',
    NoOfTravellers: '',
    checkinDate: '',
    CheckOutDate: '',
    BudgetPerPerson: '',
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
          form: '661d2f13423ec92a792d8c07', // Replace with your form ID
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
        fullname: '',
        email: '',
        NoOfTravellers: '',
        checkinDate: '',
        CheckOutDate: '',
        BudgetPerPerson: '',
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
      <h3 className={classes.RequestHeader}>Quick Request</h3>
      <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.QuickFormFlex}>
          <div className={classes.formGroup}>
            <input
              placeholder="Fullname"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className={classes.textarea}
            />
          </div>

          <div className={classes.PhoneFlex}>
            <div className={classes.formGroup}>
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
            <div className={classes.formGroup}>
              <input
                placeholder="Number Of Travellers"
                type="text"
                id="NoOfTravellers"
                name="NoOfTravellers"
                value={formData.NoOfTravellers}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
          </div>
        </div>

        <div className={classes.QuickFormFlex}>
          <div>
            <select
              id="Destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className={classes.select1}
            >
              <option value="">Select Destination</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Botswana">Botswana</option>
              <option value="Rwanda">Rwanda</option>
              <option value="South Africa">South Africa</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Zambia">Zambia</option>
            </select>
          </div>
          <div className={classes.PhoneFlex}>
            <div className={classes.formGroup}>
              <input
                type="date"
                placeholder="Check In Date"
                id="checkinDate"
                name="checkinDate"
                value={formData.checkinDate}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
            <div className={classes.formGroup}>
              <input
                type="date"
                placeholder="Check Out Date"
                id="CheckOutDate"
                name="CheckOutDate"
                value={formData.CheckOutDate}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
          </div>
          <div className={classes.formGroup}>
            <select
              placeholder="Budget Per Person"
              id="BudgetPerPerson"
              name="BudgetPerPerson"
              value={formData.BudgetPerPerson}
              onChange={handleChange}
              required
              className={classes.select2}
            >
              <option value="">Budget Per Person</option>
              <option value="$2000-$3000">$2000-$3000</option>
              <option value="$4000-$5000">$4000-$5000</option>
              <option value="$6000-$7000">$6000-$7000</option>
              <option value="$7000-$8000">$7000-$8000</option>
            </select>
          </div>
        </div>

        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
        <div className={classes.successError}>
          {isLoading && <p>Loading, please wait...</p>}
          {hasSubmitted && <p className={classes.success}>Quick Request Sent For Moderation</p>}
          {error && <p className={classes.error}>Error: {error.message}</p>}
        </div>
      </form>
    </div>
  )
}

export default QuickBooking
