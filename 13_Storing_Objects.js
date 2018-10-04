function solution(input) {
    let data = {};
    for (var line of input) {
        data.name = line.split(' -> ')[0];
        data.age = line.split(' -> ')[1];
        data.grade = line.split(' -> ')[2];

        console.log(`Name: ${data.name}\nAge: ${data.age}\nGrade: ${data.grade}`)
    }
}

solution([
'Pesho -> 13 -> 6.00',
'Ivan -> 12 -> 5.57',
'Toni -> 13 -> 4.90',
]);