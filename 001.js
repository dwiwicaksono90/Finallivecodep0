/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

/*
PSEUCODE

STORE NUM WITH STRING NUMBER
STORE RESULT WITH EMPTY String
STORE COUNT WITH 0

LOOP I > NUM LENGTH
  IF COUNT < 4
    DO RESULT WITH NUM I AND RESULT
    DO COUNT +1
  END IF
  IF COUNT = 3 AND I NOT 0
    DO RESULT WITH NUM I AND RESULT
    DO COUNT WITH 0
  END IF
END LOOP

RETURN 'RP' AND RESULT AND ',00'

*/
function formatUang(number) {
  var num = String(number)
  var result = ''
  var count = 0
    for (var i = num.length-1; i >= 0; i--){
      if (count < 4){
        result = num[i] + result
        count += 1
      }
      if (count === 3 && i !== 0){
        result = '.' + result
        count = 0
      }
    }
  return 'Rp' + result + ',00'
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
