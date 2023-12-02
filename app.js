console.log("Green Monster")



let points = 0
let quantity = 0

const upgrades = [{
  name: "beer",
  price: 20,
  quantity: 0,
},
{
  name: "popcorn",
  price: 40,
  quantity: 0,
},
{
  name: "hotdog",
  price: 60,
  quantity: 0,
},
{
  name: "friend",
  price: 200,
  quantity: 0,
}
]

function applause() {
  console.log("applause", points)
  points += 10
  updateApplause()
}

function updateApplause() {
  document.getElementById("applause").innerText = points.toString();
  console.log("updateApplause", points)

}

function buyItem(itemName) {
  let boughtItem = upgrades.find(item => item.name == itemName)
  if (points >= boughtItem.price) { boughtItem.quantity += 1 }

  if (points >= boughtItem.price) {
    points -= boughtItem.price
  }
  console.log("bought item", boughtItem, points)
  updateItem()
  updateApplause()

}



function updateItem() {
  let template = ""

  upgrades.forEach(item => {
    if (item.quantity > 0) {
      template += `
      <span>${item.quantity}</span>`
    }
  })
  document.getElementById('beer1').innerHTML = template
  document.getElementById('popcorn1').innerHTML = template
  document.getElementById('hotdog1').innerHTML = template
  document.getElementById('friend1').innerHTML = template

}

function updateExtra() {


}