function Clock({ template }) {
    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template.replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

    setTimeout(() => clearTimeout(timer), 10000);
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

// Also add a line of code that will stop the clock after 10 ticks
setTimeout(() => clock.stop(), 10000);

// What is the inner function of the constructor function?
// => render

// What is the clock variable of the constructor function?
// => an object of clock


// What is the local variable of the constructor function?
// => timer

// What are the closures? 
// => no

// What are the private variables and functions?
// => timer, render

// What are the public methods?
// => stop and start