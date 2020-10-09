/* interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user); */
var inputElement = document.getElementById("User_input");
var selectorElement = document.getElementById("selector");
var buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", changeword);
function changeword() {
    var seletcor = selectorElement.value;
    var input = inputElement.value;
    var paragraphElement = document.getElementById("output");
    if (seletcor == "uppercase") {
        var result = input.toUpperCase();
        paragraphElement.innerHTML = "Now its UPPERCASE: " + result;
    }
    else {
        var result = input.toLowerCase();
        paragraphElement.innerHTML = "Now its lowercase: " + result;
    }
}
