#!/usr/bin/env sh

# abort on errors
set -e

# build
vuepress build takehomessage --temp takehomessage/.temp

# navigate into the build output directory
# cd takehomessage/.vuepress/dist

# if you are deploying to a custom domain
# 'takehomessage.com' > CNAME
rsync -av takehomessage/_posts/figure takehomessage/.vuepress/dist/
rsync -av takehomessage/_posts/widgets takehomessage/.vuepress/dist/
rsync -av takehomessage/_posts/data takehomessage/.vuepress/dist/
rsync -av takehomessage/.vuepress/dist/ ../hutuben.github.io/ --delete --exclude=.git --exclude=CNAME --exclude=.gitignore

cd ../hutuben.github.io/
git add -A
d=`date +"%D"`
git commit -m $d
git push origin master
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f https://github.com/hubentu/takehomessage.git master:gh-pages

cd -
