//document.addEventListener('DOMContentLoaded', display);
//querySelectorAll("button").addEventListener("click", display);
//document.addEventListener("click");


                            // PRODUCT CODE //
function display(char) {
    var result = document.getElementById("resultBar");
    var equation = [];
    var last_element = equation[equation.length - 1]
    try {
        if (char === "c") {
            equation = [];
            result.value = equation;
        } else if (char !== "=") {
            equation.push(char);
            result.value += equation;
            alert(equation)
        } else {
            var checkNumber = isFinite(eval(result.value));
            if (checkNumber === true) {
                result.value = eval(result.value);
            } else {
                result.value = (result.value + " = Invalid result");
            }
        }
    }
    catch(err) {
        result.value = "error"
    }
}
