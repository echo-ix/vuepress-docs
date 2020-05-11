module.exports = {
  //base: '/vuepress-docs/',
  title: '技术文档',
  dest: './dist',
  description: '一个记录文档, 认知, 见解的技术文档网站',
  head:[
    ['meta', { name: 'keywords', content: '个人博客,文档,java,后端,vuepress,docs,vuepress,主题,vuepress主题,blog' }]
  ]
  ,
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
      { text: '开发工具', link: '/development-tool/',
        items: [
          { text: '格式化工具', link: 'https://www.sojson.com/' }
        ] 
      },
      //{ text: '惊喜彩蛋', link: '/easter-egg/' },
      { text: '我的网址', link: 'http://www.isryan.com' },
    ],
    sidebar: {
      '/docker/': [{
          title: '主题',
          collapsable: false,
          children: ["","one","tow"]
        }
      ],
      '/springcloud/': [{
        title: '主题',
        collapsable: false,
        children: ["","one","tow","default"]
      }]
    },
    sidebarDepth: 10,
    lastUpdated: '上次更新', // string | boolean,
    extend: '@vuepress/theme-default',
  },
  plugins: [
    ['@vuepress/back-to-top',true],
    //['vuepress-plugin-code-copy',true],
    ['vuepress-plugin-baidu-autopush',true],
    ['sitemap',{
      hostname: 'http://www.docs.isryan.com'
    }],
  ]
}