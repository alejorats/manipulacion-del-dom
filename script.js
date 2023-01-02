const h1 = document.querySelector('h1');
const pResultado = document.querySelector('#result');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculo');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInput = input1.value + input2.value;
    pResultado.innerText = "Resultado es igual a: " + sumaInput;
}
 
