function solution(input) {
    let elements = new Map();
    for (let i = 0; i < input.length - 1; i++) {
        let key = input[i].split(' ')[0];
        let value = input[i].split(' ')[1];
        if (!elements.has(key)) {
            elements.set(key, value);
        }
        else {
            elements[key] = value;
        }
    }
    let targetKey = input[input.length - 1];
    if (elements.has(targetKey)) {
        console.log(elements[targetKey]);
    }
    else {
        console.log("None");
    }
}

solution([
    'key value',
    'key eulav',
    'test tset',
    'key',
])