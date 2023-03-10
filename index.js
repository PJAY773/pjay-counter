// document.getElementById("count").innerText = 5

//let count = 0

//console.log(count)


// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the 
let myAge = 21;
console.log(myAge);
let humanDogRatio = 7;
let myDogAge = humanDogRatio * myAge;
console.log(myDogAge)
let bonusPoints = 50;
bonusPoints +=50;
bonusPoints -=75;
bonusPoints += 45;
console.log(bonusPoints);
function getNumber(){
    console.log(42)
}
getNumber()
let lap1 = 34
let lap2 = 33
let lap3 = 36
total = lap1 + lap2 + lap3
function lapTotal(){
    console.log(total)
}
lapTotal()
let lapsCompleted = 0
lapsCompleted = lapsCompleted + 1
function lapsIncrement(){
    console.log(lapsCompleted)
}
lapsIncrement()
lapsIncrement()
lapsIncrement()

let SaveEl = document.getElementById("save-el")
let CountEl = document.getElementById("count-el")
console.log(CountEl)

let count = 0

function Increment(){
    count += 1
    CountEl.textContent= count

}

function save(){
    let storedNumber = count + " - "
    SaveEl.textContent += storedNumber
    console.log(count)
    CountEl.textContent = 0
    count = 0
}
let username = "per"
let message = "You have three new notifications"
console.log(message)
console.log(message + ',' + username + '!')

/*let name = "Joseph"
let greeting = "Hi,"
console.log(greeting + " my name is " + name)*/
/*let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl)*/
/*let name = "Joseph Payne"
let greeting = "Welcome Back ," 
welcomeEl.innerText = greeting + name*/
