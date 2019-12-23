/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var vow = [];
  var cons = [];

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      vow.push(ch);
    } else {
      cons.push(ch);
    }
  }

  for (let c of vow) {
    console.log(c);
  }

  for (let c of cons) {
    console.log(c);
  }
}
