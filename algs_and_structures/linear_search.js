/* 
    Алгоритми -  набір послідовних дій, які вирішують якусь задачу.
    Оцінка складності - O(n)
        n - кількість операцій для рішення (Завжди береться найгірший сценарій)
*/

// Алгоритм лінійного пошуку

const array = [1, 4, 6, 2, 34, 5, 8, 6, 4, 1, 3, 9];
let count = 0;

function linearSearch(array, item) {
  count += 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return 'Item is not defined';
}

console.log(linearSearch(array, 2));
console.log(count) // К-сть операцій = 4