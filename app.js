console.log("Green Monster")



let points = 0
let quantity = 0
let upgradedPoints = 0

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
  multiplier: 20,
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
  // updateItem()
  updateApplause()

}

function buyAutoUpgrade(upgradedName) {

  let boughtUpgrades = automaticUpgrades.find(item => item.name == upgradedName)
  console.log("auto upgrades", boughtUpgrades)
  if (points >= boughtUpgrades.price) { boughtUpgrades.quantity += 1 }

  if (points >= boughtUpgrades.price) { points -= boughtUpgrades.price }
  updateApplause()
  // upgradeApplause()
}
// if (boughtUpgrades.quantity >= 1) {
//   points += boughtUpgrades.multiplier


// upgradeApplause()


// function upgradeApplause(upgradeName) {
//   let boughtItem = automaticUpgrades.find(item => item.name == upgradeName)
//   console.log(boughtItem, "bought Item")
//   let upgradedPoints = boughtItem.multiplier
//   upgradedPoints == points
//   console.log(upgradedPoints, "new points")

//   updateApplause()
// }




function updateItem() {
  //this will enable the page to showcase the updated quantity and price of each item (beer or popcorn)

}

function buyFriend(friend) {
  let boughtFriend = automaticUpgrades.find(item => item.name == friend)
  if (points >= boughtFriend.price) { boughtFriend.quantity += 1 }

  if (points >= boughtFriend.price) { points -= boughtFriend.price }


  // setInterval(applause, 3000)


  console.log(points, boughtFriend, "friend")
  updateApplause()
  updateFriend()
}

function updateFriend() {
  //update friend quantity to the DOM
  let template = " "
  automaticUpgrades.forEach(friend => {
    if (friend.quantity >= 1) {
      template += `<span>+ ${friend.quantity}</span>`
    }
  })
  document.getElementById('friend').innerHTML = template
}