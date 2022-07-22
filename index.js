
let convertButton = document.getElementById('enterValue');
let convertFrom = document.querySelectorAll('input[name="systems1"]');
let convertTo = document.querySelectorAll('input[name="systems2"]');
let convertValue = document.getElementById('preconverttemp')
let result = document.getElementById('convertedValue');
//(°C × 9/5) + 32 = °F formula
let convertToValue;
let convertFromValue;

console.log("By Elliott Dury 2022")



convertButton.onclick = function(){
    
    for(let radiobutton2 of convertTo) {
        if (radiobutton2.checked) {
            console.log(radiobutton2.value)
            convertToValue = radiobutton2.value;
        }
    }
    
    for(let radiobutton1 of convertFrom) {
        if (radiobutton1.checked) {
            console.log(radiobutton1.value)
            convertFromValue = radiobutton1.value;
            
        }
    }
    
       if (convertToValue == "celsius" && convertFromValue == "fahrenheit") {
        result.innerHTML = (Number(convertValue.value - 32)*5/9).toLocaleString("en-US", {style: "unit", unit: "celsius"});
       }
       else if (convertToValue == "celsius" && convertFromValue == "celsius") {
        result.innerHTML = Number(convertValue.value).toLocaleString("en-US", {style: "unit", unit: "celsius"});
       }
       else if (convertToValue == "fahrenheit" && convertFromValue == "celsius") {
        result.innerHTML = (Number(convertValue.value * 9/5)+32).toLocaleString("en-US", {style: "unit", unit: "fahrenheit"});
       }
       else if (convertToValue == "fahrenheit" && convertFromValue == "fahrenheit") {
        result.innerHTML = Number(convertValue.value).toLocaleString("en-US", {style: "unit", unit: "fahrenheit"});
       }

}

