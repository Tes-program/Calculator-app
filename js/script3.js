
const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector(".button");

if(getButton) {
getButton.addEventListener("click" , e => {
    e.preventDefault();
    getExchangeRate();
});
}


function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal == " " || amountVal == "0") {
        amount.value = "1";
        amountVal = "1";
    }
    let url =  `https://v6.exchangerate-api.com/v6/dd13c501c9c8f978e7209edc/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        const exchangeRateTxt = document.querySelector(".exchange-rate");
        exchangeRateTxt.innerHTML = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;


        })
    }

