console.log(`\n Closure Challenges! \n\n`);


// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function europeanUnion(){
  var members = ['Germany', 'France', 'Italy', 'Spain', 'United Kingdom'];
  console.log(members);
  function ukIsOut(){
    console.log(members.pop('United Kingdom')+' is out of the EU!');
  }
  ukIsOut();
  console.log(members);
}

europeanUnion();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.
  function counter(){
    return count+=1;
  }
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  return counter;
};
const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMakerLimit = (limit) => {
  let count = 0;
  function counter(){
    if(count+1>limit){
      count = 0;
    }
    return count+=1;
  }
  return counter;
};
const myCounterLimit = counterMakerLimit(1);
console.log(myCounterLimit()); // 1
console.log(myCounterLimit()); // 2
console.log(myCounterLimit()); // 3
console.log(myCounterLimit()); // 4


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {increment:()=>count+=1, decrement:()=>count-=1,}
};
const counterMade = counterFactory();
console.log(counterMade.increment());
console.log(counterMade.increment());
console.log(counterMade.increment());
console.log(counterMade.increment());