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

let inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById("User_input");
let selectorElement: HTMLSelectElement = <HTMLSelectElement> document.getElementById("selector");
let buttonElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
buttonElement.addEventListener("click",changeword);

function changeword():void{
    let seletcor: string = selectorElement.value;
    let input: string = inputElement.value;

    let paragraphElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("output");

    if(seletcor == "uppercase"){
        let result = input.toUpperCase();
        paragraphElement.innerHTML = "Now its UPPERCASE: " + result;
    }

    else{
        let result = input.toLowerCase();
        paragraphElement.innerHTML = "Now its lowercase: " + result;
    }
}