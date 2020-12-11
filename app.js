/* In this version of FizzBuzz we use numbers 4 and 7
A program to print numbers from 1 to 100.
But multiples of four print "Fizz" instead of the number and
for the multiples of seven print "Buzz". For numbers which are
multiples of both four and seven print "FizzBuzz".
*/

// create variables
// item = for the values to be printed
// i = for index in for loop

let item = "";
let i;

for(i = 1; i <= 100; i++) {
    // first we test multiple numbers for four and seven (4*7=28)
    if(i % 28 == 0){
        item += "FizzBuzz <br>";
    // second we test number seven
    }else if(i % 7 == 0){
        item += "Buzz <br>";
        // third we test four
    }else if( i % 4 == 0){
        item += "Fizz <br>";
        // if none of the conditions above happens, then we print the number
    }else{
        item += i + "<br>";
    }
}

// let's select paragraph called "demo" and place the values we will get from for-loop 
document.getElementById("demo").innerHTML = item;


// if you only want to print to the console
for(i=1;i<=100;i++){
    if(i % 28 == 0){
        console.log("FizzBuzz");
    }else if(i % 7 == 0) {
        console.log("Buzz");
    }else if(i % 4 == 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}