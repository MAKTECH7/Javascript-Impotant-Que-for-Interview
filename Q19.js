// what is difference between Call, apply and bind

// Call -> it calls the parameters one by one
// call -> invokes the function immediatedly, with this set to thisArg, and 
// accepts arguments one by one 

// Apply -> we can specify in a list instead of one by one 
//  invokes the function immediatedly, with this set to thisArg, 
// but takes arguments as an Array

// Bind  -> Returns a new function with this set to thisArg, and any present arguments, 
// but doesn't invoke it immediately, it is invoked whenever 
// you think it should be invoked


function cook(ing1, ing2, ing3){
    console.log(`${this.name} is ordering a meal of ${ing1}, ${ing2}, ${ing3}`);

}
const adam = {name: "Adam"};
const Madam = {name: "Madam"};
cook.call(adam,"rice", "beans", "water");
cook.apply(Madam,["rice", "beans", "water"]);

const cookForAdam = cook.bind(adam, "Chicken", "beans", "water");

cookForAdam();

// call
// Chef cook for Adam RIGHT NOW

// apply
// Chef cook for Madam RIGHT NOW
// ingredients given in list

// bind
// Chef prepare order for Adam
// but cook later when I say