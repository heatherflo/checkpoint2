console.log("Green Monster")

let points = 0

function applause() {
  console.log("applause", points)
  points += 10
}

function updateApplause() {
  document.getElementById("applause").innerText = points;
  console.log("")
}