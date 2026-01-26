// schemas/blog.js
import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: 'content',
      title: 'Blog Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Apostle Darmon Shunet',
      readOnly: true,
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Spiritual Growth', value: 'Spiritual Growth'},
          {title: 'Revelation', value: 'Revelation'},
          {title: 'Leadership', value: 'Leadership'},
          {title: 'Prayer', value: 'Prayer'},
          {title: 'Kingdom Living', value: 'Kingdom Living'},
          {title: 'Family', value: 'Family'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured Blog',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      description: 'Example: 8 min read',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    // --- Stats (optional but future-proof) ---
    defineField({
      name: 'stats',
      title: 'Engagement Stats',
      type: 'object',
      fields: [
        {name: 'views', title: 'Views', type: 'number', initialValue: 0},
        {name: 'shares', title: 'Shares', type: 'number', initialValue: 0},
        {name: 'comments', title: 'Comments', type: 'number', initialValue: 0},
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category',
    },
  },
})
