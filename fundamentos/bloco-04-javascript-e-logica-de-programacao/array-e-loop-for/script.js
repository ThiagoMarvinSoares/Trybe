
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

//2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum =0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
    
// }

// console.log(sum);

//3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// console.log(sum / numbers.length);

//4
// let numbers = [5, 9, 3, 19, 70, 8, 1, 2, 1, 1];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
    
// } 
// let div = sum / numbers.length;
// console.log(div);
// if (div > 20) {
//     console.log("numero maior que 20");
// } else {
//     console.log("numero menor que 20");
// }

//5
let numbers = [5, 9, 3, 19, 70, 8, 1, 2, 1, 1];
let maior = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
}
console.log(maior);
