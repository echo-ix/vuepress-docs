module.exports = {
  base: '/docs/',
  title: '技术文档',
  dest: './dist',
  description: '一个记录文档, 认知, 见解的技术文档网站',
  themeConfig: {
    nav: [
      { text: '刷面试题', link: '/interview-questions/' },
      { text: '查看源码', link: '/sound-code/' },
      { 
        text: '微服务系列文档',
        items: [
          { text: 'docker', link: '/docker/' },
          { text: 'springcloud', link: '/springcloud/' }
        ]
      },
      { text: '开发工具', link: '/development-tool/' },
      { text: '惊喜彩蛋', link: '/easter-egg/' },
      { text: '关联网址', link: 'http://www.isryan.com' },
    ],
    sidebar: {
      '/docker/': [{
          title: '主题',
          collapsable: false,
          children: [
            { title: '介绍', path:'/docker/'},
            { title: '使用主题', path: 'one' }
          ]
        }
      ],
      '/springcloud/': [{
        title: '主题',
        collapsable: false,
        children: [
          { title: '介绍', path:'/springcloud/'},
          { title: '使用主题', path: 'one' },
          { title: '默认主题', path: 'default' }
        ]
      }]
    },
    sidebarDepth: 10,
    lastUpdated: '上次更新', // string | boolean,
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: true, // 默认值：true
    extend: '@vuepress/theme-default'
  }
}