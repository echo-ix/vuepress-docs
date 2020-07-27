# MongoDB

## Linux安装

配置MongoDB的yum源

```bash
vi /etc/yum.repos.d/mongodb-org-3.4.repo
```

添加以下内容

```bash
[mongodb-org-3.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.6/x86_64/  
gpgcheck=0
enabled=1
```

安装mongoDB

```bash
yum install -y mongodb-org
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'admin' WITH GRANT OPTION;
```

使用mongoDB4LB#%c(>ACTI

```bash
systemctl start mongod
```

启用客户端

```bash
mongo
```

配置远程链接 添加用户

```bash
use admin 

db.createUser(   {     user: "root",     pwd: "admin",     roles: [ "readWrite", "root" ]   } )
```

修改配置

```bash
vim /etc/mongod.conf

修改bindIp = 127.0.0.1
```

重启自开启

```bash
systemctl enable mongod
```

防火墙开放端口 27017

```bash
firewall-cmd --zone=public --add-port=2181/tcp --permanent
firewall-cmd --reload
```

## Window安装