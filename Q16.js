// setTimeout and setIntervals -> 
// a setTimeout is used to  execute a function after a specified delay,
// and a setInterval used to execute a function repeatedly after specified intervals

const timerID = setTimeout(()=>{
    console.log("This will print after 2 seconds");
},2000)

clearInterval(timerID);

const myInterval = setInterval(()=>{
    console.log("My name is Ayan Yusuf Zai and it will print after each 2 seconds until 10 seconds not done");
},2000)

setTimeout(()=>{
    clearInterval(myInterval);
},10000)

