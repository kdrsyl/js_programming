
function greetings() {
    console.log(" Hello all");
    console.log(" I will learn JS");

}
greetings();

console.log("-------------------------------");

/**
 * Displays a person's name. Uses "Sare" if no name is provided.
 * @param {string} personName - The name to display.
 */
function displayName(personName = "Sare") {
    console.log(`The name of the person is ${personName}`);
}

displayName(); // Uses the default name: "Sare".
displayName("Kader"); // Uses the provided name: "Kader".

function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(5, 6);
console.log(result);