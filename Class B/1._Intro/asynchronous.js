// Why
// Javascript is single-threaded. 
// We dont want to block our application


// When
// Whenever time is a part of the issue, such as fetch().. Whenever a response isnt instantanious, it's not synchornous.
// File handling, saving/reading files, all of these are asynchronous. readFileSync() shouldnt we used.
// When querying databases.

// Promise can be in the pending stage, or the fulfilled state.
// once the state is fulfullied, the state can be resolved or rejected. 

/*new Promise((resolve, reject) => {
    //resolve("We did it yay");
    
    try {
        throw new Error("BOmb!");
        resolve("We dit it");
    } catch (errorMessage) {
        reject("nooo, my one weakness: " + errorMessage);
    }

})
.then(message => console.log(message))
.catch(errMessage => console.log(errMessage));
*/

/*
assignment create a function called somethingGoodSomethingBad 
it should return a promise - that is to say that we wrap the function in a promise
BEWARE: you should not handle the promise.. just create a function that returns a promise
 make it take 4 seconds to complete
*/

function somethingGoodSomethingBad() {

    
    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
            try { 
                resolve("Good") 
            } catch (errorMessage) {
                reject("nooo, my one weakness: " + errorMessage);
            }
    },4000)
    })
}

somethingGoodSomethingBad()
.then(message => console.log(message));

//With parathesis we are making an IIFE immidiately invoked fucntion expression
//This removes the delay that occurs because of housting and declarations whenever the file/Script is run.
(async function callMyCustomPromise() {
    
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message)
    } catch (errorMessage) {
        console.log(errorMessage)
    }
})

//Promise.all() for whenever you have multiple promises that shouldnt be blocking eachother.


