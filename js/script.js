const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function backspace(){
    display.value = display.value.slice(0,-1)
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Handle Enter and = as "equal"
    if (key === "Enter" || key === "=") {
        calculate();
        return;
    }

    // Handle backspace
    if (key === "Backspace") {
        backspace();
        return;
    }

    // Handle clear (Escape key, optional)
    if (key === "Escape") {
        clearDisplay();
        return;
    }

    // If it's a valid number or operator
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    }
});
