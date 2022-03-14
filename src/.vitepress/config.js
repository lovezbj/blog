// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  "lang": "zh-cn",
  outDir: '../docs',
  base:'/blog/',
  title: '徐翔',
  description: 'ToBeRich',
  // head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/123.png' }]],
  themeConfig: {
    repo: 'lovezbj/blog',
    logo: '/123.png',
    docsDir: 'docs',
    docsBranch: 'main',
    nav: [
      { text: '技术文章', link: '/tech/' },
    ],
    sidebar: {
      '/about': 'auto',
      '/tech': [
        {
          text: '技术调研',
          children: [
            {
              text: '20个js技巧',
              link: '/tech/'
            }
          ]
        },
      ],
    }
  }
}
