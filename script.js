let numero = parseInt(prompt("¿De cuantos productos desea calcular la ganancia?"))
let i = 0;

// Ciclo de calculo de ganancia
while ( i < 5) {
    i++;
    let productoNombre = prompt("Ingresa nombre de producto");
    let precioCosto = parseFloat(prompt("Ingresa precio de costo"));
    let precioVenta = parseFloat(prompt("Ingresa precio de venta"));
    let gananciaProducto = precioVenta - precioCosto;
    document.write(productoNombre + " genera una ganancia de $" + gananciaProducto + "<br>")
    if (i == numero) {
        break;
    }
}