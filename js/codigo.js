function converter(){
    let celsius = parseFloat(document.getElementById("celsius").value);    
    let op = document.getElementById("operador").value;
    let text = "" ;

    switch(op){
        case "f":
            let fahrenheit = (celsius * 9/5) + 32;
            text = `${celsius}°C é igual a ${fahrenheit}°F`;
            break;
        case "k":
            let kelvin = celsius + 273.15;
            text = `${celsius}°C é igual a ${kelvin}K`;
            break;
            
    }
    document.getElementById("resp").innerHTML = text;
    console.log(text);
        
}