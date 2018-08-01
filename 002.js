/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'

*/
/*
Pseudocode
STORE RESULT WITH EMPTY STRING
STORE TEMP WITH EMPTY STRING
STORE SENSOR WITH EMPTY STRING

LOOP I < SENTENCE LENGTH
  IF I = SENTENCE LENGTH -1
    DO TEMP = TEMP + SENTENCE I
    PUSH TEMP TO SENTENCESPLIT
  ELSE IF SENTENCE NOT SPACE
    DO TEMP = TEMP + SENTENCE I
  ELSE IF SENTENCE = SPACE
    PUSH TEMP TO SENTENCESPLIT
    DO TEMP WITH STRING
  END IF
END LOOP

LOOP J < SENTENCESPLIT LENGTH
  IF SENTENCESPLIT J NOT WORDS
    DO RESULT = RESULT + SENTENCESPLIT J + SPACE
  ELSE IF SENTENCESPLIT = WORDS
    LOOP K < WORDS LENGTH
      DO SENSOR = SENSOR + '*'
    END LOOP
    DO RESULT = RESULT + SENSOR + SPACE
  END IF
END LOOP

RETURN RESULT


*/


function sensorSentence ( sentence, words ) {
  var result = ''
  var temp = ''
  var sensor = ''
  var sentenceSplit = []

  for (var i = 0; i < sentence.length; i++){
    if (i === sentence.length-1 ){
      temp = temp + sentence[i]
      sentenceSplit.push(temp)
    } else if (sentence[i] !== ' ' ){
      temp = temp + sentence[i]
    } else if (sentence[i] === ' '){
      sentenceSplit.push(temp)
      temp = ''
    }
  }
  for (var j = 0; j < sentenceSplit.length; j++){
    if (sentenceSplit[j] !== words){
    result = result + sentenceSplit[j] + ' '
    } else if (sentenceSplit[j] === words){
    for (var k = 0; k < words.length; k++){
      sensor = sensor + '*'
    }
    result = result + sensor + ' '
  }

}
return result
}

console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
