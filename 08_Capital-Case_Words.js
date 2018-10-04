function solve(text) {
    console.log(
        text
            .join(' ')
            .split(/\W+/)
            .filter(p => p !== "" && p.length > 0 && p === p.toUpperCase())
            .join(", ")
    );
}