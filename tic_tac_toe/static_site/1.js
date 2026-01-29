function calculateSum(a, b) {
    // Use provided arguments when called programmatically.
    // If running in a browser and no args were passed, fall back to prompt.
    if (typeof a === 'undefined' || typeof b === 'undefined') {
        if (typeof prompt !== 'undefined') {
            a = prompt("Ingresa el primer número:");
            b = prompt("Ingresa el segundo número:");
        } else {
            throw new Error('calculateSum requiere dos argumentos numéricos');
        }
    }
    return parseFloat(a) + parseFloat(b);
}

function calculateResta(c, d) {
    return c - d;
}

console.log(calculateSum(1,50));
console.log(calculateResta(45, 5));

// Función que analiza un listado de valores y devuelve el mayor
function findMaxValue(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null; // Devuelve null para arreglos vacíos o no válidos
    }
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log(findMaxValue([3, 5, 7, 2, 8])); // Output: 8
console.log(findMaxValue([])); // Output: null