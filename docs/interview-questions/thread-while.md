# 伪唤醒

​	在代码块中不能使用if判断是否进入等待状态，因为更底层的原因会造成伪唤醒，推荐while循环

# 线程封闭

​	数据都封闭在各自的线程中，不被其他线程共享，独享线程中的数据

## ThreadLocal

​	

```java
格式: ThreadLocal<T> thread = new ThreadLocal<T>();
```

​	线程会在各自的线程上创建一个变量副本，彼此之间互相独立，互不干涉