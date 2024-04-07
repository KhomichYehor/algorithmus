/* 
    Алгоритми -  набір послідовних дій, які вирішують якусь задачу.
    Оцінка складності - O(n)
        n - кількість операцій для рішення (Завжди береться найгірший сценарій)
*/

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
