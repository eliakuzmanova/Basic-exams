function catDiet(input) {

    let maznini = Number(input[0]);
    let protein = Number(input[1]);
    let vuglehidrati = Number(input[2]);
    let kalorii = Number(input[3]);
    let voda = Number(input[4]);

    let broiMaznini = (kalorii * (maznini / 100))/ 9;
    let broiProtein = (kalorii * (protein / 100)) / 4;
    let broiVuglehi = (kalorii * (vuglehidrati / 100)) / 4;

    let tegloNaHrana = broiMaznini + broiProtein + broiVuglehi;
    let kaloriiNaGram = kalorii / tegloNaHrana;

    let bezVoda = kaloriiNaGram - (kaloriiNaGram * (voda / 100));
    console.log(bezVoda.toFixed(4));
}
catDiet(["20",
"60",
"20",
"1800",
"50"])
