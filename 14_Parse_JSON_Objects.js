function solution(input) {
    for (let line of input) {
        let obj = JSON.parse(line);
        console.log(`Name: ${obj.name}\nAge: ${obj.age}\nDate: ${obj.date}`);
       //for (var key in obj) {
       //    console.log(`${key}: ${obj[key]}`);
       //}
    }
}

solution([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}',
]);