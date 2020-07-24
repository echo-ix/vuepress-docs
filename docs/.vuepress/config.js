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
      { text: '软件安装', link: '/software-installation/' },
      //{ text: '查看源码', link: '/sound-code/' },
      { 
        text: '微服务系列文档',
        items: [
          { text: 'springcloud', link: '/springcloud/' }
        ]
      },
      { text: '开发工具', link: '/development-tool/',
        items: [
          { text: '格式化工具', link: 'https://www.sojson.com/' }
        ] 
      },
      //{ text: '惊喜彩蛋', link: '/easter-egg/' },
      { text: '我的网址', link: 'http://www.zy.isryan.com' },
    ],
    sidebar: {
      '/springcloud/': [{
        title: '微服务',
        collapsable: false,
        children: [""]
      }],
      '/interview-questions/': [{
        title: '背吧',
        collapsable: false,
        sidebarDepth: 9,
        children: ["","class-loader","run-time","thread-status","thread-stop","thread-wait","thread-while","thread-create"]
      }],
      '/software-installation/': [{
        title: '教程',
        collapsable: false,
        sidebarDepth: 9,
        children: ["","JDK","MySQL","Idea","Redis","Git","SVN","MongoDB","Zookeeper","Kafka","Nginx","Docker","Tomcat","Nacos"]
      }]
    },
    sidebarDepth: 10,
    lastUpdated: '上次更新', // string | boolean,
    extend: '@vuepress/theme-default',
  },
  plugins: [
    ['@vuepress/back-to-top',true]
  ]
}