

const fruiteName = ["Mango", "Banana", "Apple", "Grapes", "Pineapple"];

  fruiteName.unshift("orange");

 for(let i = 0; i < fruiteName.length; i++){
    console.log(fruiteName[i])
 }
 function printFruiteName(){


  newFruiteName = fruiteName.split(" ").reverse().join(" ");
  console.log(newFruiteName)
 

} 
printFruiteName()