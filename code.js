// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof(input) === "string" && input !== "") {
        return "Hello, " + input + "!"
    } else {
        return "Hello, World!"
    }
}