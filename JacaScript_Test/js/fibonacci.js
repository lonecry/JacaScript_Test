/**
 * Created by lonecry on 2016.3.7.
 */



/*
//worker.js
onmessage =function (evt){
    var d = evt.data;//通过evt.data获得发送来的数据
    postMessage( d );//将获取到的数据发送会主线程
};*/
var fibonacci =function(n) {
    return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
};
onmessage =function(event) {
    var n = parseInt(event.data, 10);
    postMessage(fibonacci(n));
};
