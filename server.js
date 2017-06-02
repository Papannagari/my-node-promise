//var Promise = require("promise")

/*function service(){
	console.log("I am callback")
}

function sample(cb){
	cb();
}

sample(service);*/

function getData(val,err){
	return new Promise(function(resolve,reject){
		if(err){
			reject(err)
		}
		resolve(val)
	})
}

getData(1,"I am the error")
.then(function(data){
	console.log(data)
})
.catch(function(){
	console.log("This is error block")
	console.log(err)
})