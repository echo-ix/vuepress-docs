# Kafka

## Linux安装

解压

```bash
tar -zxvf kafka_2.10-0.10.2.1.tgz
```

移动

```bash
mv kafka_2.10-0.10.2.1 /usr/local/kafka
```

配置

```bash
cd /usr/local/kafka/config

vi server.properties
```

修改外网ip配置以及log地址

```bash
advertised.listeners=PLAINTEXT://当前主机IP地址:9092

log.dirs=/usr/local/kafka/data/kafka-logs
```

启动kafka

```bash
cd /usr/local/kafka

bin/kafka-server-start.sh  -daemon config/server.properties  &
```

创建kafka消息分区

```bash
cd bin/

./kafka-topics.sh --zookeeper 127.0.0.1:2181 --partitions 1 --replication-factor 1 --create --topic productscanlog
```

创建kafka生产者

```bash
./kafka-console-producer.sh --broker-list 127.0.0.1:9092 --topic productscanlog
```

另起界面创建kafka消费者

```bash
./kafka-console-consumer.sh --zookeeper 127.0.0.1:2181 --topic productscanlog
```

## Window安装