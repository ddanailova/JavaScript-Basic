function solve(input) {
    for (let inputElement of input) {
        if (inputElement != "Stop") {
            console.log(inputElement);
        }
        else{
            return;
        }
    }
}

solve(["Line 1", "Line 2", "Line 3", "Stop"]);
