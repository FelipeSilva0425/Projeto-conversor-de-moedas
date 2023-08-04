    const convertButton = document.querySelector(".convert-button")
    const currencytSelect = document.querySelector (".currency-select")

    function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert =document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted =document.querySelector(".currency-value")
    
    console.log(currencytSelect.value)

    const dolarToday =5.2
    const euroToday =6.2

    const convertedValue = inputCurrencyValue / dolarToday

    if(currencytSelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD"
        }).format (inputCurrencyValue / dolarToday)
    }
    if(currencytSelect.value == "euro"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency:"EUR"
    }).format (inputCurrencyValue / euroToday)   
    }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency:"BRL"
        }).format ( inputCurrencyValue)
}


    function changeCurrency(){
    console.log("trocou de Moeda")
    const currencyName =document.getElementById ("currency-name")
    const currencyImage = document.querySelector (".currency-img")
    

    if(currencytSelect.value == "dolar"){
        currencyName.innerHTML= "Dólar americano"
        currencyImage. src = "./assets/dolar.png.png"
    }

    if(currencytSelect.value == "euro"){
        currencyName.innerHTML= "Euro"
        currencyImage.src = "./asets/euro.png"
    }
    function convertValues()
}


    currencytSelect.addEventListener("change",changeCurrency)
    convertButton.addEventListener("click", convertValues)