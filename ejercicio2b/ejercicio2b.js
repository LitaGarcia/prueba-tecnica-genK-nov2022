//para realizar la solución de este problema, según el enunciado, he asumido que
//se multiplicaran los numeros del array1 siguiendo una lectura por filas
//con el correspondiente en el array2 siguiendo una lectura por columnas

function calculateResult(arr1, arr2) {
  const result = [];
  arr1.forEach((f, i) => {
    f.forEach((n, j) => {
      result.push(n * arr2[j][i]);
    });
  });

  return result;
}

function addLeadingZeros(num) {
  let result = num;
  if (result.length < 3) {
    result = '0' + result;
    return result;
  }
}

const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];

console.log(
  calculateResult(array1, array2).map((n) => addLeadingZeros(n.toString()))
);
