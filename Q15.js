// Closure and why do we need closure
// ans -> closure is a function in js that remembers the environment even after outer function has been finished execution.
//  we need a closure because there is official private modifier in js for declaring variable private
// so for that compensation we have a closure that we can create it a private that only that we can modifying it by only that particular function 


function counter(){
    let count = 0;

    return{

        increament: function(){
            count++;
            return count;
        },
        decreament: function(){
            count--;
            return count;
        },
        displayFunction: function(){
            let message = "Current count = "+ count;
            return message;
        },
        CurrentCount: function(){
            count =0
            return count;
        }

    }
}

const myCounter = counter();
console.log(myCounter.displayFunction());
console.log(myCounter.increament());
console.log(myCounter.displayFunction());
console.log(myCounter.decreament());
console.log(myCounter.displayFunction());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.decreament());
console.log(myCounter.decreament());
console.log(myCounter.decreament());
console.log(myCounter.decreament());
console.log(myCounter.decreament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.increament());
console.log(myCounter.displayFunction());
console.log(myCounter.CurrentCount())
console.log(myCounter.displayFunction());



