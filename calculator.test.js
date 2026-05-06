import { subtract } from './calculator';


// Prueba escrita por Gamma para detectar el error
test('Gamma: subtract(5, 2) should return 3', () => {
// Jest mostrará: Expected 3, Received 3.0001
expect(subtract(5, 2)).toBe(3);});
