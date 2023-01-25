function multiplyTable(input) {
    let num = input[0];
    let first = Number(num[0]);
    let second = Number(num[1]);
    let third = Number(num[2]);

    for (let t = 1; t <= third; t++) {
        let res = 0;
        for (let s = 1; s <= second; s++) {
            for (let f = 1; f <= first; f++) {
                res = t * s * f;
                console.log(`${t} * ${s} * ${f} = ${res};`);
            }
        }
    }

}
multiplyTable(["324"]);