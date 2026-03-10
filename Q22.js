// async/await -> async await is a cleaner, more readable way to handle Promises
// promise -> Promises are the underlying mechanism 

async function fetchData(){
    try{
        const result1 = await fetchData1();
        const result2 = await fetchData2(result1);
        console.log(result2);
    }catch(err){
        console.log(err);
    }
}
fetchData();