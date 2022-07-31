function scoreChecker(score) {
  // Tulis kodingan dibawah ini
  if (score >=90) {
    return 'Selamat! Anda mendapatkan nilai A.';
  }
  else if (score >=80) {
    return 'Anda mendapatkan nilai B.';
  }
  else if (score >=70) {
    return 'Anda mendapatkan nilai C.';
  }
  else if (score >=60) {
    return 'Anda mendapatkan nilai D.';
  }
  else {
    return 'Anda mendapatkan nilai E.';
  }
}

console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.