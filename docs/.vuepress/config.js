module.exports = {
  title: 'Olivia Docs',
  description: 'Documentation for Olivia',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://i.imgur.com/J1xUbRW.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'docs.olivia-ai.org' }],
    ['meta', { name: 'og:description', content: 'Documentation for Olivia' }],
    ['meta', { name: 'theme-color', content: '#ff3aaf' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Chat online', link: 'https://olivia-ai.org/chat' },
      { text: 'Github', link: 'https://github.com/olivia-ai/docs.olivia-ai.org' }
    ],
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '',
          'modules'
        ]
      }
    ],
    logo: 'https://i.imgur.com/J1xUbRW.png'
  }
}

