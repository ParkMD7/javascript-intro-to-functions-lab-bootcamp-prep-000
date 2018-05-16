function shout(string) {
  return 'Hello'.toUpperCase()
}

function whisper(string) {
  return 'HELLO'.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  return 'Hello'.toUpperCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
  return 'HELLO'.toLowerCase()
}

function sayHiToGrandma(string) {
if (string === "hello") {
 console.log("I can\'t hear you!")
} 
else if (string === "HELLO") {
 console.log("YES INDEED!")
} 
else {
 console.log("I love you, too.")
}
}