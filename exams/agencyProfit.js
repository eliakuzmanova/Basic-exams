function agencyProfit(input) {

    let name = input[0];
    let adultTickets = Number(input[1]);
    let childrenTickets = Number(input[2]);
    let priceAdult = Number(input[3]);
    let tax = Number(input[4]);

    let priceChildren = priceAdult * 0.30;
    let allTicketsPrice = (priceAdult + tax) * adultTickets + (priceChildren + tax) * childrenTickets;
    let einkommen = allTicketsPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${einkommen.toFixed(2)} lv.`);
}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])


