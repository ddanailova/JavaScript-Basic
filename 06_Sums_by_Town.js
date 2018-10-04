function townsSum(input) {
    let arr = input.map(e => JSON.parse(e));
    let towns = new Map();

    for (let item of arr) {
        let town = item.town;
        let income = item.income;
        if (!towns.has(town)) {
            towns.set(town, income);
        }
        else {
            towns.set(town,
                towns.get(town) + income);
        }
    }
    [...towns.entries()].sort((a,b)=> a[0].localeCompare(b[0])).forEach(e=>{
        console.log(`${e[0]} -> ${e[1]}`)
    })
}

townsSum([
        '{"town":"Sofia","income":200}',
        '{"town":"Varna","income":120}',
        '{"town":"Pleven","income":60}',
        '{"town":"Varna","income":70}',
    ]
)