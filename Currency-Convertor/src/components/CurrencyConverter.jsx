import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => setCurrencies(Object.keys(data.rates)));
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[toCurrency];
          setConvertedAmount((amount * rate).toFixed(2));
        });
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="container-bg">
      <div className="bg-glass w-96 text-center">
        <h1 className="text-3xl font-bold text-white mb-6">💱 Currency Converter</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            placeholder="Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="input-field"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="input-field"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          <p className="converted-amount">
            {convertedAmount ? `💰 ${convertedAmount} ${toCurrency}` : "Calculating..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
