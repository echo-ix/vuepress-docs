# Redis

## Linux安装

设置[Redis](http://lib.csdn.net/base/redis)的仓库地址

```bash
yum install epel-release
```

安装redis

```bash
yum install redis
```

修改配置文件，监听所有的IP地址

```bash
vim   /etc/redis.conf找到下面这一行 bind 127.0.0.1注释掉 #bind 127.0.0.1
```

如果需要设置开机自动启动

```bash
systemctl enable redis
```

开启防火墙

```bash
firewall-cmd --zone=public --add-port=6379/tcp --permanent
firewall-cmd --reload
```

启动redis

```bash
systemctl start redis
```

## Window安装

## docker安装

1. 搜索redis镜像

```bash
docker search redis
```

2. 拉取redis镜像

```bash
docker pull redis:5.0
```

3. 创建容器，设置端口映射

```bash
docker run -id --name=c_redis -p 6379:6379 redis:5.0
```

4. 使用外部机器连接redis

```bash
./redis-cli.exe -h 192.168.149.135 -p 6379
```