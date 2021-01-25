document.querySelector('.get-rate').addEventListener('click', getRate);

async function getRate() {
    const currencyFrom = document.querySelector('.currency-from').value;
    const responce = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
    const currencyData = await responce.json();
    const currencyTo = document.querySelector('.currency-to').value;
    const rate = (1 / currencyData.rates[currencyTo]).toFixed(2);
    document.querySelector('.rate').value = rate;
}
