function solution(input){
    let obj = {}
    for (let line of input) {
        let key = line.split(' -> ')[0];
        let value = line.split(' -> ')[1];
        if(isNaN(Number(value))){
            obj[key]=value;
        }
        else{
            obj[key]=Number(value);
        }

    }
    console.log(JSON.stringify(obj));
}

solution([
    'name -> Angel',
    'surname -> Ge',
    'age -> 20',
    'grade -> 6.',
    'date -> 23/',
    'town -> Sof',
]);