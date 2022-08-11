  // MENU-BAR
const menuBar = document.getElementsByClassName('game-menu-bar')[0];
menuBar.addEventListener('mouseover', () => {
  menuBar.style.opacity = 1;
})
menuBar.addEventListener('mouseout', () => {
    menuBar.style.opacity = 0.5;
    if(raitingList.style.display === 'flex' || gameBarMenuWindow.style.display === 'flex' || getShopWindowTag.style.display === "flex") {
      menuBar.style.opacity = 1;
    }
})
// SHOP
const getShopTag = document.getElementsByClassName('game-menu-box__shop')[0];
const getShopWindowTag = document.getElementsByClassName('game-menu-box__window-shop')[0];
const openShop = () => {
  if(getShopWindowTag.style.display !== "flex") {
    getShopWindowTag.style.display = "flex";
  } else {
    getShopWindowTag.style.display = "none";
  }
}
getShopTag.addEventListener('click', openShop);

const choiceWoodImage = document.getElementsByClassName('wood-box__image-img')[0];
const selectWood = document.getElementById("select");

const choiceWood = (e) => {
  e.stopPropagation();
  if(e.target.value === "spring") {
    choiceWoodImage.src = "./assets/img/resources/wood-spring.png";
    choiceWoodImage.style.transform = 'rotate(0deg)';
    choiceWoodImage.style.width = '30%';
  } else if (e.target.value === "summer") {
    choiceWoodImage.src = "./assets/img/resources/wood-summer.png";
    choiceWoodImage.style.transform = 'rotate(0deg)';
    choiceWoodImage.style.width = '30%';
  } else if (e.target.value === "autumn") {
    choiceWoodImage.src = "./assets/img/resources/wood-autumn.png";
    choiceWoodImage.style.transform = 'rotate(0deg)';
    choiceWoodImage.style.width = '30%';
  } else if (e.target.value === "winter") {
    choiceWoodImage.src = "./assets/img/resources/wood-winter.png";
    choiceWoodImage.style.transform = 'rotate(0deg)';
    choiceWoodImage.style.width = '30%';
  }
}
selectWood.addEventListener('click', choiceWood);

const getDealSellWoodMinusBtn = document.getElementsByClassName('deal-box__minus')[0];
const getDealSellWoodPlusBtn = document.getElementsByClassName('deal-box__plus')[0];
const getDealSellWoodCountBox = document.getElementsByClassName('deal-box__count')[0];
const getDealCoinCountBox = document.getElementsByClassName('deal-box-coin-count')[0];
const getDealBtn = document.getElementsByClassName('sell-resources-btn')[0];

const minusWoodDealCount = (e) => {
  e.stopPropagation();
  if(getDealSellWoodCountBox.textContent >= 1) {
    (getDealSellWoodCountBox.textContent = Number(getDealSellWoodCountBox.textContent) - 1);
  }
  (getDealCoinCountBox.textContent = (getDealSellWoodCountBox.textContent) * 50);
}
getDealSellWoodMinusBtn.addEventListener('click', minusWoodDealCount);
const plusWoodDealCount = (e) => {
  e.stopPropagation();
  if(getDealSellWoodCountBox.textContent < Number(localStorage.getItem('wood-all'))) {
    (getDealSellWoodCountBox.textContent = Number(getDealSellWoodCountBox.textContent) + 1);
  }
  (getDealCoinCountBox.textContent = (getDealSellWoodCountBox.textContent) * 50);
}
getDealSellWoodPlusBtn.addEventListener('click', plusWoodDealCount);

  let newCoinCount = Number(localStorage.getItem('coins'));
const soldWood = (e) => {
  e.stopPropagation();
  if (selectWood.value === "spring") {
    let newSpringWoodCount = Number(localStorage.getItem('spring-wood'));
    newSpringWoodCount -= Number(getDealSellWoodCountBox.textContent);
    localStorage.setItem('spring-wood', newSpringWoodCount);
    newCoinCount += Number(getDealCoinCountBox.textContent);
    localStorage.setItem('coins', Number(newCoinCount));
  } else if (selectWood.value === "summer") {
    let newSummerWoodCount = Number(localStorage.getItem('summer-wood'));
    newSummerWoodCount -= Number(getDealSellWoodCountBox.textContent);
    localStorage.setItem('summer-wood', newSummerWoodCount);
    newCoinCount += Number(getDealCoinCountBox.textContent);
    localStorage.setItem('coins', Number(newCoinCount));
  } else if (selectWood.value === "autumn") {
    let newAutumnWoodCount = Number(localStorage.getItem('autumn-wood'));
    newAutumnWoodCount -= Number(getDealSellWoodCountBox.textContent);
    localStorage.setItem('autumn-wood', newAutumnWoodCount);
    newCoinCount += Number(getDealCoinCountBox.textContent);
    localStorage.setItem('coins', Number(newCoinCount));
  } else if (selectWood.value === "winter") {
    let newWinterWoodCount = Number(localStorage.getItem('winter-wood'));
    newWinterWoodCount -= Number(getDealSellWoodCountBox.textContent);
    localStorage.setItem('winter-wood', newWinterWoodCount);
    newCoinCount += Number(getDealCoinCountBox.textContent);
    localStorage.setItem('coins', Number(newCoinCount));
  } else {
    selectWood.style.backgroundColor = "var(--wrong_background_color)";
  }
  game.sellWood();
  setTimeout(() => {
    selectWood.style.backgroundColor = "rgb(97, 91, 81)";
  }, 1000);
}
getDealBtn.addEventListener('click', soldWood);
// FOOD
const getFoodSelect = document.getElementsByClassName('food-select')[0];
const getFoodTitle = document.getElementsByClassName('food-box-item-title')[0];
const getFoodImg = document.getElementsByClassName('food-box-item-img')[0];
const getFoodPrice = document.getElementsByClassName('food-box-item-price')[0];
const getEnergyFromFood = document.getElementsByClassName('food-box-item-energy')[0];
const getFoodBuyBtn = document.getElementsByClassName('food-buy-btn')[0];

const foodList = [
  {
    title: "chiken",
    img: "./assets/img/resources/food/chiken.png",
    price: "10",
    giveEnegry: 20,
  },
  {
    title: "eggs",
    img: "./assets/img/resources/food/eggs.png",
    price: "5",
    giveEnegry: 10,
  },
  {
    title: "meat",
    img: "./assets/img/resources/food/meat.png",
    price: "10",
    giveEnegry: 20,
  },
  {
    title: "soup",
    img: "./assets/img/resources/food/soup.png",
    price: "15",
    giveEnegry: 30,
  },
]
let energyFromFood = 0;
const choiceFood = (e) => {
  e.stopPropagation();
  let foodListLength = foodList.length;
  for(let i = 0; i < foodListLength; i += 1) {
    if (e.target.value === foodList[i].title) {
      getFoodTitle.textContent = foodList[i].title.toUpperCase();
      getFoodImg.src = `${foodList[i].img}`;
      getFoodPrice.textContent = `${foodList[i].price}`;
      getEnergyFromFood.textContent = `${foodList[i].giveEnegry}`;
      energyFromFood = foodList[i].giveEnegry;
      return Number(localStorage.setItem('energy-from-food', energyFromFood));
    }
  }
}
getFoodSelect.addEventListener('click', choiceFood);

const buyFood = (e) => {
  e.stopPropagation();
  let newCointAfterBuyFood = Number(localStorage.getItem('coins')) - Number(getFoodPrice.textContent);
  localStorage.setItem('coins', newCointAfterBuyFood);

  let oldEnergyValue = Number(localStorage.getItem('energy'));
  let newEnergyAfterBuyFood = oldEnergyValue += Number(energyFromFood);
  localStorage.setItem('energy', newEnergyAfterBuyFood);
  game.returnEnergyFromBuyFood();
}
getFoodBuyBtn.addEventListener('click', buyFood);


// AXES-BUY
const axesList = [
  {
    title: "wood",
    img:  "./assets/img/axes/wood.png",
    price: 50,
    giveStrength: 2,
  },
  {
    title: "stone",
    img:  "./assets/img/axes/stone.png",
    price: 100,
    giveStrength: 4,
  },
  {
    title: "steel",
    img:  "./assets/img/axes/steel.png",
    price: 200,
    giveStrength: 6,
  },
];
const getAxesSelect = document.getElementsByClassName('axe-select')[0];
const getAxeTitle = document.getElementsByClassName('axe-box-item-title')[0];
const getAxeImg = document.getElementsByClassName('axe-box-item-img')[0];
const getAxePrice = document.getElementsByClassName('axe-box-item-description-price-sum')[0];
const getAxePowerNumber = document.getElementsByClassName('axe-box-item-description-power-num')[0];

const choiceAxe = (e) => {
  e.stopPropagation();
  let axesListLength = axesList.length;
  for(let i = 0; i  < axesListLength; i +=  1) {
    if(e.target.value === axesList[i].title) {
      getAxeTitle.textContent = axesList[i].title.toUpperCase();
      getAxeImg.src = `${axesList[i].img}`;
      getAxePrice.textContent = `${axesList[i].price}`;
      getAxePowerNumber.textContent = `${axesList[i].giveStrength}`;
    }
  }
}
getAxesSelect.addEventListener('click', choiceAxe);

const getAxeBuyBtn = document.getElementsByClassName('axe-buy-btn')[0];

const buyAxe = (e) => {
  e.stopPropagation();
  console.log(`${getAxeTitle.textContent}`);
  let newCointAfterBuyAxe = Number(localStorage.getItem('coins')) - Number(getAxePrice.textContent);
  localStorage.setItem('coins', newCointAfterBuyAxe);
  localStorage.setItem('strength', getAxePowerNumber.textContent);
}
getAxeBuyBtn.addEventListener('click', buyAxe);

// RAITING
const raitingBox = document.getElementsByClassName('game-menu-box-raiting')[0];
const raitingList = document.getElementsByClassName('game-menu-raiting__items')[0];
const seasons = document.getElementsByClassName('game-menu-raiting__items-item'); // [0]spring, [1]summer, [2]autumn, [3]winter
const leaderBoard = document.getElementsByClassName('raiting-item__top'); // [0]spring, [1]summer, [2]autumn, [3]winter

const showRaitingList = () => {
  if(raitingList.style.display === 'none'){
    raitingList.style.display = 'flex';
  } else {
    raitingList.style.display = 'none';
    leaderBoard[0].style.display = 'none';
    leaderBoard[1].style.display = 'none';
    leaderBoard[2].style.display = 'none';
    leaderBoard[3].style.display = 'none';
    }
}
raitingBox.addEventListener('click', showRaitingList)

const showSpringLeaderBoard = (e) => {
  e.stopPropagation();
  if(leaderBoard[0].style.display === 'none'){
    leaderBoard[0].style.display = 'flex';
    leaderBoard[1].style.display = 'none';
    leaderBoard[2].style.display = 'none';
    leaderBoard[3].style.display = 'none';
  } else {
    leaderBoard[0].style.display = 'none';
    }
}
seasons[0].addEventListener('click', showSpringLeaderBoard);
const showSummerLeaderBoard = (e) => {
  e.stopPropagation();
  if(leaderBoard[1].style.display === 'none'){
    leaderBoard[1].style.display = 'flex';
    leaderBoard[0].style.display = 'none';
    leaderBoard[2].style.display = 'none';
    leaderBoard[3].style.display = 'none';
  } else {
    leaderBoard[1].style.display = 'none';
    }
}
seasons[1].addEventListener('click', showSummerLeaderBoard);
const showAutumnLeaderBoard = (e) => {
  e.stopPropagation();
  if(leaderBoard[2].style.display === 'none'){
    leaderBoard[2].style.display = 'flex';
    leaderBoard[0].style.display = 'none';
    leaderBoard[1].style.display = 'none';
    leaderBoard[3].style.display = 'none';
  } else {
    leaderBoard[2].style.display = 'none';
    }
}
seasons[2].addEventListener('click', showAutumnLeaderBoard);
const showWinterLeaderBoard = (e) => {
  e.stopPropagation();
  if(leaderBoard[3].style.display === 'none'){
    leaderBoard[3].style.display = 'flex';
    leaderBoard[0].style.display = 'none';
    leaderBoard[1].style.display = 'none';
    leaderBoard[2].style.display = 'none';
  } else {
    leaderBoard[3].style.display = 'none';
    }
}
seasons[3].addEventListener('click', showWinterLeaderBoard);

// MENU
const gameBarMenu = document.getElementsByClassName('game-bar-menu-box')[0];
const gameBarMenuWindow = document.getElementsByClassName('game-bar-menu-window')[0];

const showMenu = () => {
  if(gameBarMenuWindow.style.display === 'none'){
    gameBarMenuWindow.style.display = 'flex';
  } else {
    gameBarMenuWindow.style.display = 'none';
    }
}
gameBarMenu.addEventListener('click', showMenu);

const exitToMainBtn = document.getElementsByClassName('game-bar-menu-window__exit-game')[0];

const exitToMain = () => {
  gameSection.style.display = "none";
  loginSection.style.display = "flex";
}
exitToMainBtn.addEventListener('click', exitToMain);