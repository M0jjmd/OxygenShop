class CurrencyApiHandler {

    constructor() {
        this.url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
    }

    async getCurrencies() {
        try {
            const respuesta = await fetch(this.url);
            if (respuesta.ok) {
                const jsonData = await respuesta.json();
                console.log(jsonData);

                const currencyObjList = Object.entries(jsonData).map(([currencyCode, currencyInfo]) =>
                    new Currency(
                        currencyInfo.eur,
                        currencyInfo.usd,
                        currencyInfo.gbp
                    )
                );
                console.log(currencyObjList);
                return currencyObjList;
                
            } else {
                throw new Error('la respuesta no fue correcta');
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
}
// class CurrencyApiHandler {

//     constructor() {
//         this.url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
//     }

//     async getCurrencies() {
//         const response = await fetch(this.url);
//         try {
//             fetch(this.url).then((currency) => {
//                 if (currency.ok) {
//                     currency.json().then((jsonData) => {
//                         console.log(jsonData)
//                         // if(!Array.isArray(jsonData)){
//                         //     console.log("es un array")
//                         // }
//                         console.log("Before Map");
//                         const currencyObjList = jsonData.results.map(
//                             (currencyInfo, index) =>
//                                 new Currency(
//                                     currencyInfo.eur,
//                                     currencyInfo.usd,
//                                     currencyInfo.gpd
//                                 )
//                         );
//                         return currencyObjList;
//                     });
//                 }
//             });

//         } catch (error) {
//             console.error('Error al obtener los datos:', error);
//         }
//     }
// }