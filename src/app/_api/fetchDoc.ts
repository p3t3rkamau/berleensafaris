import type { Config } from '../../payload/payload-types'
import { PAGE } from '../_graphql/pages'
import { POST } from '../_graphql/posts'
import { PROJECT } from '../_graphql/projects'
import { GRAPHQL_API_URL } from './shared'
import { payloadToken } from './token'

const queryMap = {
  pages: {
    query: PAGE,
    key: 'Pages',
  },
  posts: {
    query: POST,
    key: 'Posts',
  },
  projects: {
    query: PROJECT,
    key: 'Projects',
  },
}

const getAuthToken = async (draft: boolean): Promise<string | undefined> => {
  if (!draft) return undefined
  const { cookies } = await import('next/headers')
  const token = cookies().get(payloadToken)
  return token?.value
}

const fetchGraphQL = async <T>(
  query: string,
  variables: { slug?: string; draft?: boolean },
): Promise<T> => {
  const token = await getAuthToken(variables.draft)
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  }
  if (token) {
    headers.Authorization = `JWT ${token}`
  }
  const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers,
    cache: 'no-store',
    body: JSON.stringify({ query, variables }),
  })
  const json = await response.json()
  if (json.errors) {
    console.error('Error fetching doc:', json.errors)
    throw new Error(json.errors[0].message ?? 'Error fetching doc')
  }
  return json.data
}

export const fetchDoc = async <T>(args: {
  collection: keyof Config['collections']
  slug?: string
  id?: string
  draft?: boolean
}): Promise<T> => {
  const { collection, slug, draft } = args
  if (!queryMap[collection]) {
    console.error(`Collection ${collection} not found`)
    throw new Error(`Collection ${collection} not found`)
  }
  const query = queryMap[collection].query
  const variables = { slug, draft }
  const data = await fetchGraphQL<T>(query, variables)
  return data[queryMap[collection].key].docs[0]
}
