//CONSOLE
const consola = () => {
    console.log('*********************************************');
    console.log(' Valores Input ');
    console.log('---------------------------------------------');
    console.log(cantVacio);
    console.log(precioVacio);
    console.log(cantCostilla);
    console.log(precioCostilla);
    console.log(cantEntrana);
    console.log(precioEntrana);
    console.log('*********************************************');
    console.log(' Valores CheckNaN ');
    console.log('---------------------------------------------');
    console.log(asado);
    console.log('---------------------------------------------');
    console.log(`Cantidad Vacío: ${asado[0].peso}`);
    console.log(`Cantidad Costilla: ${asado[1].peso}`);
    console.log(`Cantidad Entraña: ${asado[2].peso}`);
    console.log(`Sumar Carbón: ${checkCarbon}`);
    console.log(`Tengo Descuento: ${checkBeneficios}`);
    console.log('---------------------------------------------');
    console.log(`Precio del Vacío: ${asado[0].preciokilo}`);
    console.log(`Precio del Costilla: ${asado[1].preciokilo}`);
    console.log(`Precio de la Entraña: ${asado[2].preciokilo}`);
    console.log(`Precio del Carbón: ${asado[3].preciokilo}`);
    console.log('---------------------------------------------');
    console.log(`Precio Final del Vacío: ${asado[0].preciototal}`);
    console.log(`Precio Final del Costilla: ${asado[1].preciototal}`);
    console.log(`Precio Final de la Entraña: ${asado[2].preciototal}`);
    console.log(`Precio Final del Carbón: ${asado[3].preciototal}`);
    console.log('---------------------------------------------');
    console.log(`Suma de la carne y carbón: ${totalPrecioAsado}`);
    console.log('---------------------------------------------');
    console.log(`Descuento: ${descuento}`);
    console.log('---------------------------------------------');
    console.log(`Total: ${total}`);
    console.log('*********************************************');
    console.log(leyendaBeneficios);
    console.log(`Leyenda: ${conclusion.innerHTML}`)
    console.log('---------------------------------------------');
    console.log(asadoOK);
}