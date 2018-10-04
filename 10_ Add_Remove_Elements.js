function solution(input){
    let arr=[];
    for (let command of input) {
        let action = command.split(' ')[0];
        let number = command.split(' ')[1];
        if(action === "add"){
            arr.push(number);
        }
        if(action === "remove"){
            //delete arr[Number(number)]
            arr.splice(Number(number),1);
        }
    }
    console.log(arr.join("\n"));
    //console.log(arr.filter(e=> e != null).join("\n"));
}

solution([
'add 3',
'add 5',
'remove 1',
'add 2',
    ])