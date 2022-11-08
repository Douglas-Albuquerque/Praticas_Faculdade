let family = [
  {
    name: "Douglas",
    age: 31
  },
  {
    name: "Letycia",
    age: 24
  },
  {
    name: "Leia",
    age: 6
  },
  {
    name: "Brie",
    age: 1
  },
]

const ehAdulto = valor => valor.age >= 18
let temAdulto = family.some(ehAdulto)
console.log(temAdulto);