module.exports = {
  title: 'docs.olivia-ai.org',
  description: 'Documentation for Olivia',
  head: [
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'docs.olivia-ai.org' }],
    ['meta', { name: 'og:description', content: 'Documentation for Olivia' }],
    ['meta', { name: 'theme-color', content: '#ff3aaf' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/olivia-ai/docs.olivia-ai.org' },
    ],
    sidebar: [
      '/gettingstarted',
      '/howtouse',
      '/customization/dataset',
      '/customization/triggers'
    ]
  }
}

