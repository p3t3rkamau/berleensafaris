const policies = {
  'default-src': [
    "'self'",
    'https://imagekit.io',
    'https://ik.imagekit.io/',
    'https://media.giphy.com',
    'https://giphy.com',
  ],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://maps.googleapis.com',
    'https://imagekit.io',
    'https://eu-central-1.aws.data.mongodb-api.com',
    'https://analytics.google.com',
    'https://google.com',
  ],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': [
    "'self'",
    'https://*.stripe.com',
    'https://raw.githubusercontent.com',
    'https://imagekit.io',
    'https://ik.imagekit.io/',
    'https://giphy.com',
    'https://media.giphy.com',
  ],
  'font-src': ["'self'"],
  'frame-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://hooks.stripe.com',
  ],
  'connect-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://api.stripe.com',
    'https://maps.googleapis.com',
    'https://imagekit.io',
    'https://ik.imagekit.io/',
    'https://lobster-app-vveq3.ondigitalocean.app/api/comments',
    'https://berleensafaris.com/api/comments',
    'https://berleensafaris.com/api/reviews',
    'https://lobster-app-vveq3.ondigitalocean.app/api/reviews',
    'https://berleensafaris.com/api/form-submissions',
    'https://lobster-app-vveq3.ondigitalocean.app/api/form-submissions',
    'https://berleensafaris.com',
    'https://lobster-app-vveq3.ondigitalocean.app',
    'https://giphy.com',
    'https://media.giphy.com',
    'https://analytics.google.com',
    'https://google.com',
  ],
}
//function to gnerte xml
module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
