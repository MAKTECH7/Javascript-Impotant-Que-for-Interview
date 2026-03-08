// What is the use of Async and await in Javascript
// Async : Declaring a function with async makes it return a promise
// await : it pauses the execution of the code until the promise it's waiting for is 

// async → makes a function always return a Promise
// await → waits for a Promise to resolve or reject and returns the resolved value

// resolved, then return the resolved value.

// for example when we install an app fromm playstore and while installing we are able to do multiple 
//  task like open whatsapp, instagram etc and installationn process is in the background

/*
If an interviewer asks:

What is async/await?

You can say:

Async and await are used to handle asynchronous operations in JavaScript
in a cleaner way. The async keyword makes a function return a Promise,
and the await keyword pauses the execution of that function until 
the Promise resolves or rejects. It allows asynchronous code to be written 
in a synchronous style.

*/




/*  

Imagine:

You order food online

Instead of waiting at the door doing nothing, you:

watch YouTube

use Instagram

study

When food arrives → you receive it.

That is asynchronous programming.

async/await is just a clean way to handle asynchronous code

*/
async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log("Data fetched! : ", data);
        
    }catch(err){
        console.log("Errorrrrr: ",err)
    }
}

fetchData();