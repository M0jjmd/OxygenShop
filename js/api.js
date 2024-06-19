class CurrencyApiHandler {

    constructor() {
        this.url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
    }

    async getCurrencies() {
        try {
            const respuesta = await fetch(this.url);
            if (respuesta.ok) {
                const jsonData = await respuesta.json();

                const currencies = new Currency(
                    jsonData.eur.eur,
                    jsonData.eur.usd,
                    jsonData.eur.gbp
                );
                return currencies;
            } else {
                throw new Error('la respuesta no fue correcta');
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
}