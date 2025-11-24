/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    return (n ^ 0) === n;
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    const arr = [];
    for (let i = 2; i <= 20; i += 2) arr.push(i);
    return arr;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    if (n <= 1) return n;
    return n + recSumTo(n - 1);
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0,
        b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;

    if (typeof operatorFn !== 'function') {
        return () => storedValue;
    }

    return function (newValue) {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 */
function sequence(start = 0, step = 1) {
    let value = start;
    return function () {
        const returnValue = value;
        value += step;
        return returnValue;
    };
}

/**
 * Напишите функцию deepEqual
 */
function deepEqual(a, b) {
    if (Object.is(a, b)) return true;

    if (
        typeof a !== 'object' ||
        a === null ||
        typeof b !== 'object' ||
        b === null
    ) {
        return false;
    }

    const keysA = Reflect.ownKeys(a);
    const keysB = Reflect.ownKeys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!keysB.includes(key)) return false;

        // Рекурсивно сравниваем значения
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
