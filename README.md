# algorithmus

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

// Рекурсія - функція, яка викликає сама себе. Завжди має умову, або випадок, при якому вона зупиняється, або буде нескінченний виклик

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Функція буде викликатись поки n !== 1

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
};

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


// Алгоритм пошуку в ширину

// Graph - абстрактна структура, яка являє собою множину вершин і набір ребер, тобто зʼєднань між вершинами

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// Черга - структура даних, яка складається з елементів, принцип полягає в тому, що елементи додаються в кінець, а вилучаються з початку

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
}

// Матриця сміжностей 

const matrix = [
    [0,1,1,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,1,0,1],
    [0,0,0,0,0,1,0],
    [1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

// Алгоритм бабл сортування

const array = [1, 2, 3, 5, 7, 213, 5, 43, 67, 12348, -1, 4, -6, -10];
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

// Алгоритм Дейкстри

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  const costs = {};
  const processed = [];
  const neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 1000000;
    }
  });

  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbors) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }

  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 1000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}
