//SOLUTION 1
function isPrime(num){
    if(num <= 1){
        return false;
    }    
    for(let i=2; i<num; i++){
        if(num % i == 0){ 
            return false;
        }
    }
    return true;
}

console.log("Input: 3 | isPrime: " + isPrime(3)); //true
console.log("Input: 21 | isPrime: " + isPrime(21)); //false
console.log("Input: 17 | isPrime: " + isPrime(17)); //true
console.log("Input: 121 | isPrime: " + isPrime(121)); //false
console.log("Input: 5099 | isPrime: " + isPrime(5099)); //true
var start= Date.now();
console.log("Input: 2147483647 | isPrime: " + isPrime(2147483647)); //true
var end = Date.now();
console.log(end-start + " ms"); //his code on screen, does not work...

//SOLUTION 2 FASTER APPROACH
function isPrime2(num){
    if(num <= 1){
        return false;
    }    
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i == 0){ 
            return false;
        }
    }
    return true;
}

console.log("Input: 3 | isPrime: " + isPrime2(3)); //true
console.log("Input: 21 | isPrime: " + isPrime2(21)); //false
console.log("Input: 17 | isPrime: " + isPrime2(17)); //true
console.log("Input: 121 | isPrime: " + isPrime2(121)); //false
console.log("Input: 5099 | isPrime: " + isPrime2(5099)); //true 
console.log("Input: 17855875 | isPrime: " + isPrime2(17855875)); //true
var start= Date.now();
console.log("Input: 2147483647 | isPrime: " + isPrime2(2147483647)); //true
var end = Date.now();
console.log(end-start + " ms"); //his code on screen, does not work...