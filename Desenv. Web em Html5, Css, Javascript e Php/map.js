let tempCelsius = [0, 22, 35, 17, 8, 12]
const toFahrenheit = value => ((value * 9) / 5) + 32
let tempFahrenheit = tempCelsius.map(toFahrenheit)

console.log(tempCelsius);
console.log(tempFahrenheit);