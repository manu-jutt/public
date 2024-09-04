const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function Calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}