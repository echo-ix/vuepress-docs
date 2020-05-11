# 默认主题配置

## 首页

## 导航栏






















### 导航栏logo

### 导航栏链接









张三


### 禁用导航栏

## 侧边栏













张三




```
导航栏链接
你可以通过 themeConfig.nav 增加一些导航栏链接:

// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}


外部链接 <a> 标签的特性将默认包含target="_blank" rel="noopener noreferrer"，你可以提供 target 与 rel，它们将被作为特性被增加到 <a> 标签上：

// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' }
    ]
  }
}
当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表 ：

module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
此外，你还可以通过嵌套的 items 来在 下拉列表 中设置分组：

module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ]
  }
}
```




### 嵌套的标题链接







张三






张三




张三


### 显示所有页面的标题链接