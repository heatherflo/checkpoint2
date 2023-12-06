console.log("Green Monster")



let points = 0

const upgrades = [{
  name: "beer",
  price: 20,
  quantity: 0,
  multiplier: 1,
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
  quantity: 1,
  multiplier: 20,
},
{
  name: "friend",
  price: 200,
  quantity: 2,
  multiplier: 100,
}
]


function applause() {
  points += 10
  drawApplause()
  upgradedApplause()
}

function drawApplause() {
  document.getElementById('applause').innerText = points.toString()
}

function buyItem(itemName) {
  let boughtItem = upgrades.find(item => item.name == itemName)
  if (points >= boughtItem.price) {
    points -= boughtItem.price,
      boughtItem.quantity += 1,
      //NOTE this adds 5 to 'each' item price- not just the beer price
      // boughtItem.price += 5,
      console.log(boughtItem, 'item bought')

  }
  // drawItem()
  drawApplause()

}

// 
// function drawItem(itemName) {
// console.log('draw item')
//NOTE tried updating the DOM in two different ways- query selector and via a template to the HTML

// upgrades.forEach(item => {
//   let itemElm = document.getElementById(item.name)
//   console.log(itemElm, "itemElm")
//   let statsElm = itemElm.querySelector('stats')
//   console.log(statsElm, "statsElm")
//   // @type {HTMLDivElement}
//   // @ts-ignore
//   statsElm.innerText = `quantity +${item.quantity}`
// })
//NOTE this isn't working because the IDs are not individual to each other 
// let template = ""
// upgrades.forEach(item => {
//   if (item.quantity > 0) {
//     template += `beer<span class="mdi mdi-glass-mug"></span>
//     <div>
//       ${item.price}
//       <span class="mdi mdi-hand-clap"></span>
//     </div>
//     <div  class="smallText">
//       quantity +${item.quantity}
//     </div>`
//   }
// })

// document.getElementById('drawItem').innerHTML = template
// drawApplause()
// }

function upgradedApplause() {
  // console.log('upgraded applause', '🙌🏻')
  let upgradedPoints = 0
  upgrades.forEach(upgrade => {
    upgradedPoints += upgrade.price * upgrade.multiplier
  })
  // console.log(upgradedPoints, 'upgraded points')
  drawApplause()
  //NOTE need to change the points logged on the DOM on the applause points bar

  // upgrades.forEach(upgrade => points += upgrade.multiplier * upgrade.quantity)
  // console.log(upgrades, 'upgrades')
}











// function applause() {
//   console.log("applause", points)
//   points += 10
//   // TODO need to count out clicks
//   // What is my paycheck?



//   updateApplause()
// }

// function autoApplause() {
//TODO like applause, counts up auto upgrades separate "auto paycheck"
// adds to points
// draws to page
// }

// function updateApplause() {
//   document.getElementById("applause").innerText = points.toString();
//   console.log("updateApplause", points)

// }

// function buyBeer(beer) {
//   let boughtItem = upgrades.find(item => item.name == beer)
//   if (points >= boughtItem.price) { boughtItem.quantity += 1 }

//   if (points >= boughtItem.price) {
//     points -= boughtItem.price

//   }


//   //TODO increase price of upgrade
//   console.log("bought item", boughtItem, points)
//   // updateItem()
//   updateApplause()
//   updateBeer()
// }

// function updateBeer(beer) {

//   let template = " "
//   //FIXME swap every call with a find, don't forget to save it out like you did on line 60
//   let boughtItem = upgrades.find(item => item.name == beer)
//   upgrades.find(item => {
//     if (boughtItem.quantity >= 1) {
//       template += `<span>quantity + ${item.quantity}`
//     }


//   })
//   document.getElementById('buyBeer').innerHTML = template


// }




// function buyPopcorn(popcorn) {
//   let boughtItem = upgrades.find(item => item.name == 'popcorn')
//   if (points >= boughtItem.price) { boughtItem.quantity += 1 }

//   if (points >= boughtItem.price) {
//     points -= boughtItem.price
//   }
//   console.log("bought item", boughtItem, points)
//   // updateItem()
//   updatePopcorn()
//   updateApplause()

// }

// function updatePopcorn() {
//   let template = " "
//   upgrades.find(popcorn => {
//     if (popcorn.quantity >= 1) {
//       template += `quantity <span>+ ${popcorn.quantity}`
//     }
//   })
//   document.getElementById('buyPopcorn').innerHTML = template
// }

// function buyBoost(hotdog) {

//   let boughtBoost = automaticUpgrades.find(item => item.name == 'hotdog')
//   console.log("auto upgrades", boughtBoost)
//   if (points >= boughtBoost.price) { boughtBoost.quantity += 1 }

//   if (points >= boughtBoost.price) { points -= boughtBoost.price }
//   updateBoost()
//   updateApplause()

// }


// function updateBoost() {
//   //this will enable the page to showcase the updated quantity and price of each item (beer or popcorn)
//   let template = " "
//   automaticUpgrades.forEach(hotdog => {
//     if (hotdog.quantity >= 1) {
//       template += `<span>+ ${hotdog.quantity}</span>`
//     }
//   })
//   document.getElementById('buyHotdog').innerHTML = template


// }

// function buyFriend(friend) {
//   let boughtFriend = automaticUpgrades.find(item => item.name == 'friend')
//   if (points >= boughtFriend.price) { boughtFriend.quantity += 1 }

//   if (points >= boughtFriend.price) { points -= boughtFriend.price }


//   // setInterval(applause, 3000)


//   console.log(points, boughtFriend, "friend")

//   updateFriend()
//   updateApplause()
// }

// function updateFriend() {
//   //update friend quantity to the DOM

//   let template = " "
//   automaticUpgrades.every(friend => {
//     if (friend.quantity >= 1) {
//       template += `<span>+ ${friend.quantity}</span>`
//     }
//   })
//   document.getElementById('buyFriend').innerHTML = template

// }

// // function updateItem() {

// //   upgrades.forEach(item => {

// //     let updatedItem = document.getElementById(item.name)

// //     let itemStats = updatedItem.querySelector('.stats')


// //     itemStats.innerHTML = `quantity +${item.quantity}`
// //   })
// // }



// //TODO should call autoApplause
// setInterval(applause, 5000)