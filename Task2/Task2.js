class Currency {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
   
const currencies = [
    new Currency("BYN", 1),
    new Currency("USD", 2.3636),
    new Currency("EUR", 2.6394),
    new Currency("RUR", 0.03169)
];

const sumInput = document.getElementById("sum");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultSpan = document.getElementById("result");
   
currencies.forEach(function(currency) {
    let option = document.createElement("option");
    option.text = currency.name;
    fromSelect.add(option);
    option = option.cloneNode();
    option.text = currency.name;
    toSelect.add(option);
});
   
sumInput.oninput = fromSelect.oninput = toSelect.oninput = function(event){
    let firstCurrency = currencies[fromSelect.options.selectedIndex];
    let secondCurrency = currencies[toSelect.options.selectedIndex];
    let sum = Number(sumInput.value);

    if(!sumInput.value.length || isNaN(sum)) {
        return;
    }
    
    var result = firstCurrency.value / secondCurrency.value * sum;
    resultSpan.innerHTML = `${sum} ${fromSelect.value} = ${Math.round(result * 1000) / 1000} ${toSelect.value}`;
}