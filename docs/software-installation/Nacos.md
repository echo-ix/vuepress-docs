# Nacos
<!-- 
## Docker下安装
```shell
docker run \
  --name c_nacos \
  --hostname=c_nacos \
  --restart=always \
  -d \
  -v $PWD/c_nacos/application.properties:/home/nacos/conf/application.properties \
  -v $PWD/c_nacos/logs:/home/nacos/logs \
  -v $PWD/cluster.conf:/home/nacos/conf/cluster.conf \
  -e MYSQL_MASTER_SERVICE_HOST=192.168.211.128 \
  -e MYSQL_MASTER_SERVICE_PORT=3306 \
  -e MYSQL_MASTER_SERVICE_DB_NAME=nacos \
  -e MYSQL_MASTER_SERVICE_USER=root \
  -e MYSQL_MASTER_SERVICE_PASSWORD=admin \
  -e SPRING_DATASOURCE_PLATFORM=mysql \
  -e MYSQL_DATABASE_NUM=1 \
  -e NACOS_USER=nacos \
  -e NACOS_PASSWORD=nacos \
  -e NACOS_SERVERS=192.168.211.128:8848,192.168.211.128:8849,192.168.211.128:8850 \
  -e JVM_XMS=512m \
  -e JVM_XMX=512m \
  -e JVM_XMN=256m \
  -e JVM_MS=32m \
  -e JVM_MMS=80m \
  -p 8850:8850 \
  nacos/nacos-server
  
  172.17.0.4:8848,172.17.0.2:8849,172.17.0.5:8850
```



docker run -d 

--name nacos-cluster 

--net=host 

-v /home/nacos-cluster/logs:/home/nacos/logs 

--env MODE=cluster 

--env NACOS_SERVERS="host1:8848 host2:8848" 

--env MYSQL_DATABASE_NUM=1 

--env MYSQL_MASTER_SERVICE_HOST=your_host 

--env MYSQL_MASTER_SERVICE_PORT=3306 

--env MYSQL_MASTER_SERVICE_DB_NAME=nacos 

--env MYSQL_MASTER_SERVICE_USER=root 

--env MYSQL_MASTER_SERVICE_PASSWORD=123456

 --env NACOS_SERVER_PORT=8848 

-d 

-p 8848:8848 

nacos/nacos-server



docker run -d --name nacos-cluster 

--net=host 

-v /home/nacos-cluster/logs:/home/nacos/logs 

--env MODE=cluster 

--env NACOS_SERVERS="host1:8848 host2:8848" 

--env MYSQL_DATABASE_NUM=1 

--env MYSQL_MASTER_SERVICE_HOST=your_host 

--env MYSQL_MASTER_SERVICE_PORT=3306 

--env MYSQL_MASTER_SERVICE_DB_NAME=nacos 

--env MYSQL_MASTER_SERVICE_USER=root 

--env MYSQL_MASTER_SERVICE_PASSWORD=123456 

--env NACOS_SERVER_PORT=8848 

-d -p 8848:8848 nacos/nacos-server -->