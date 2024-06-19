
const dom = new domHandler();
const slider = new Slider(dom);
slider.slideshow();
// const api = new CurrencyApiHandler();
// api.getCurrencies();
// // const currency = new Currency();
// // const apoo = new Currency();
// // console.log(apoo.usd)
// const test1 = new Currency();
// test1.showit;
// async function main() {
//     const apiHandler = new CurrencyApiHandler();
//     const currencies = await apiHandler.getCurrencies();

//     if (currencies) {
//         console.log(`1 EUR = ${currencies.usd} USD`);
//         console.log(`1 EUR = ${currencies.gbp} GBP`);

//         // Por ejemplo, para convertir 10 EUR a USD:
//         const amountInEur = 10;
//         const amountInUsd = amountInEur * currencies.usd;
//         console.log(`${amountInEur} EUR = ${amountInUsd} USD`);

//         // Para convertir 10 USD a EUR:
//         const amountInUsdToConvert = 10;
//         const amountInEurConverted = amountInUsdToConvert / currencies.usd;
//         console.log(`${amountInUsdToConvert} USD = ${amountInEurConverted} EUR`);
//     }
// }

// main();