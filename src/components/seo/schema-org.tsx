'use client'

import Script from 'next/script'

interface SchemaOrgProps {
  schema: any
  id?: string
}

export default function SchemaOrg({ schema, id = 'schema-org' }: SchemaOrgProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 