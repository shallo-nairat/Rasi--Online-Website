// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values



// const items=['pen','ruler','sharpener'];

// function itemsSort(arr){
//     arr.sort((a,b)=>b-a);
//     return arr;
// }
 
// let numbers =[8,20,23,34]
// function checkNumbers() {
//     let arr =arr.forEach(Number => {
//        if (Number > 0) {
//          console.log("positive");
//        } else if (Number < 0) {const items=['pen','ruler','sharpener'];

// function itemsSort(arr){
//     arr.sort((a,b)=>b-a);
//     return arr;
// } 
 
// let numbers =[8,20,23,34]
// function checkNumbers() {
//     let arr =arr.forEach(Number => {
//        if (Number > 0) {
//          console.log("positive");
//        } else if (Number < 0) {
//          console.log("negative");
//        } else {
//          console.log("zero");
//        }
//     });
//    }
//    console.log((checkNumbers))
//          console.log("negative");
//        } else {
//          console.log("zero");
//        }
//     });
//    }
//    console.log((checkNumbers))

   function reverseStringsInArray(arr){

    const reversedStrings=arr.map(str=>[...str].reverse().join(''));
    console.log(reversedStrings);
   }
    
   //examples
   reverseStringsInArray(['Jemimah','Hawah','Karisa','Hamida'])
   //sort

    function checkElements(array,index){
      const number =array[index];

      if (number>0){
        return number + "is positive";
      } else if (number< 0){
        return number + "is negative";
      } else {
        return number + "is zero";

      }
    }
    const number= [4,8,10,12]
    console.log(checkElements(number,3))

    function sortEmployees(employees){
      return employees.sort((a, b)=> a.salary - b.salary);

    }
    const employees= [
      {id:1, name:'Nakato', salary:5500},
      {id:2 , name: 'Zeinab', salary:6500},
      {id:3 , name: 'Bella', salary:4000}, //compare the number in elements .we cant sort string
    ]

    const sortBySalary= sortEmployees(employees);
    console.log(sortBySalary);

    function multipliedNumbers (numbers){
      numbers.forEach(element => {
        console.log(element*2)
      });
    }
    multipliedNumbers([3,9,2,4])

    function changeArray(arr){
      const firstFour=arr.slice(0,4).map(item=>item*8);
      const lastTwo =arr.slice(-2).map(item=>item+5);
      const newArray= firstFour.concat(lastTwo);
      console.log(newArray)

    }
    changeArray([3,9,2,4])