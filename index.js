function add(a,b) {
return  a + b
}

function subtract(a,b) {
  return a - b
}

function multiply (a,b) {
  return a * b
}

function divide (a,b) {
  return a / b
}

function inc(a) {
  return a + 1
}

function dec(a) {
  return a- 1
}

function makeInt(a) {
  var a = a.toString()
  return parseInt(a)

  var a = 0
  var b = 10
  return parseInt(a,b)

  var a = "sldkjflksjf"
  var b = 10
  return parseInt(a,b)
}

function preserveDecimal(a,b) {
  var a = '2.222'
  return parseFloat(a)

  var a = 'sldkjflksjf'
  var b = 10
  return parseFloat(a, b)
}
