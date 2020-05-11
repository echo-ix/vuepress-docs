import _hmt from './js/baidu'
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  
  router.beforeEach((to, from, next) => {
    // @pdai: 对每个页面点击添加百度统计
    if(typeof _hmt!='undefined'){
        if (to.path) {
            _hmt.push(['_trackPageview', to.fullPath]);
        }
    }
    
    // continue
    next();       
})
}