var rates = {
    USD: 1,
    EUR: 0.85,
    PKR: 276.50,
    INR: 74.85,
    AUD: 1.3,
    CAD: 1.25,
    JPY: 110,
    CNY: 6.5,
    SAR: 3.75,
    GBP: 0.75,
    MYR: 4.16,
    EGP: 15.7,
    ZAR: 15.2,
    AED: 3.67,
};
function convertCurrency(amount, fromCurrency, toCurrency) {
    var fromRate = rates[fromCurrency];
    var toRate = rates[toCurrency];
    return (amount / fromRate) * toRate;
}
// DOM Elements
var amountInput = document.getElementById("amount");
var fromCurrencySelect = document.getElementById("fromCurrency");
var toCurrencySelect = document.getElementById("toCurrency");
var resultDiv = document.getElementById("result");
var convertButton = document.getElementById("convert");
// Event Listener
convertButton.addEventListener("click", function () {
    var amount = parseFloat(amountInput.value);
    var fromCurrency = fromCurrencySelect.value;
    var toCurrency = toCurrencySelect.value;
    if (!amount || isNaN(amount)) {
        resultDiv.textContent = "Please enter a valid amount";
        return;
    }
    var convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    resultDiv.textContent = "Result: ".concat(convertedAmount.toFixed(2), " ").concat(toCurrency);
});
