function shout(string) {
  return 'Hello'.toUpperCase()
}

function whisper(string) {
  return 'HELLO'.toLowerCase()
}

function logShout(string) {
  console.log('Hello')
  return 'Hello'.toUpperCase()
}

function logWhisper(string) {
  console.log('Hello')
  return 'Hello'.toLowerCase(spy)
}