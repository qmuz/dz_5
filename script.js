// const originalArray = Array.from({length: 50}, () => Math.floor(Math.random() * 100) - 50);

// const filteredArray = originalArray.filter(num => num >= -5 && num <= 5);
// const count = filteredArray.length;

// console.log("Початковий масив:", originalArray);
// console.log("Відфільтрований масив (-5 до 5):", filteredArray);
// console.log("Кількість елементів:", count);

// ----------------------------------------------

// const array = Array.from({length: 30}, () => Math.floor(Math.random() * 100) - 50);

// const negativeSum = array.reduce((sum, num) => num < 0 ? sum + num : sum, 0);

// const minPositive = Math.min(...array.filter(num => num > 0));

// let finalSum = negativeSum;
// if (negativeSum < -100) {
//     finalSum += minPositive;
// }

// console.log("Масив:", array);
// console.log("Сума від'ємних:", negativeSum);
// console.log("Мінімальний додатній:", minPositive);
// console.log("Фінальна сума:", finalSum);

// ----------------------------------------------

// const array = [10, 15, 20, 25, 30]; 

// const differences = [];
// for (let i = 0; i < array.length - 1; i++) {
//     differences.push(array[i + 1] - array[i]);
// }

// console.log("Початковий масив:", array);
// console.log("Масив різниць:", differences);

// ----------------------------------------------

// function replaceWords(wordsArray, oldWord, newWord) {
//     let replacementCount = 0;
//     const newArray = wordsArray.map(word => {
//         if (word === oldWord) {
//             replacementCount++;
//             return newWord;
//         }
//         return word;
//     });
    
//     return {
//         newArray: newArray,
//         count: replacementCount
//     };
// }

// const words = ["яблуко", "груша", "слива", "яблуко", "вишня"];
// const result = replaceWords(words, "яблуко", "апельсин");

// console.log("Початковий масив:", words);
// console.log("Новий масив:", result.newArray);
// console.log("Кількість замін:", result.count);

// ----------------------------------------------

// function unionArrays(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
// }

// function intersectionArrays(arr1, arr2) {
//     return [...new Set(arr1.filter(item => arr2.includes(item)))];
// }

// function differenceArrays(arr1, arr2) {
//     return [...new Set(arr1.filter(item => !arr2.includes(item)))];
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log("Об'єднання:", unionArrays(array1, array2));
// console.log("Перетин:", intersectionArrays(array1, array2));
// console.log("Різниця (arr1 - arr2):", differenceArrays(array1, array2));

// ----------------------------------------------

const randomArray = Array.from({length: 20}, () => Math.floor(Math.random() * 201) - 100);

const evenNumbers = randomArray.filter(num => num % 2 === 0).sort((a, b) => a - b);
const oddNumbers = randomArray.filter(num => num % 2 !== 0).sort((a, b) => a - b);

console.log("Початковий масив:", randomArray);
console.log("Парні числа (відсортовані):", evenNumbers);
console.log("Непарні числа (відсортовані):", oddNumbers);