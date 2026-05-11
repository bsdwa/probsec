//Conagua
function multiplicar() {

    let metros = parseFloat(document.getElementById("metros").value);
    let tarifa = parseFloat(document.getElementById("tarifa").value);

    const result = metros * tarifa;

    document.getElementById("pago").textContent = "Monto a pagar:" + result;
}

//Pago energia
function multiplicacionCLS() {

    let kw = parseFloat(document.getElementById("kw").value);
    let tarifa = parseFloat(document.getElementById("tarifa").value);

    const monto = kw * tarifa;

    document.getElementById("monto").textContent = "Monto a pagar: $" + monto;

}

// Articulo con descuento e IVA
function Articulo() {

    let precio = parseFloat(document.getElementById("precio").value);

    let pDescuento = precio * 0.8;
    let pFinal = pDescuento * 1.15;

    document.getElementById("descuento").textContent = "Precio con descuento: $" + pDescuento;
    document.getElementById("final").textContent = "Precio final con IVA: $" + pFinal;
}


// Ahorro anual
function Ahorro() {
    let sueldo = document.getElementById("sueldo").value;
    sueldo = parseFloat(sueldo);

    let ahorroSemanal = sueldo * 0.15;

    let ahorroAnual = ahorroSemanal * 48;

    document.getElementById("ahorroSemanal").textContent = "Ahorro semanal: $" + ahorroSemanal;
    document.getElementById("ahorroAnual").textContent = "Ahorro anual: $" + ahorroAnual;
}

// Cheque
function Cheque() {
    let dias = Number(document.getElementById("dias").value);
    let hotel = Number(document.getElementById("hotel").value);
    let comida = Number(document.getElementById("comida").value);

    
    let totalHotel = dias * hotel;
    let totalComida = dias * comida;
    let totalOtros = dias * 100;
    let montoFinal = totalHotel + totalComida + totalOtros;

    document.getElementById("hotelTotal").innerHTML = "Total hotel: $" + totalHotel;
    document.getElementById("comidaTotal").innerHTML = "Total comida: $" + totalComida;
    document.getElementById("otrosTotal").innerHTML = "Otros gastos: $" + totalOtros;
    document.getElementById("montoFinal").innerHTML = "Monto final del cheque: $" + montoFinal;
}

// Potencia eléctrica
function Potencia() {
    let R = Number(document.getElementById("resistencia").value);
    let I = Number(document.getElementById("corriente").value);

   
    let V = R * I;

    let P = V * I;

    // Mostrar resultados
    document.getElementById("voltaje").innerHTML = "Voltaje (V): " + V + " volts";
    document.getElementById("potencia").innerHTML = "Potencia (P): " + P + " watts";
}

// area de un cuadrado
function Cuadrado() {
    let lado = Number(document.getElementById("lado").value);

    
    let area = lado * lado;

    
    document.getElementById("resultado").innerHTML = "Área del cuadrado: " + area + " u²";
}

// Promedio 
function Promedio() {
    let ex1 = Number(document.getElementById("ex1").value);
    let ex2 = Number(document.getElementById("ex2").value);
    let ex3 = Number(document.getElementById("ex3").value);

 
    let promedio = (ex1 * 0.25) + (ex2 * 0.25) + (ex3 * 0.50);


    document.getElementById("resultado").innerHTML = "Promedio final: " + promedio;
}

// Tiempo vivido
function Tiempo() {
    let edad = Number(document.getElementById("edad").value);

    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;

   
    document.getElementById("meses").innerHTML = "Meses vividos: " + meses;
    document.getElementById("semanas").innerHTML = "Semanas vividas: " + semanas;
    document.getElementById("dias").innerHTML = "Días vividos: " + dias;
    document.getElementById("horas").innerHTML = "Horas vividas: " + horas;
}

// Costo de llamada
function Llamada() {
    let minutos = Number(document.getElementById("minutos").value);
    let costoPorMinuto = Number(document.getElementById("costo").value);


    let costoTotal = minutos * costoPorMinuto;

    document.getElementById("resultado").innerHTML = "Costo total de la llamada: $" + costoTotal;
}

// Cobro Hotel Cama Arena
function Hotel() {
    let dias = Number(document.getElementById("dias").value);
    let costoPorDia = Number(document.getElementById("costo").value);


    let total = dias * costoPorDia;


    document.getElementById("resultado").innerHTML = "Monto total a pagar: $" + total;
}


