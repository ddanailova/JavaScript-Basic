function solve(nums) {
    console.log(nums
        .map(Number)
        .sort((a, b) => a - b)
        .slice(-3)
        .reverse()
        .join("\n"));
}

solve(['10', '30', '15', '20', '50', '5'])