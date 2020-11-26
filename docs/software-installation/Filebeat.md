# Filebeat

### Linux安装

> 下载安装包并解压

```bash
wget https://mirrors.huaweicloud.com/filebeat/7.9.1/filebeat-7.9.1-linux-x86_64.tar.gz
```

> 解压

```bash
tar -zxvf filebeat-7.9.1-linux-x86_64.tar.gz
mv filebeat-7.9.1-linux-x86_64 filebeat
```

> 说明

filebeat下面有很多模块，需要用哪个模块，直接运行下面相应的命令即可

> 更改filebeat的配置

```bash
cd filebeat
vi filebeat.yml
#可不配置
filebeat.inputs:
	paths:
    - /nginx/logs/*.log

output.elasticsearch:
	hosts: ["127.0.0.1:9200"]
  	username: "elastic"
  	password: "elastic"
setup.kibana:
  	host: "127.0.0.1/elk"
```

> 开启某个模块(Nginx为例)

```bash
cd filebeat
./filebeat modules enable nginx
```

> 更改Nginx.yml配置

```bash
cd modules.d/
vi nginx.yml
access:
    enabled: true
	var.paths: ["/nginx/logs/access.log"]
error:
    enabled: true
	var.paths: ["/nginx/logs/error.log"]
```

> 配置和启动

```bash
./filebeat setup
#稍等一会，等待配置
./filebeat -e
```

> 查看数据

查看binana控制台端口5601

> 开启MySQL模块

```
cd filebeat
./filebeat modules enable mysql
```

> 开启慢SQL查询功能

```bash
#开启慢SQL查询
slow_query_log=ON
#指定慢SQL收集文件地址
slow_query_log_file=/var/log/mysql/slow_query.log
#临界值，执行时间为多久判定为慢SQL
long_query_time=1
#记录没有使用索引的查询
log_queries_not_using_indexes=ON
```

> 开启慢SQL时需要注意的

1. 慢SQL收集文件不存在，要手动创建
2. 要进行给文件赋予权限：chmod 777 slow_query.log
3. 如果加了权限还不行，需要执行：setenforce 0，强制关闭 vim /etc/selinux/config，修改SELINUX=disabled
4. 修改完需要重启MySQL

> 更改mysql.yml配置

```bash
 error:
    enabled: true
    var.paths: ["/var/log/mysqld.log"]
  slowlog:
    enabled: true
    var.paths: ["/var/log/mysql/slow_query.log"]
```

> 配置和启动

```bash
./filebeat setup
#稍等一会，等待配置
./filebeat -e
```

> 辅助命令

```bash
#查询慢SQL文件所在位置
 show variables like 'slow_query_log_file';
 #查询慢SQL多长时间开始记录（临界值）
 show variables like 'long_query_time';
 #查看错误日志位置
 SHOW VARIABLES LIKE 'log_error';
 #查询慢SQL数量
 show global status like '%slow%';
```



### Window安装

