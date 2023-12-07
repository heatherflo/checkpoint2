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
  multiplier: 5,
},
{
  name: "hotdog",
  price: 60,
  quantity: 0,
  multiplier: 10,
}]

let automaticUpgrades = [
  {
    name: "friend",
    price: 200,
    quantity: 1,
    multiplier: 100,
  }
]

//my goal is to upgrade my applause points by 1 every time I click on it
function applause() {
  points += 1
  //I need to run my upgraded applause (to make it calculate) before I can draw the applause points to the page
  upgradedApplause()
  drawApplause()
}

//this takes the applause points and updates it to the DOM
function drawApplause() {
  document.getElementById('applause').innerText = points.toString()
}


function buyItem(itemName) {
  //finding the item based on its array and then finding the individual name of the item I want to draw out -what ever value I put here (itemName) it will find in the array and then stop looking until it has found all the items that match that name- THAT name is where I call it in the HTML inside the function on the onclick.
  let boughtItem = upgrades.find(item => item.name == itemName)
  //all the things that happen to my item once I have bought it
  if (points >= boughtItem.price) {
    points -= boughtItem.price,
      boughtItem.quantity += 1,
      boughtItem.price += 5,
      console.log(boughtItem, 'item bought')
    //I want to draw my total upgrades here bc this needs to run before it can upgrade the applause points
    drawTotalForClickUpgrades()
  }
  //every time I want to buy an item I need to draw the item to the page and update my applause points. 
  drawApplause()
  drawItem()
}

//drawing item to DOM
function drawItem() {
  console.log('draw item')
  //find the individual item from the appropriate array
  upgrades.forEach(item => {
    // change the look of the element by grabbing its ID and adding its name to the HTML
    let itemElm = document.getElementById(item.name)
    console.log(itemElm, "itemElm")
    //change the look of the element by grabbing its 'class' and changing its HTML to look like the innerText
    let statsElm = itemElm.querySelector('.stats')
    console.log(statsElm, "statsElm")
    // @ts-ignore
    statsElm.innerText = `quantity +${item.quantity}`
    //change the look of the element by grabbing its 'class' and changing its price in the innerText
    let priceElm = itemElm.querySelector('.price')
    // @ts-ignore
    priceElm.innerText = item.price

  })


}

//this calculates how many points my applause goes up based on the multiplier I have. The upgraded points are the NEW points now as I move through the game. 
function upgradedApplause() {
  console.log('upgraded applause', '🙌🏻')
  let upgradedPoints = 0
  upgrades.forEach(upgrade => {

    upgradedPoints += upgrade.quantity * upgrade.multiplier
  })
  points += upgradedPoints

}

//drawing NEW total to the DOM
function drawTotalForClickUpgrades() {
  //this is the total for the ENTIRE upgrades and does the same thing as upgrade applause 
  let upgradedPoints = 1
  upgrades.forEach(upgrade => {

    upgradedPoints += upgrade.quantity * upgrade.multiplier
  })

  let clickTotalElm = document.getElementById('clickTotal')
  clickTotalElm.innerText = upgradedPoints.toString()
}


//this is collecting the auto upgrades and calculating the NEW total based on the points it generates. 
function collectAuto() {
  let total = 0

  automaticUpgrades.forEach(upgrade => total += upgrade.quantity * upgrade.multiplier)

  points += total
  drawApplause()
}

function drawAuto() {

}




setInterval((collectAuto), 3000)





