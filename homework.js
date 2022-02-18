//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (dog of dog_names){
        dog_string = dog_string.toLowerCase()
        if (dog_string.indexOf(dog.toLowerCase()) != -1) {
            console.log(`Matched ${dog}.`);
        } else {
            console.log(`No Matches For ${dog}.`);
        };
    };
}

findWords(dog_string, dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    
    for (let i = 0; i < arr.length; i+=2) {
        arr.splice(i,1,"even index");
      };
    
    return arr

}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Square(n)Sum

let numbers = [5,2]

function squareSum(numbers){
    let sum = 0;
    for (let num of numbers){
        sum+= num**2
    };
    return sum
};

console.log(squareSum(numbers))

// Return Negative

const n3 = -5;

function makeNegative(x){
    console.log(-Math.abs(x))
};

makeNegative(n4)