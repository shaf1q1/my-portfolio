import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      description: 'Choose: layout, server, or database',
      options: {
        list: [
          { title: 'Layout (Frontend)', value: 'layout' },
          { title: 'Server (Backend)', value: 'server' },
          { title: 'Database', value: 'database' },
        ],
      },
    }),
    defineField({
      name: 'features',
      title: 'Features/Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})