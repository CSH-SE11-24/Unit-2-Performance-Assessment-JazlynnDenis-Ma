const prompt = require('prompt-sync')()
console.log("welcome to Go Around the World")
let object = {
}
object.user = prompt("What's your name?")
console.log("Hello", object.user)

let instructions = "When going around the world the player must type 'left' , 'right' , 'foward' , or 'backwards' to discover new places. If confused type 'help',and ill be there !"

console.log("answer yes or skip")
let user2 = prompt("would you like instructions or would you like to skip ")

if (user2 === "yes") {
  console.log(instructions)
} else if (user2 === "skip") {
  console.log("okay let's go!!")
} else {
  console.log("that's not what i asked")
  let redirection = prompt("would you like the instructions?? ")
  if (redirection === "yes") {
    console.log(instructions)
  } else if (redirection === "no") {
    console.log("dang, that sucks")
  } else {
    console.log("oh well, let's move on ")
  }

}
let play= prompt("would you like to play? ")
while(play ==="yes"){
let user3 = prompt("type where you want to go ")
function foward() {
  if (user3 === "foward"){
  console.log("you are at the golden gate bridge. Isnt it pretty!!")
  }
}
function backwards() {
  if(user3==="backwards"){
  console.log("you are at looking at the new york sky line. WOW!")
}
}
function left() {
  if(user3==="left"){
  console.log("you are at DISNEYWORLD!! So excitingg!")
}
}
function right() {
  if(user3==="right"){
  console.log("You are LA, OMG is that paris hilton!?!")
  }
}
function help() {
  if(user3==="help"){
  console.log("Hello, i told you id be here to help! please type 'left' , 'right' , 'foward' , or 'backwards' to discover new and exciting places!!")
}
}

  foward()

  backwards()

  left()

  right()

  help()

  let feedback = [];

  console.log("yes or no")
  let userImput = prompt("do you have any funfacts?")
  if (userImput === "no") {
    console.log("awe man")
  } else if (userImput === "yes") {
    console.log("yay!!")
    let question = prompt("enter your fact!")
    feedback.push(question)
    // console.log(feedback)
  }
  let question2 = prompt("would you like to display your funfacts? ")
  if (question2 === "yes") {
    console.log(feedback)
  } else if (question2 === "no") {
    console.log("Well, its good to know!")
  } else {
    console.log("that's not what i asked")
  }
}
if (play === "no") {
  console.log("awe, thats too bad :(")
}
// turn funfacts into a while loop
// use for loop to print fun 
// add functions

