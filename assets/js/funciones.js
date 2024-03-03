let precio = 400000;
let cantidad = 0;

var precioSpan = document.querySelector(".precio-inicial");
var cantidadSpan = document.querySelector(".cantidad");
var valorTotalSpan = document.querySelector(".valor-total");
var colorCard = document.querySelector(".color");
var colorSpan = document.querySelector(".color-producto");
var botonIncrementar = document.querySelector(".incrementar");
var botonDecrementar = document.querySelector(".decrementar");


precioSpan.innerHTML = precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 2, maximumFractionDigits: 2 });


function cambiarColor() {
    const colorInput = prompt("Ingrese el color en inglés o en formato hexadecimal (por ejemplo, 'red' o '#ff0000'):"); 
    colorCard.style.backgroundColor = colorInput;
    colorSpan.innerHTML = colorInput;
}


function actualizarTotal() {
    total = parseInt(precio) * parseInt(cantidad);
    totalFormateado = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    valorTotalSpan.innerHTML = totalFormateado;
}


function incrementarCantidad() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

function decrementarCantidad() {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
}

