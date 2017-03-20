/*
 * Created by Sun Wen on 2017.3.7.
 */
self.onmessage = function(e){
    var itemslength = e.data;
    console.log(itemslength);
    var position = [];
    for(var i = 0 ; i < itemslength ; i++){
        var length = position.length;
        if(length == 0){
            x = 900*Math.random();
            y = 400*Math.random();
            x = 400;
            y = 400;
            var relxy = [x,y];
            position.push(relxy);
        }else{
            var flag = true;
            x = 900*Math.random();
            y = 400*Math.random();
            do{
                console.log('RUNNING!!');
                x = x + 50;
                y = y + 50;
                var relxy = [x,y];
                for(var j = 0 ; j < length ; j++){
                    var x1 = position[j][0];
                    var y1 = position[j][1];
                    var z = (x - x1)*(x - x1) + (y - y1)*(y - y1);
                    if(z > 10000){
                        flag = flag && true;
                    }else{
                        flag = flag && false;
                    }
                }
            }while(!flag);
            position.push(relxy);
        }
    }
    console.log('FINSHED!!');
    postMessage(position);
};