function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (!line.length) {
    return  "There is nobody waiting to be served!"
  } else {
    console.log(line.shift())
  }
}

function currentLine(line) {
  array = []
  for (let i = 0; i < line.length; i++) {
  if (!line.length) {
    "The line is currently empty."
  } else {
    array.push(`${parseInt(i) + 1}. ${line[i]}`)
  }
}
return `The line is currently: ${array.join(", ")}`
}
