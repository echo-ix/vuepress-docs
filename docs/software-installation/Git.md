# Git

## Linux安装

安装git

```bash
yum -y install git
```

群组和用户设置

```bash
groupadd gitgroup #设置用户组
useradd git       #创建用户
passwd git		  #设置密码(连续两遍即可 忽略警告)
usermod -G gitgroup git 添加到用户组
```

禁用git用户的shell登录

```bash
:/bin/bash ---> :/bin/git-shell #编辑/etc/路径下的passwd文件，将文件后边的bash改成git-shell
```

创建git裸仓库

```bash
cd /home/git                  #切换到git用户目录
git init --bare isryan.git    #创建一个裸仓库isryan.git
chown -R git:git isryan.git   #将isryan.git下所有目录的所有权 ，#赋予git用户组下的git用户/用户组(user:group/ group)
```

设置相关权限

```bash
cd /home/git                                       #切换到git用户目录
mkdir .ssh && touch .ssh/authorized_keys           ##创建.ssh目录并创建authorized_keys
chmod 700 .ssh && chmod 600 .ssh/authorized_keys   ##设置相关权限
chown -R git:git .ssh                              ##设置.ssh的所有权
```

## Window安装