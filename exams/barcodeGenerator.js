function barcodeGenerator(input) {
    let start = input[0];
    let end = input[1];
    
    let printLine = "";

    for (let n = start; n <= end; n++) {
        let num = "" + n;
        let counter = 0;
        let first = 0;
        let second = 0;
        let third = 0;
        let fourth = 0
        for (let s = 0; s <= 3; s++) {
            let sym = Number(num[s]);
            if (s === 0) {
                first += sym;
            } else if(sym === 1) {
                second += sym;
            } else if (sym === 2) {
                third += sym;
            } else if (sym === 3) {
                fourth += sym;
            }

            if (sym % 2 === 0) {
                counter++;
                break;
            } else if (fs % 2 === 0 && ft % 2 === 0 && ff % 2 === 0) {
                counter++;
                break;
            } else if (st % 2 === 0 && sf % 2 === 0 && tf % 2 === 0) {
                counter++;
                break;
            }
        }
        if (counter < 1) {
            printLine += n + " ";
        }
    }
    console.log(printLine);

}
barcodeGenerator(["3556",
"6579"])
