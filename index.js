console.log("working");

//Q1. Write one example explaining how you can write a callback function?

const greet = (name)=>{
    return (`Hello!!! ${name}`)
};

const greeting = (name,callbackFunction)=>{
    console.log(callbackFunction(name));
};

greeting("Aman",greet);

/* //Q2. 
"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Explain callback hell.
Numbers
1
2
3
4
5
6
7"*/

const printNumbers = () => {
    setTimeout(() => {
        console.log(1);

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);
    
                setTimeout(() => {
                    console.log(4);
        
                    setTimeout(() => {
                        console.log(5);
            
                        setTimeout(() => {
                            console.log(6);
                
                            setTimeout(() => {
                                console.log(7);
                            },7000)

                        },6000)

                    },5000)

                },4000)

            },3000)
            
        },2000)

    },1000)
}
//printNumbers();

//Q3. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

let promise = new Promise((resolve,reject) => {
    //resolve();
})

promise.then(() => {
    setTimeout(() => {
        console.log(1);
    }, 1000);
}).then(() => {
    setTimeout(() => {
        console.log(2);
    }, 2000);
}).then(() => {
    setTimeout(() => {
        console.log(3);
    }, 3000);
}).then(() => {
    setTimeout(() => {
        console.log(4);
    }, 4000);
}).then(() => {
    setTimeout(() => {
        console.log(5);
    }, 5000);
}).then(() => {
    setTimeout(() => {
        console.log(6);
    }, 6000);
}).then(() => {
    setTimeout(() => {
        console.log(7);
    }, 7000);
})
//console.log(promise);

//Q4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promiseYes = (str) =>
    new Promise((resolve,reject) => {
        if(str === "yes"){
            resolve();
        }
        else{
            reject();
        }
    })

promiseYes("Yes").then(()=>{
    console.log("Promise resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})

// Q5. Create examples to explain callback function?
// for answer refer Q1
// Q6. Create examples to explain callback hell function?
// for answer refer Q2
// Q7. Create examples to explain promises function?
// for answer refer Q3

// Q8. Create examples to explain async await function?
async function fetchUserData(){
    console.log("The User Data will be fetch in sometime!");
    const response = await fetch("https://api.github.com/users"); 
    console.log("Printing The Data");
    const users = await response.json();
    console.log("Users Data fetched Successfully");

    return users;
}

let data = fetchUserData();
console.log("Its in process now");
console.log(data);
data.then((res) =>{
    console.log(res);
});