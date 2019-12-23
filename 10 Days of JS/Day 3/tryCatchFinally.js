/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    var arr = s.split("");
    var rev = arr.reverse();
    var join = rev.join("");

    console.log(join);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}
