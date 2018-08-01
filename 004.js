/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT =
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' ']
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum ( arr ) {
  var result = []
  // console.log(arr[0]);
  var smalest = 99999
  var biggest = 0
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      if (arr[i][j] !== ' '){
        if (arr[i][j] < smalest){
          smalest = arr[i][j]
        }
        if (arr[i][j] > biggest){
          biggest = arr[i][j]
        }
      }
    }
  }

  for (var k = smalest +1; k < biggest; k++){
    var tes = false
    for (var l = 0; l < arr.length; l++){
      for (var m = 0; m < arr[l].length; m++){
        if (arr[l][m] === k){
          tes = true
        }
      }
    }
    if (tes === false){
      result.push(k)
    }

  }
  return result
}



console.log(missingNum([[3,' ', 5], [1,' ', 7], [9,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[ 2,' '], [' ',5]])) // [ 3, 4 ]
console.log(missingNum([[11,' ', 13], [17,' ', 19], [' ',16,' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3,' ', 5, 15], [1,' ', 7, 13], [9,' ',' ', 12], [' ', 16,' ',' ']])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []
