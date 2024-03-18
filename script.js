// PART 1
console.log("PART 1");
for (let i = 1; i < 101; i++) {
    // console.log(i);
    if (i % 3 === 0) {
        console.log(i, "Fizz");
        if (i % 5 === 0) {
            console.log(i, "Fizz Buzz")
        }
    } else if (i % 5 === 0) {
        console.log(i, "Buzz");
    } else {
        console.log(i);
    }
}
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log ('Fizz Buzz')
//     }else if (i % 3 === 0){
//         console.log('Fizz ')
//     }else if (i % 5 === 0){
//         console.log('Buzz')
//     }else{
//         console.log(i);
//     }
// }

//PART 2
console.log("\n\n");
console.log("PART 2");
for (let n = 2; n < 30; n++) {
    var isPrime = true;
    for (let m = 2; m < n; m++) {
        //to skip if the numbers are not prime
        if (n % m === 0){
            isPrime = false;
            // console.log(m,'not a prime')
            continue;
        }
    }
    if (isPrime){
        console.log(n, 'is a prime number')
    }
}

// PART 3
console.log("\n\n");
console.log("PART 3");

var str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26`;

for (const x in str){
    if(str[x] == "\n"){
        continue;
    }
    console.log(str);
}