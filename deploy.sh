#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 第一次初始化项目 如果是发布到自定义域名 打开
#echo 'www.docs.isryan.com' > CNAME

#第一次 初始化使用
#git init
git pull
git add -A
git commit -m '上传最新代码'

git push origin master

# 生成静态文件
#npm run docs:build

# 进入生成的文件夹
#cd dist

#第一次 初始化使用
#git init
#git pull
#git add -A
#git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:DaQiangSu/vuepress-docs.git master:gh-pages

cd -