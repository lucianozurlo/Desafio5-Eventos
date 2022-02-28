//Función que muestra resultado
const lista = () => {

    calcularForm();

    //Declaro precios finales del asado
    precioVacioFinal = asado[0].preciototal;
    precioCostillaFinal = asado[1].preciototal;
    precioEntranaFinal = asado[2].preciototal;
    precioCarbonFinal = asado[3].preciototal;
    totalPrecioAsado = asado.reduce((sumas, item) => sumas + item.preciototal, 0);
    console.log(`Mostrar totales: ${totalPrecioAsado}`)

    //Creo un nuevo filtrando los array que no tienen un valor 0
    asadoOK = asado.filter((item) => item.peso !== 0);


    if (totalPrecioAsado !== 0) {

        //Si tengo la tarjeta de beneficios, descuento un 20% al total
        if (checkBeneficios == true) {
            descuento = Math.round(totalPrecioAsado * 100 * 0.2) / 100;;
            leyendaBeneficios = `¡Con tu tarjeta de beneficios te ahorraste \$${descuento}!`;
        } else {
            descuento = 0;
            leyendaBeneficios = `No tenés la tarjeta de beneficios`;
        };

        //Defino la constante total con el resultado final
        total = parseFloat(totalPrecioAsado) - descuento;

        listado = document.querySelector("#listado");
        listado.innerHTML = "<h3>Esto es lo que vas a necesitar comprar:</h3>";

        for (const corte of asadoOK) {
            listadoItems = document.createElement("li");
            listadoItems.innerHTML = `<strong> ${corte.nombre}:</strong> ${corte.peso}kg <em>(a $${corte.preciokilo} el kilo, son $${corte.preciototal})</em>`;
            listado.appendChild(listadoItems);
            console.log(`Listado final HTML: ${listadoItems.innerHTML}`)
        }

        listado.innerHTML += leyendaBeneficios;

        let conclusion = document.querySelector("#conclusion");
        conclusion.innerText = `Vas a necesitar llevar \$${total}`;
        console.log(`Vas a necesitar llevar $${total}`)

    } else {
        conclusion = document.querySelector("#conclusion");
        conclusion.innerHTML = '¡No necesitás comprar nada!'; //Si no necesitás comprar nada no te muestra la opción de pagar con tarjeta de beneficios
        console.log('¡No necesitás comprar nada!')
    }

    consola();
}
