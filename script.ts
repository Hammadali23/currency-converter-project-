var rates: { [key: string]: number } = {
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
  
  function convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number {
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    return (amount / fromRate) * toRate;
  }
  
  // DOM Elements
  var amountInput = document.getElementById("amount") as HTMLInputElement;
  var fromCurrencySelect = document.getElementById("fromCurrency") as HTMLSelectElement;
  var toCurrencySelect = document.getElementById("toCurrency") as HTMLSelectElement;
  var resultDiv = document.getElementById("result") as HTMLDivElement;
  var convertButton = document.getElementById("convert") as HTMLButtonElement;
  
  // Event Listener
  convertButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
  
    if (!amount || isNaN(amount)) {
      resultDiv.textContent = "Please enter a valid amount";
      return;
    }
  
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    resultDiv.textContent = `Result: ${convertedAmount.toFixed(2)} ${toCurrency}`;
  });
  