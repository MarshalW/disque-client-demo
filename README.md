# 说明

## 环境说明

在如下环境下开发测试：

 * nodejs v5.4.0
 * disque 1.0rc1
 * disque.js 0.1.3

将代码clone下来。执行：

```
npm install
```

## 运行consumer

然后，可执行`consumer.js`:

```
npm start
```

或者：

```
node consumer
```

可在`disque`客户端通过命令创建job（消息)：

```
addjob queue1 "my job no.1" 0 maxlen 10
```

这时可在`consumer.js`运行时看到类似这样的日志:

```
队列名: queue1
消息内容: my job no.1
任务：D-98d8feb7-TkwmpndbW0+ISJr9vaPLC2ux-05a1 执行完毕。
```

可以跑多个`consumer`。

## 运行producer

执行：

```
npm producer
```

将发送1个job（消息)

