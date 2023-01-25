function hairSalon(input) {
    let ziel = Number(input[0]);
    let index = 1;
    let commmand = input[index];

    let sumOfMoney = 0;
    let isHave = false;

    while (commmand !== "closed") {
        commmand = input[index];
        index++;
        let what = input[index];
        index++;
        if (commmand === "haircut") {
            switch (what) {
                case "mens":
                    sumOfMoney += 15;
                break;
                case "ladies":
                    sumOfMoney += 20;
                break;
                case "kids":
                    sumOfMoney += 10;
                break;
            }

        } else if (commmand === "color") {
            switch (what) {
                case "touch up":
                    sumOfMoney += 20;
                break;
                case "full color":
                    sumOfMoney += 30;
                break;
            }
        }
        if (ziel <= sumOfMoney) {
            isHave = true;
            console.log(`You have reached your target for the day!`);
            break;
        }
    }
    let diff = Math.abs(ziel - sumOfMoney);

    if (!isHave) {
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }
    console.log(`Earned money: ${sumOfMoney}lv.`);
} 
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
