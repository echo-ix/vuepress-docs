# Linux基本功能

## SSH服务安装步骤

> 初始化的Linux系统是自带的，一般情况无需要进行安装

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

<!-- ## Nginx并发优化
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

netstat -s | grep -i 'listen' -->

## Linux挂载云盘

> 本教程来自于阿里云，挂载的是阿里云的高效云盘，一个分区，挂载云盘到/data文件夹下，如果你也是，可以直接开怼了

```bash
mkdir /data

fdisk -u /dev/vdb

p

n

p

1

回车

回车

p

w

fdisk -lu /dev/vdb

mkfs.ext4 /dev/vdb1

cp /etc/fstab /etc/fstab.bak

echo `blkid /dev/vdb1 | awk '{print $2}' | sed 's/\"//g'` /data ext4 defaults 0 0 >> /etc/fstab

cat /etc/fstab

mount /dev/vdb1 /data

df -h
```