/* 
    Алгоритми -  набір послідовних дій, які вирішують якусь задачу.
    Оцінка складності - O(n)
        n - кількість операцій для рішення (Завжди береться найгірший сценарій)
*/

// Алгоритм швидкого сортування, або сортування Хуара

const array = [1, 2, 3, 5, 7, 213, 5, 43, 67, 12348, -1, 4, -6, -10];
let count = 0;

/* 
    У масиві визначається опорний елемент, який зазвичай є центральним і 
    масив поділяється на 2, один з яких вбирає значення меньші за опорний елемент, 
    другий - більші, після чого процедура повторюється доки довжина масиву !== 1
*/

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
