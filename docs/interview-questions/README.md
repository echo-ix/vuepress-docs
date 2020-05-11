# JVM虚拟机

## 1.ClassLoader加载器

> ​	ClassLoad加载器把由.java文件编译后的.class文件加载到运行时数据区，分为四种加载器，主要是使用的双亲委派机制在加载一个文件的时候是自上而下的一个顺序开始查找文件并加载。下面按顺序。

### 1.1根加载器(BootStrop Class Loader)

​	这是java开始初期的一个加载器，也是最高级别，主要加载一些java自带的一些类

### 1.2扩展类加载器(Extensions Class Loader)

​	java之后版本的一个加载器，仅次于根加载器，主要加载一些java扩展类

### 1.3系统类的加载器(System Class Loader)

​	开发过程中定义的一些类的加载器，AppClassLoad

### 1.4自定义加载器

​	java提供开放的api，为用户可以自定义加载器，一般不用