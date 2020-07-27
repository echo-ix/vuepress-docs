# CLassLoader加载机制

## 双亲委派机制

​	当ClassLoader加载是自伤而下的一个顺序加载，即先从BootStrop Class Loader加载，其次才是扩展类加载器和系统类加载器。

## 沙箱安全机制

​	正式基于双亲委派机制，采取了一种自我保护机制，加载类的时候先从BootStrop Class Loader加载器查找rt.jar包下有没有，没有才会查找下面几种加载器，从而保护了源码不受破坏