export function subtract(a, b) {
    // ERROR INTENCIONAL: simula un bug de precisión flotante
    return a - b + 0.0001;
}