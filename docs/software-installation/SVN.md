# SVN

## Linux安装

安装SVN

```bash
yum install subversion
```

新建存储目录

```bash
mkdir /svn
```

创建仓库

```bash
svnadmin create /svn/pc/
svnadmin create /svn/java/
```

移动任意一个仓库下conf下的authz和passwd 到/svn/存储目录下

```bash
mv pc/conf/authz /svn/
```

```bash
mv pc/conf/passwd /svn/
```

修改每个仓库下conf下的配置文件svnserve.conf，指向统一用户配置文件

```bash
cd /svn/pc/
vi svnserve.conf
[general]

anon-access = read
auth-access = write
password-db = /svn/passwd  #指向统一用户配置文件
authz-db = /svn/authz      #指向统一权限配置文件
realm = /svn/pc 		   #指定当前目录为自己的仓库

[sasl]
```

配置访问用户密码

```bash
vi passwd

[users]
isryan = isryan
isryan1 = isryan1
isryan2 = isryan2
```

配置用户权限

```bash
[aliases]

[groups]      			#指定群组
admin = admin
pc = pc1,pc2
java = java1,java2

[/]                     #开启仓库下的所有权限
@admin = rw

[pc:/]                  #版本库：路径（/svn/存储目录下的路径）
@pc = rw

[java:/]                #版本库：路径（/svn/存储目录下的路径）
@java = rw
```

启动SVN服务

```bash
svnserve -d -r /svn/
```

win连接格式

```js
svn://ip/pc
svn://ip/java
```


## Windows安装