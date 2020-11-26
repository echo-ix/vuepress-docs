# Kibana

### Linux安装

> 下载地址

https://www.elastic.co/cn/downloads/kibana

> 解压：

```bash
tar -zxvf kibana-7.9.2-linux-x86_64.tar.gz
mv kibana-7.9.2-linux-x86_64 kibana
```

> 添加账户和权限

```bash
groupadd kibana
useradd kibana -g kibana
passwd kibana

#cd kibana目录下
chown -R kibana:kibana  kibana
```

> 修改config下配置文件kibana.yml

```bash
#由于elasticsearh不允许外网访问, so Set the configuration like this
#先切换到对应的用户
su kibana
server.host: "IP地址或者0.0.0.0"
elasticsearch.hosts: ["http://127.0.0.1:9200"]
#使用本机IP地址 需要加次配置
xpack.reporting.capture.browser.chromium.disableSandbox: true
xpack.reporting.capture.browser.chromium.proxy.enabled: false
xpack.reporting.enabled: false
#elasticsearch的账号密码
xpack.security.enabled: true
elasticsearch.username: "kibana"
elasticsearch.password: "admin180418"
```

> 添加中文语言 git地址

https://github.com/anbai-inc/Kibana_Hanization.git

拷贝此项目中的translations文件夹到您的kibana目录下的src/legacy/core_plugins/kibana/目录

```bash
#修改bin下的kibana.yml
i18n.locale: "zh-CN"
```

> 启动

```bash
cd /bin
./kibana
```

> 开放端口

```bash
firewall-cmd --zone=public --add-port=5601/tcp --permanent
firewall-cmd --reload
```

> nginx配置

```bash
server.basePath=“nginx匹配规则头”
server.rewriteBasePath: true
```



### Window安装

> 和Linux很像，只不过是下载的压缩包