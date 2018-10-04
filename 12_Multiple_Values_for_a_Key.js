function solution(input) {
    let elements = new Map();
    for (let i = 0; i < input.length - 1; i++) {
        let key = input[i].split(' ')[0];
        let value = input[i].split(' ')[1];
        if (elements[key] === undefined) {
            elements[key] = [];
            elements[key].push(value);
        }
        else{
            elements[key].push(value);
        }
    }
    let targetKey = input[input.length - 1];
    if (elements[targetKey] === undefined) {
        console.log("None");
    }
    else {
        console.log(elements[targetKey].join("\n"));
    }
}

solution([
    'key value',
    'key eulav',
    'test tset',
    'key',
])