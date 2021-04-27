/**
 * prints to the console every 1000 micro second (1 sec)
 * @param {*} from - starting number
 * @param {*} to - ending number
 */
function printNumbers(from , to){
    for(let i=from; i<=to; i++){
        setTimeout((x)=> console.log(x), (i+1)*1000, i);
    }
}