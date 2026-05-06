export function subtract(a, b) {
    // ERROR INTENCIONAL: simula un bug de precisión flotante
    return a - b ;
}

export function calcularPrecio(precio) {
if (precio >= 1000) {
// Corrección: se agrega el signo '='
return precio * 0.9;
}
return precio; }