# Docker

## Linux安装

```bash
# 1、yum 包更新到最新 
yum update
# 2、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的 
yum install -y yum-utils device-mapper-persistent-data lvm2
# 3、 设置yum源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 4、 解决centos 8的安装docker失败情况  
yum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
# 5、 安装docker，出现输入的界面都按 y 
yum install -y docker-ce
# 6、 查看docker版本，验证是否验证成功
docker -v


```

## Windows安装


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

## 私有仓库搭建

```bash
# 1、拉取私有仓库镜像 
docker pull registry
# 2、启动私有仓库容器 
docker run -id --name=registry -p 5000:5000 registry
# 3、打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{"repositories":[]} 表示私有仓库 搭建成功
# 4、修改daemon.json   
vim /etc/docker/daemon.json    
# 在上述文件中添加一个key，保存退出。此步用于让 docker 信任私有仓库地址；注意将私有仓库服务器ip修改为自己私有仓库服务器真实ip 
{"insecure-registries":["私有仓库服务器ip:5000"]} 
# 5、重启docker 服务 
systemctl restart docker
docker start registry

```

## 将镜像上传至私有仓库

```bash
# 1、标记镜像为私有仓库的镜像     
docker tag centos:7 私有仓库服务器IP:5000/centos:7
 
# 2、上传标记的镜像     
docker push 私有仓库服务器IP:5000/centos:7

```



##  从私有仓库拉取镜像 

```bash
#拉取镜像 
docker pull 私有仓库服务器ip:5000/centos:7
```
