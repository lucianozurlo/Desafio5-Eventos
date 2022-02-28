//Chequeo si algún valor (peso x kilo o precio) no es un número. Si es así, lo convierte en 0
const checkIsNAN = () => {
    const mensaje = () => {
        document.querySelector('#mensaje').innerHTML = 'Hay valores vacíos o no son números. Lo tomo como un 0.';
    };
    for (const item of asado) {
        if (isNaN(item.peso)) {
            mensaje();
            console.log(`query: ${mensaje}`);
            console.log('No ingresaste un número. Lo tomo como un 0');
            item.peso = parseFloat(0);
            item.preciototal = parseFloat(0);
        }
        else {
            console.log('es un numero')
        }
    }
    for (const item of asado) {
        if (isNaN(item.preciokilo)) {
            mensaje();
            console.log(`query: ${mensaje}`);
            console.log('No ingresaste un número. Lo tomo como un 0');
            item.preciokilo = parseFloat(0);
            item.preciototal = parseFloat(0);
        }
        else {
            console.log('es un numero')
        }
    }
}

//Construcción objeto CorteAsado
//Declaramos el array asado

asado = [];

function CorteAsado(nombre, peso, preciokilo) {
    this.nombre = nombre;
    this.peso = peso;
    this.preciokilo = preciokilo;
    this.preciototal = this.peso * this.preciokilo;
}

const calcularForm = () => {
    cantVacio = parseFloat(document.querySelector('#cantVacio').value);
    cantCostilla = parseFloat(document.querySelector('#cantCostilla').value);
    cantEntrana = parseFloat(document.querySelector('#cantEntrana').value);

    precioVacio = parseFloat(document.querySelector('#precioVacio').value);
    precioCostilla = parseFloat(document.querySelector('#precioCostilla').value);
    precioEntrana = parseFloat(document.querySelector('#precioEntrana').value);

    checkCarbon = document.querySelector('#checkCarbon').checked;
    checkBeneficios = document.querySelector('#checkBeneficios').checked;

    //Creamos los array por corte de carne y carbon
    asado.push(new CorteAsado("Vacío", cantVacio, precioVacio));
    asado.push(new CorteAsado("Costilla", cantCostilla, precioCostilla));
    asado.push(new CorteAsado("Entraña", cantEntrana, precioEntrana));
    asado.push(new CorteAsado("Carbón", 4, 20));

    checkIsNAN();

    //Función para sumar el array para el carbón si necesito
    if (checkCarbon == false) {
        asado[3].peso = parseFloat(0);
        asado[3].preciototal = parseFloat(0);
    };

}