/**
 * Options 1:
 * 
 * prints to the console every 1000 micro second (1 sec)
 * @param {*} from - starting number
 * @param {*} to - ending number
 */
function printNumbers1(from , to){
    for(let i=from; i<=to; i++){
        setTimeout((x)=> console.log(x), (i+1)*1000, i);
    }
}

/**
 * Option 2:
 * 
 * we can also do it with setInterval and cancel the Interval 
 * after it when from == to, meaning we finished the print
 * @param {*} from - starting number
 * @param {*} to - ending number
 */
function printNumbers2(from , to){
    var id = setInterval(function(){
      if(from <= to){
          console.log(from);
          from++;
      }else{
          clearInterval(id);
      }
    }, 1000);
}