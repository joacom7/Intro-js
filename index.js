let miTitulo = document.querySelector('h1');

miTitulo.textContent = 'Javascript';

//Variables
const dni = 99999999
let number = 4
number = '8'

console.log('Mi dni es ' + dni + ' y mi numero fav es ' + number)

const name = 'Pedro'
let name1 = 'Juan'

function changeName(){
    name1 = 'Juan2'
}

console.log(name1)
changeName()
console.log(name1)
//Arrays
const array = [1, 2, 3, 4]

console.log(array[1])


console.log(array.includes(3))

array.push(5)
console.log(array)
