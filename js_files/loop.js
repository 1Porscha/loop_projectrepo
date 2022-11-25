console.log("working great")

//Write a for loop that logs 0-15

for (var i = 0; i <= 15; i ++){
    console.log(i)
}

//Write a for loop that counts from 15-0

for (var i = 15; i >= 0; i --){
    console.log(i)
}

//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.

let laps = 0
for ( i = 0; i <= 0; i++ ) {
    console.log("that's another lap!")
}

// Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.

let age=32
for (var i = 0; i <= 100; i++){
if (i == age)
console.log ("age match")

else {
    console.log("age doesn't match")
}
}

//Write a loop that logs all even numbers from 0-700.

for (var i = 0; i <= 700; i+= 2)
  console.log(i)

//Write a loop that logs all odd numbers from 0-700.

for (var i = 0; i <= 700; i++){
    if (i % 2 != 0){
    console.log(i)
    }
}

//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented


let inventionDate = 1902


for ( i = 1900; i < 1949; i++ ){
    if (inventionDate == 1900){
        console.log('Zeppelin')
    } else if ( inventionDate == 1902){
        console.log('teddy bear')
    } else if (inventionDate == 1913){
        console.log('bra')
    }else if (inventionDate == 1935){
        console.log('radar')
    }else if (inventionDate == 1943){
        console.log('slinky')
    } 
} 

    
