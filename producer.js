'use strict';

const disque = require('disque.js');
const client = disque.connect(['127.0.0.1:7711']);

// 给队列发送消息
client.addjob('queue1', '中文，测试', 0, function(err, res) {
	if (err) return console.error(err);
	console.log('成功发送1条消息，ID: ' + res);
	client.quit();
});
