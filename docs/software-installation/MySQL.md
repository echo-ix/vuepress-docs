# MySQL5.7

## Linux安装

```bash
wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
```

```bash
yum -y install mysql57-community-release-el7-10.noarch.rpm
```

```bash
yum -y install mysql-community-server
```

```bash
systemctl start  mysqld
```

```
systemctl status mysqld
```

```bash
#查看下初始密码
grep "password" /var/log/mysqld.log
```

```bash
mysql -uroot -p
```

```bash
#设置弱密码规则
set global validate_password_policy=0;
set global validate_password_length=1;
```

```bash
#更改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY 'admin';
```

```bash
#允许远程访问
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'admin' WITH GRANT OPTION;
# 刷新配置
FLUSH PRIVILEGES;
```

## Windows安装

## Docker安装

搜索mysql镜像

```bash
docker search mysql
```

拉取mysql镜像

```bash
docker pull mysql:5.6
```

创建容器，设置端口映射、目录映射

```bash
mkdir ~/mysql
cd ~/mysql

docker run -id -p 3306:3306 --name=a_mysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/log -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=admin mysql:5.7
```

参数说明：

- **-p 3307:3306**：将容器的 3306 端口映射到宿主机的 3307 端口。
- **-v $PWD/conf:/etc/mysql/conf.d**：将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。配置目录
- **-v $PWD/logs:/logs**：将主机当前目录下的 logs 目录挂载到容器的 /logs。日志目录
- **-v $PWD/data:/var/lib/mysql** ：将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。数据目录
- **-e MYSQL_ROOT_PASSWORD=123456：**初始化 root 用户的密码。


## 彻底卸载MySQL5.7

```bash
#查找相应的服务
rpm -qa|grep mysql

#卸载有顺序，试着来吧
rpm -e mysql57-community-release-el7-10.noarch

rpm -e mysql-community-server-5.7.30-1.el7.x86_64

rpm -e mysql-community-client-5.7.30-1.el7.x86_64

rpm -e mysql-community-libs-5.7.30-1.el7.x86_64

rpm -e mysql-community-common-5.7.30-1.el7.x86_64

#查找所有文件夹 一个个删除
find / -name mysql

rm -rf /var/lib/mysql/

rm -rf /usr/share/mysql/

rm -rf /data/mysql/
```

## 更换数据库存储位置

```bash
mkdir /data

cp -R /var/lib/mysql /data/

chmod 777  /data/mysql

chown -R mysql:mysql /data/mysql

vi /etc/my.cnf

datadir=/data/mysql

socket=/data/mysql/mysql.sock

systemctl start mysqld

mysql -uroot -p
```

```bash
#最后启动报错mysql.sock(2)什么错误的话
ln -s /data/mysql/mysql.sock /var/lib/mysql/mysql.sock
```

```bash
#最后检测是否已经更换成功
show variables like '%dir%';
```