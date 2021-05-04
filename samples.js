// native prototype inheritance - String substring
let str = "kidus";
String.prototype.mySubstring = function (str, end = this.length) {
    let arr = [...this];
    let len = arr.length;
    let subStr = "";
    if (end <= len) {
        for (let i = str; i < end; i++) {
            subStr +=arr[i];
        }
    }
    return subStr;
}

console.log(str.mySubstring(1));


Array.prototype.mysort = function () {
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log([7, 5, 2, 4, 3, 9].mysort());