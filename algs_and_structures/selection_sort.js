/* 
    Алгоритми -  набір послідовних дій, які вирішують якусь задачу.
    Оцінка складності - O(n)
        n - кількість операцій для рішення (Завжди береться найгірший сценарій)
*/

// Алгоритм вибіркового сортування

const array = [1, 2, 3, 5, 7, 213, 5, 43, 67, 12348, -1, 4, -6, -10];
let count = 0;

function selectionSort(array) {
  let indexMin = i;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(array));
