function symetric(arg) {
    let num = Number(arg[0]);
    let result = "";
    for (let i = 1; i <= num; i++) {
        if (i + "" === [...(i.toString())].reverse().join("")) {
            result += i + " ";
        }
    }
    console.log(result.trim());
}
symetric(['100']);