/* 
    Алгоритми -  набір послідовних дій, які вирішують якусь задачу.
    Оцінка складності - O(n)
        n - кількість операцій для рішення (Завжди береться найгірший сценарій)
*/

// Алгоритм бінарного пошуку

const array = [1, 4, 6, 2, 34, 5, 8, 6, 4, 1, 3, 9];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2); // Math.floor - для передбачення випадку коли довжина масиву не ділиться навпіл.
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

// Варіант через рекурсію (краща читабельність, менше коду, менше змінних)

function recursiveBinarySearch(array, item, start, end) {
  middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(linearSearch(array, 2));
console.log(count); // К-сть операцій
