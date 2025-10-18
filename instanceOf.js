
// Understanding prototype Chaining and 
// instanceof operator
let a = {
    name: "Aditya karmakar",
    age: 23,
    language: "javaScript",
    profession: "Web Developer",
}

let properties = {
    run: () =>{
        console.info("Running");
    }
}

a.__proto__ = properties; //defining prototype
a.run(); //calling method from prototype

console.log( a instanceof Object);