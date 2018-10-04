function solution(input) {
    let lenght = Number(input[0]);
    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr[i] = 0;
    }
    for (let i = 1; i < input.length; i++) {
        let valuePair = input[i].split(' - ');
        let index = valuePair[0];
        let value = valuePair[1];
        arr[index] = value;
    }
    console.log(arr.join("\n"));
}

solution(['5', '0 - 3', '3 - -1', '4 - 2']);