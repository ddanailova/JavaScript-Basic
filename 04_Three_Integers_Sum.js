function integers(input) {
    let arr = input[0].split(' ').map(Number);

    console.log(check(arr[0], arr[1], arr[2]) ||
        check(arr[1], arr[2], arr[0]) ||
        check(arr[0], arr[2], arr[1]) || "No");

    function check(num1, num2, sum){
        if (num1 + num2 != sum) {
            return false;
        }
        else{
            if (num1 > num2) {
                [num1, num2] = [num2, num1];
            }
            return `${num1} + ${num2} = ${sum}`;
        }
    }
}

integers(["-5 -3 -2"])