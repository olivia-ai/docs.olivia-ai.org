module.exports = {
  title: 'docs.olivia-ai.org',
  description: 'Documentation for Olivia',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://i.imgur.com/J1xUbRW.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'docs.olivia-ai.org' }],
    ['meta', { name: 'og:description', content: 'Olivia Documentation — Open-source chatbot built with an artificial neural network' }],
    ['meta', { name: 'og:image', content: 'https://i.imgur.com/mHnqyqj.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'docs.olivia-ai.org' }],
    ['meta', { name: 'twitter:description', content: 'Olivia Documentation — Open-source chatbot built with an artificial neural network' }],
    ['meta', { name: 'twitter:image', content: 'https://i.imgur.com/mHnqyqj.png' }],
    ['meta', { name: 'theme-color', content: '#ff3aaf' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'Website', link: 'https://olivia-ai.org' },
      {
        text: 'Links',
        items: [
          { text: 'Chat online', link: 'https://olivia-ai.org/chat' },
          { text: 'Changelog', link: 'https://olivia-ai.org/changelog' },
          { text: 'Blog', link: 'https://olivia-ai.org/blog' },
          { text: 'Dashboard', link: 'https://olivia-ai.org/dash' }
        ],
      },
      { text: 'GitHub', link: 'https://github.com/olivia-ai/olivia' },
    ],
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '',
          'dictionary',
          'architecture',
          'modules',
          'intents',
        ]
      }
    ],
    logo: 'https://i.imgur.com/J1xUbRW.png'
  }
}

