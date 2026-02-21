import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Dominick Washburn Portfolio' },
  },
  collections: {
    posts: collection({
      label: 'Thoughts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    caseStudies: collection({
      label: 'Case Studies',
      slugField: 'title',
      path: 'src/content/case-studies/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        client: fields.text({ label: 'Client' }),
        role: fields.text({ label: 'Role' }),
        date: fields.date({ label: 'Date' }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/case-studies',
          publicPath: '/images/case-studies',
        }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    portfolio: collection({
      label: 'Portfolio',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.text({ label: 'Category' }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/portfolio',
          publicPath: '/images/portfolio',
        }),
        link: fields.url({ label: 'Link' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings',
      format: { data: 'json' },
      schema: {
        services: fields.array(
          fields.object({
            title: fields.text({ label: 'Service Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Services', itemLabel: props => props.fields.title.value }
        ),
      },
    }),
  },
});
