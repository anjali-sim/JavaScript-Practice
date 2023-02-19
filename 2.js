var b = function() {
    console.log("b called");
}

function a(){
    let z = 2;
    function b(){
        console.log(z);
    }
}
