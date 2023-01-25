function gradpaStavri(input) {

    let days = Number(input[0]);

    let index = 1;
    
    let allLiters = 0;
    let allGradusi = 0;

    for (let i = 0; i < days; i++) {
        let litersRakiq = Number(input[index]);
    index++;
    let gradusi = Number(input[index]);
    index++;
    allLiters += litersRakiq;
    allGradusi += litersRakiq * gradusi;
    }
    let avgGradusi = allGradusi / allLiters;

    console.log(`Liter: ${allLiters.toFixed(2)}`);
    console.log(`Degrees: ${avgGradusi.toFixed(2)}`);
    if (avgGradusi < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgGradusi >= 38 && avgGradusi <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }

}
gradpaStavri(["2",
"200",
"43",
"200",
"40"])