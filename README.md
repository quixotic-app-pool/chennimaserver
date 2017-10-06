服务器搭建
http://www.cnblogs.com/fengnovo/p/6951353.html
http://www.jb51.net/article/77896.htm


http://m.blog.csdn.net/a912293097/article/details/78131277
看似nodebb强大但也复杂


mongodb 设置用户和密码等
https://docs.mongodb.com/manual/tutorial/enable-authentication/

一些指令(指令行)
ps -ax | grep 'mongo'
kill <PID>

以下都是建在mongo环境下
显示所有db
JS (shell):
db.getCollectionNames()
will list all the collections in the currently selected DB
show collections

To enter or use given database:
use databasename

一般性增减collection操作
Create db mytest:
use mytest
switched to db mytest

Create a collection hello:
db.createCollection("hello")
{ "ok" : 1 }

Show all the collections there:
db.getCollectionNames()
[ "hello", "system.indexes" ]

Insert some dummy data:
db.hello.insert({'a':'b'})
WriteResult({ "nInserted" : 1 })

Make sure it was inserted:
db.hello.find()
{} "_id" : ObjectId("55849b22317df91febf39fa9"), "a" : "b" }

Delete the collection and make sure it is not present any more:
db.hello.drop()
true
db.getCollectionNames()
[ "system.indexes" ]

启动nginx，执行以下这句
/home/ubuntu/nginx/sbin/nginx
修改nginx配置文件，位于/home/ubuntu/nginx/conf/nginx.conf

关闭nginx，执行以下这个强制停止Nginx

pkill -9 nginx

重启再执行

/home/ubuntu/nginx/sbin/nginx
