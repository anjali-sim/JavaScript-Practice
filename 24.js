// Debouncing

let counter = 0;
const getData = () => {
    //calls an API and gets data
    console.log("Fetching Data...", counter++);
}

const doSomeMagic = function(fn, d) { //this takes 2 parameters like the function(getData) and delay
    return function() {
        let context = this,
        args = arguments;

        let timer = setTimeout(() => {
            fn.apply(context, args)
        }, d);
    }
}

const betterFunction = doSomeMagic(getData, 300);

const debounce = function(fn, d) { //this takes 2 parameters like the function(getData) and delay
    return function() {
        let context = this,
        args = arguments;

        let timer = setTimeout(() => {
            fn.apply(context, args)
        }, d);
    }
}

const betterFunction1 = debounce(getData, 300);