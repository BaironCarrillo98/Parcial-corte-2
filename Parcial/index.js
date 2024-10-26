
function calculate(operation) {
    
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    
    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'resta':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            result = num2 !== 0 ? num1 / num2 : 'No se peude dividri por 0';
            break;
       
    }
    document.getElementById('result').value = result;
}
