var person = ["Andy", 25];
var personTwo = ["Jen", 29];

function people(name, age) {
    console.log("Hi " + name + " you are " + age)
};

people(...person);
people(...personTwo);

//second challenge

var names = ["Mike", "Ben"];
var final = ["Andrew", ...names];

final.forEach(function(obj) {
    console.log("Hi " + obj);
});
