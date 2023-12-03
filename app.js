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

function buyBeer(beer) {
  let boughtItem = upgrades.find(item => item.name == beer)
  if (points >= boughtItem.price) { boughtItem.quantity += 1 }

  if (points >= boughtItem.price) {
    points -= boughtItem.price
  }
  console.log("bought item", boughtItem, points)
  // updateItem()
  updateApplause()
  updateBeer()
}

function updateBeer() {
  let template = " "
  upgrades.every(beer => {
    if (beer.quantity >= 1) {
      template += `<span>quantity + ${beer.quantity}`
    }
  })
  document.getElementById('buyBeer').innerHTML = template
}

function buyPopcorn(popcorn) {
  let boughtItem = upgrades.find(item => item.name == popcorn)
  if (points >= boughtItem.price) { boughtItem.quantity += 1 }

  if (points >= boughtItem.price) {
    points -= boughtItem.price
  }
  console.log("bought item", boughtItem, points)
  // updateItem()
  updatePopcorn()
  updateApplause()

}

function updatePopcorn() {
  let template = " "
  upgrades.forEach(popcorn => {
    if (popcorn.quantity >= 1) {
      template += `quantity <span>+ ${popcorn.quantity}`
    }
  })
  document.getElementById('buyPopcorn').innerHTML = template
}

function buyBoost(hotdog) {

  let boughtBoost = automaticUpgrades.find(item => item.name == hotdog)
  console.log("auto upgrades", boughtBoost)
  if (points >= boughtBoost.price) { boughtBoost.quantity += 1 }

  if (points >= boughtBoost.price) { points -= boughtBoost.price }
  updateBoost()
  updateApplause()

}


function updateBoost() {
  //this will enable the page to showcase the updated quantity and price of each item (beer or popcorn)
  let template = " "
  automaticUpgrades.forEach(hotdog => {
    if (hotdog.quantity >= 1) {
      template += `<span>+ ${hotdog.quantity}</span>`
    }
  })
  document.getElementById('buyHotdog').innerHTML = template


}

function buyFriend(friend) {
  let boughtFriend = automaticUpgrades.find(item => item.name == friend)
  if (points >= boughtFriend.price) { boughtFriend.quantity += 1 }

  if (points >= boughtFriend.price) { points -= boughtFriend.price }


  setInterval(applause, 3000)


  console.log(points, boughtFriend, "friend")

  updateFriend()
  updateApplause()
}

function updateFriend() {
  //update friend quantity to the DOM

  let template = " "
  automaticUpgrades.every(friend => {
    if (friend.quantity >= 1) {
      template += `<span>+ ${friend.quantity}</span>`
    }
  })
  document.getElementById('buyFriend').innerHTML = template

}

// function updateItem() {

//   upgrades.forEach(item => {

//     let updatedItem = document.getElementById(item.name)

//     let itemStats = updatedItem.querySelector('.stats')


//     itemStats.innerHTML = `quantity +${item.quantity}`
//   })
// }



setInterval(applause, 5000)