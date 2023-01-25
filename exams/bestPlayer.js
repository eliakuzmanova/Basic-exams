function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;
    let mostgoals = 0;
    let best = "";

    while (command !== "END") {
        let goals = Number(input[index]);
        index++;

        if (goals > mostgoals) {
            mostgoals = goals;
            best = command;
        } 
        if (goals >= 10) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`${best} is the best player!`);
    if (mostgoals >= 3) {
        console.log(`He has scored ${mostgoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostgoals} goals.`);
    }
}
bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])


