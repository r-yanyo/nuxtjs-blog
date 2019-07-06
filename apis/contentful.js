const contentful = require('contentful')

const SPACE_ID = process.env['SPACE_ID']
const ACCESS_TOKEN = process.env['ACCESS_TOKEN']

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

export default client
