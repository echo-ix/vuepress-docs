# Linux下部署应用

## SSH服务安装步骤

卸载SSH

```bash
yum -f remove openssh*
```

安装SSH

```bash
yum -f install openssh*
```

开机自启动

```bash
systemctl enable sshd
```

清除防火墙中链中的规则 

```bash
iptables -vnL; iptables -F
```

## 搭建git服务器

安装git

```bash
yum -y install git
```

群组和用户设置

```bash
groupadd gitgroup #设置用户组
useradd git       #创建用户
passwd git		  #设置密码(连续两遍即可 忽略警告)
usermod -G gitgroup git 添加到用户组
```

禁用git用户的shell登录

```bash
:/bin/bash ---> :/bin/git-shell #编辑/etc/路径下的passwd文件，将文件后边的bash改成git-shell
```

创建git裸仓库

```bash
cd /home/git                  #切换到git用户目录
git init --bare isryan.git    #创建一个裸仓库isryan.git
chown -R git:git isryan.git   #将isryan.git下所有目录的所有权 
							  #赋予git用户组下的git用户/用户组(user:group/ group)
```

设置相关权限

```bash
cd /home/git                                       #切换到git用户目录
mkdir .ssh && touch .ssh/authorized_keys           ##创建.ssh目录并创建authorized_keys
chmod 700 .ssh && chmod 600 .ssh/authorized_keys   ##设置相关权限
chown -R git:git .ssh                              ##设置.ssh的所有权
```

## 搭建SVN服务器

安装SVN

```bash
yum install subversion
```

新建存储目录

```bash
mkdir /svn
```

创建仓库

```bash
svnadmin create /svn/isryan/
```

配置文件svnserve.conf

```bash
cd /svn/isryan/
vi svnserve.conf
[general]

anon-access = read
auth-access = write
password-db = passwd
authz-db = authz
realm = /svn/isryan

[sasl]
```

配置访问用户密码

```bash
vi passwd

[users]
isryan = isryan
isryan1 = isryan1
isryan2 = isryan2
```

配置用户权限

```
[aliases]

[groups]

admin = isryan,isryan1
user = isryan2

[/]                     #开启仓库下的所有权限
@admin = rw
@user = r
```

启动SVN服务

```bash
svnserve -d -r /svn/
```

win连接格式

```js
svn://ip/isryan
```

## Docker安装步骤

yum 包更新到最新 

```
yum update
```

安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的

```bash
yum install -y yum-utils device-mapper-persistent-data lvm2


```

设置yum源

```bash
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

解决centos 8的安装docker失败情况

```bash
yum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
```

安装docker

```bash
yum install -y docker-ce
```

查看docker版本，验证是否验证成功

```bash
docker -v
```

## Docker常用命令

查看镜像 默认存储地址/var/lib/docker

```bash
docker images 
```

搜索镜像

```bash
docker search #镜像名字
```

拉取镜像 默认最新版本

```bash
docker pull #镜像名称
```

删除镜像

```bash
docker rm #镜像ID
docker rmi `docker images -q` #删除所有镜像
```

## 容器常用命令

查看正在运行的容器

```bash
docker ps
```

查看所有容器

```bash
docker ps
```

查看最后一次运行的容器

```bash
docker ps -l
```

查看停止的容器

```bash
docker ps -f status-exited
```

docker命令参数

```bash
-i #运行容器

-t #标识容器启动后，进入容器终端内

-name: #容器命名

-v #标识目录映射关系

-d #启动后 创建一个守护式容器后台运行

-p #端口映射

--restart=always #自启动

exit #退出容器
```

交互式方式启动

```bash
docker run -it --name=容器名称 指定镜像名称:标签 /bin/bash
```

守护进程方式启动

```bash
docker run -di --name=容器名称 指定镜像名称:标签 /bin/bash
```

进入守护进程容器内

```bash
docker exec -it 容器名称
```

停止容器

```bash
docker stop 容器名称/ID
```

启动容器

```bash
docker start 容器名称/ID
```

复制文件进容器内

```bash
docker cp 文件地址  容器名称:容器内地址
```

复制容器内的文件到宿主机

```bash
docker cp 容器名称:容器内文件地址 文件地址
```

## Docker部署MySQL

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

## Nginx并发优化
![image-20200528010701303](/linux/image-20200528010701303.png)

lscpu 查看cpu核心数

修改配置文件

重启

![image-20200528010949078](/linux/image-20200528010949078.png)

绑定cpu

![image-20200528013111281](/linux/image-20200528013111281.png)

查看即可

![image-20200528013327532](/linux/image-20200528013327532.png)

修改主配置文件

![image-20200528014016214](/linux/image-20200528014016214.png)

![image-20200528014106302](/linux/image-20200528014106302.png)

文件IO优化

![image-20200528015832345](/linux/image-20200528015832345.png)

![image-20200528015852743](/linux/image-20200528015852743.png)

![image-20200528015938990](/linux/image-20200528015938990.png)

![image-20200528020230977](/linux/image-20200528020230977.png)

网卡优化队列

​	sysctl -a | grep 'tcp_max_syn_backlog'

![image-20200528020510365](/linux/image-20200528020510365.png)



![image-20200529093905463](/linux/image-20200529093905463.png)

![image-20200529094325716](/linux/image-20200529094325716.png)

查看全链接和半连接 数量

netstat -s | grep -i 'listen'