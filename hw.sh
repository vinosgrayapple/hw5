#!/bin/sh

if [ -n "$1"  ]
 then 
   number=$1
 else 
   echo "Введите номер ДЗ:"
   read A
   number=$A
 fi
dir=hw$number 
 mkdir $dir
cd $dir
mkdir css img js
touch index.html css/main.css
echo #$dir >> README.md
echo """<!DOCTYPE html>
 <html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>

</body>
</html>""" >> index.html
git init
git checkout --orphan gh-pages
git add .
git commit -m "first commit"
#git remote 
subl .

