const calcTemp = () => {
    const temp = document.getElementById('temp').value;
    // console.log(temp);
    const unit = document.getElementById('unit');
    const unitValue = unit.options[unit.selectedIndex].value;
    // console.log(unitValue);
    let result;
    if (unitValue == 'cel'){
        result = (temp/5)*9 + 32;
        result = result.toFixed(2);
        document.getElementById('resultBox').innerHTML='<h3> '+result+' Fahrenheit </h3>';
    } else {
        result = (temp - 32) *5/9;
        result = result.toFixed(2);
        document.getElementById('resultBox').innerHTML='<h3>' +result+' Celcius </h3>';
    }
}