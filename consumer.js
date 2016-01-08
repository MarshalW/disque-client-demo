'use strict';

const disque = require('disque.js');
const client = disque.connect(['127.0.0.1:7711']);

const queueJobs=getJob('queue1',function(){
	queueJobs.next();
});

queueJobs.next();

function *getJob(queueName,callback){
	while(true){
		yield client.getjob([queueName], function(err, jobs) {
			if (err) return console.error(err);
			jobs.forEach(function(job) {
				let queue   = job[0]
				  , id      = job[1]
				  , payload = job[2];


				console.log('队列名: '+queue);
				console.log('消息内容: '+payload);

				client.ackjob(id, function(err) {
					if (err) return console.error(err);
					console.log('任务：' + id+' 执行完毕。');
					callback();
				});
			});
		});
	}
}






