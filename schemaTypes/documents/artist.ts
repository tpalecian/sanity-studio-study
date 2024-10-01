import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'A short description of the artist',
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Artist photo',
      options: {
        hotspot: true,
      },
    }),
  ],
})
