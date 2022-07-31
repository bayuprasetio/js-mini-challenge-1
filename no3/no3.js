function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  const normalize = word => word.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return normalize(word1) === normalize(word2);
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False
console.log(isAnagram('Madonna Louise Ciccone', 'One cool dance musician')) // True
console.log(isAnagram('Mona Lisa Da Vinci','Maid In Oil Canvas')) // True
console.log(isAnagram('jika teringat tentang dikau','Jauh dimata dekat dihati')) // False