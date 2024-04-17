const policies = {
  'default-src': ["'self'", 'https://imagekit.io', 'https://ik.imagekit.io/'],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://maps.googleapis.com',
    'https://imagekit.io',
    'https://eu-central-1.aws.data.mongodb-api.com',
  ],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': [
    "'self'",
    'https://*.stripe.com',
    'https://raw.githubusercontent.com',
    'https://imagekit.io',
    'https://ik.imagekit.io/',
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
    'https://berleensafaris.com/api/form-submissions',
    'https://berleensafaris-d9f76eb.payloadcms.app/api/form-submissions',
    'https://berleensafaris.com',
    'https://berleensafaris-d9f76eb.payloadcms.app', // Add this line to allow connections to the specified domain
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
