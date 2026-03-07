// Explain the concept of promises in Javascript
// Promises can handle asynchronous task in javascript by providing more
//  readable and structured way approach than callback and handling outputs
// so the major reason using promises is if you weren't able to fetch api like weather api
// for some reason and you want to make sure that you code shouldn't be crashed its need to show something else
// and with the help of promises when your code crashes or if the message fails you will always have a backup 
// and in a more elegant and decent way 

// Promises are split into three parts -> Pending, Fulfilled(Resolve), Rejected(reject)

// Pending is when the promises neither it has run yet it just got initialized so we have'nt got a request yet
// Fulfilled when your API fetches done successfully then promises fullfilled successfully
// if it got failed then the promises rejected

const data = {name: "John", age: 30};

function fetchData(){
    return new Promise((resolve,reject)=>{

        const success = false;
        setTimeout(()=>{
            if(success){
            resolve(data)
            }else{
                reject("Failed  to fetch Data");
            }
        },2000)
        
    })
}

fetchData()
.then(data => {
    console.log("Data:", data);
})
.catch(err => {
    console.log("Error:", err);
});