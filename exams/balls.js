function balls(input) {
    let index = 0;
    let countOfBalls = Number(input[index]);
    index++;
    let totalPoints = 0;

    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let otherCounter = 0;
    let blackCounter = 0;

    for (let i = 0; i < countOfBalls; i++) {
        let paintOfBall = input[index];
        index++;
        switch (paintOfBall) {
            case "red":
                totalPoints += 5;
                redCounter++;
                break;
            case "orange":
                totalPoints += 10;
                orangeCounter++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowCounter++;
                break;
            case "white":
                totalPoints += 20;
                whiteCounter++;
                break;
            case "black":
                totalPoints /= 2;
                blackCounter++;
                break;
            default:
                otherCounter++;
                break;
        }
    }
    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherCounter}`);
    console.log(`Divides from black balls: ${blackCounter}`);


}
balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"])
