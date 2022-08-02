function pizzaMozarella(score){
  for( let i=1 ; i <= score ; i++){
    if (i%3 === 0 && i%5 === 0){
      console.log('PizzaMozarela');
    }
    else if (i%3 === 0) {
      console.log('Pizza');
    }
    else if (i%5 === 0){
      console.log('Mozarella');
    }
    else {
      console.log(i);
    }
  }
}
// Test Case
(pizzaMozarella(15));
// 1
// 2
// Pizza
// 4
// Mozarella
// Pizza
// 7
// 8
// Pizza
// Mozarella
// 11
// Pizza
// 13
// 14
// PizzaMozarella