# Tomcat

## docker安装

1. 搜索tomcat镜像

```bash
docker search tomcat
```

2. 拉取tomcat镜像

```bash
docker pull tomcat
```

3. 创建容器，设置端口映射、目录映射

```bash
# 在/root目录下创建tomcat目录用于存储tomcat数据信息
mkdir ~/tomcat
cd ~/tomcat
```

```bash
docker run -id --name=c_tomcat \
-p 8080:8080 \
-v $PWD:/usr/local/tomcat/webapps \
tomcat 
```

- 参数说明：
  - **-p 8080:8080：**将容器的8080端口映射到主机的8080端口
  
    **-v $PWD:/usr/local/tomcat/webapps：**将主机中当前目录挂载到容器的webapps
