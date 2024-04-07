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
