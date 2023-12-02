console.log("Green Monster")



let points = 0
let quantity = 0

const upgrades = [{
  name: "beer",
  price: 20,
  quantity: 0,
  multiplier: 1
},
{
  name: "popcorn",
  price: 40,
  quantity: 0,
  multiplier: 1,
}]

let automaticUpgrades = [{
  name: "hotdog",
  price: 60,
  quantity: 0,
  multiplier: 10,
},
{
  name: "friend",
  price: 200,
  quantity: 0,
  multiplier: 100,
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

function buyAutoUpgrade(itemName) {

  let boughtUpgrades = automaticUpgrades.find(item => item.name == itemName)
  console.log("auto upgrades", boughtUpgrades)
  if (points >= boughtUpgrades.price) { boughtUpgrades.quantity += (1 * boughtUpgrades.multiplier) }
  if (points >= boughtUpgrades.price) { points -= boughtUpgrades.price }
  console.log("autoUpgrade", boughtUpgrades)

  updateApplause()
}

function updateItem() {
  //this will enable the page to showcase the updated quantity and price of each item (beer or popcorn)

}


// function updateItem() {
//   let template = ""

//   upgrades.forEach(item => {
//     if (item.quantity > 0) {
//       template += `
//       <span>${item.quantity}</span>`
//     }
//   })
//   document.getElementById('beer1').innerHTML = template
//   document.getElementById('popcorn1').innerHTML = template
//   document.getElementById('hotdog1').innerHTML = template
//   document.getElementById('friend1').innerHTML = template

// }
