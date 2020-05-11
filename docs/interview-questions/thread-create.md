# 线程池创建方式

| 类型   | 接口                        | 说明                                                         |
| ------ | --------------------------- | ------------------------------------------------------------ |
| 接口   | Executor                    | 最上层接口，定义执行任务的方法executor                       |
| 接口   | ExecutorService             | 继承Executor,扩展callable，future，关闭方法                  |
| 接口   | ScheduledExecutorService    | 继承ExecutorService，增加定时任务相关方法                    |
| 实现类 | ThreadPoolExecutor          | 标准的线程池实现                                             |
| 实现类 | ScheduledThreadPoolExecutor | 继承了ThreadPoolExecutor,实现了ScheduledExecutorService中的定时任务方法 |

​	自定义参数对照 

| 参数                     | 说明                                 |
| ------------------------ | ------------------------------------ |
| Main                     | 核心线程数                           |
| Max                      | 最大线程数                           |
| Time                     | 超出核心线程数量的线程存活时间       |
| Unit                     | 存活时间单位                         |
| RejectedExecutionHandler | 指定拒绝策略                         |
| Num                      | 指定最大等待队列数量                 |
| When                     | 等待多少时间开始执行                 |
| How                      | 任务结束之后继续等待多少时间开始执行 |

## 无边界队列

```java
ThreadPoolExecutor threadPoolExecutor = ThreadPoolExecutor(Main,Max,Time,Unit,new LinkedBlockingQueue<Runnable>())
```

因为这里是无边界队列，当没有空闲线程数时，并不会去创建新的线程执行任务，而是把任务放进线程队列

## 指定队列大小

```java
ThreadPoolExecutor threadPoolExecutor = ThreadPoolExecutor(Main,Max,Time,Unit,new LinkedBlickingQueue<Runanle(Num),new RejectedExecutionHandler() {})
```

这个是指定最大等待队列数量，会造成一种线程队列满了以后还会有新的线程，这个时候可以指定拒绝策略，需要重写rejectedExecution方法

## 相等线程数

```java
ThreadPoolExecutor threadPoolExecutor = ThreadPoolExecutor(Main,Max,Time,Unit,new LinkedBlickingQueue<Runanle())
```

​	核心线程数和最大线程数可以设置一样，并没有设置最大等待线程数，为无边界队列

## 零核心线程数

```java
ThreadPoolExecutor threadPoolExecutor = ThreadPoolExecutor(Main,Max,Time,Unit,new SynchronousQueue<Runanle())
```

​	SynchronousQueue并不是真正的队列，不会为队列元素维护存储空间，即开始不需要占用内存，因为0个核心线程数，

​	当有任务提交到线程池中的的时候，没有空闲的线程去执行任务，ThreadPoolExecutor会创建一个线程去执行之前加入失败的工作队列，

​	因为核心线程数为0个，超出核心线程数默认60秒，60后会销毁全部线程

## 立即执行定时任务线程池

```java
ScheduledThreadPoolExecutor threadPoolExecutor = new ScheduledThreadPoolExecutor(Main);
		threadPoolExecutor.schedule(new Runnable() {}, When(3000), TimeUnit.MILLISECONDS);
```

​	设置多久开始执行一次，到点立刻执行，不过有一种情况，当设置的每隔多久执行一次小于任务时间，比如设置3000，单任务执行了5000，那么会等待之前线程完成之后立刻执行当前线程

## 延迟执行定时任务线程池

```java
ScheduledThreadPoolExecutor threadPoolExecutor = new ScheduledThreadPoolExecutor(Main);
		threadPoolExecutor.schedule(new Runnable() {}, When(3000), 
 How(1000),TimeUnit.MILLISECONDS);
```

​	第二个参数是，设置执行每个多少秒之后再延长一定的时间执行任务，还是和上个情况不一样得是，当每隔多久时间小于执行时间，同样会等待之前任务结束之后再次延长一定的时间执行当前线程

## 等待任务完成停止线程

```java
threadPoolExecutor.shutdown();
```

​	等待所有线程任务完成才停止所有线程

## 立刻停止线程

```java
List<Runnable> shutdownNow = threadPoolExecutor.shutdownNow();
```

​	立刻停止线程，返回一个等待队列的数组