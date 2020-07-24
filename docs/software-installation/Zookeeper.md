# Zookeeper

## Linux安装

解压 

```bash
tar -zxvf zookeeper-3.4.5.tar.gz
```

移动

```bash
mv zookeeper-3.4.5 /usr/local/zk
```

配置zoo.cfg

```bash
cd /usr/local/zk/conf

cp zoo_sample.cfg zoo.cfg
```

编辑zoo.cfg

```bash
vi zoo.cfg
```

修改log地址

```bash
dataDir=/usr/local/zk/data
```

创建data目录

```bash
cd /usr/local/zk

mkdir data
```

运行停止状态

```bash
cd /usr/local/zk/bin

./zkServer.sh start(status,stop)
```

进入工具查看运行

```bash
./zkCli.sh

ls

jsp
```

## Win10安装