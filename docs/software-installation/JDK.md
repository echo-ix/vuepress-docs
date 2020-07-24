# JDK8

## Linux安装

> 简单暴力的安装方式，无需配置环境变量

```bash
yum install java-1.8.0-openjdk* -y
```

## Window安装

> 目前官网下载需要注册乱七八糟的，有网盘的可以直接取64X版本，安装好配置环境变量即可

链接：[https://pan.baidu.com/s/1BpO6sMmZX0kUwlfTUZ8QbA](https://pan.baidu.com/s/1BpO6sMmZX0kUwlfTUZ8QbA ) 
提取码：d137

## 配置环境变量

> 仅仅是Windows下的配置



新建环境变量JAVA_HOME

变量名：JAVA_HOME

变量值：C:\Program Files\Java\jdk1.8.0_152 

变量值是自己的jdk安装目录

------

新建环境变量CLASSPATH

变量名：CLASSPATH

变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar

需要注意变量值前面的“.;”

------

配置环境变量Path

双击Path，点击新建，添加 %JAVA_HOME%\bin;

再次点击新建，添加 %JAVA_HOME%\jre\bin。

注意的是不要一次性加进去，要分开，否则会出现命令找不到错误

