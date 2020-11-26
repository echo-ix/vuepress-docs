# Elasticsearch

### Linux安装

> 下载地址:https://www.elastic.co/cn/downloads/elasticsearch

> 解压：

```bash
tar -zxvf elasticsearch-7.9.2-linux-x86_64.tar.gz
mv elasticsearch-7.9.2 elasticsearch
```

> 添加账户和权限

```bash
groupadd elastic
useradd elastic -g elastic
passwd elastic

#cd elsearch目录下
chown -R elastic:elastic  elasticsearch
```

> 修改config下配置文件elasticsearch.yml

```bash
#如果设置127.0.0.1 设置为本机IP则为集群模式，需要配置安全机制
#先切换到对应的用户
su elastic
node.name: node-1
path.data: /data/elk/elasticsearch/data
path.logs: /data/elk/elasticsearch/logs
network.host: 本机IP或者127.0.0.1
#写这个任意端口都可以访问
http.host: 0.0.0.0
#端口号
http.port: 9200
# 启用密码 进入安全机制  需要进行下一步安装证书才可以正常启动
xpack.security.enabled: true
# 使用默认密码
xpack.security.authc.accept_default_password: true
```

> 解决报错

[1]max file descriptors [4096] for elasticsearch process is too low, increase to at least [65535]

```bash
#修改配置
vi /etc/security/limits.conf
* soft nofile 65536
* hard nofile 65536
#查看配置
ulimit -H -n
```

[2]elasticsearch max virtual memory areas vm.max_map_count [65530] is too low, increase to at le

```bash
vi /etc/sysctl.conf
vm.max_map_count=655360
sysctl -p
```

[3]Transport SSL must be enabled if security is enabled on a [basic] license. Please set [xpack.security.transport.ssl.enabled] to [true] or disable security by setting [xpack.security.enabled] to [false]

```bash
#绑定IP为固定IP 上面的错出现 执行如下操作生成证书
bin/elasticsearch-certutil ca
ENTER ENTER
bin/elasticsearch-certutil cert --ca elastic-stack-ca.p12
ENTER ENTER ENTER
#生成的证书移动到config/certs目录下
mv elastic-certificates.p12 config/certs/

#HTTP层TLS/SSL加密传输(集群之间的传输)
#设置完密码在加到配置文件
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.verification_mode: certificate
xpack.security.transport.ssl.keystore.path: certs/elastic-certificates.p12
xpack.security.transport.ssl.truststore.path: certs/elastic-certificates.p12
```

> 启动

```bash
cd /bin
./elasticsearh
```

> 如果打开了密码，需要设置用户密码(账户为kibnan无权限，超管elastic有权限)

```bash
./elasticsearch-setup-passwords interactive
enter password
```

> 开放端口

```bash
firewall-cmd --zone=public --add-port=2181/tcp --permanent
firewall-cmd --reload
```

> 安装插件，为了更好的展示数据（安装后重启）

```bash
#地图
bin/elasticsearch-plugin install ingest-geoip
#浏览器
bin/elasticsearch-plugin install ingest-user-agent
```

### Window安装

> 和Linux很像，只不过是下载的压缩包

