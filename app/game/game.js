'use strict';

class Game {
  constructor(canvas, player, tree, house, seasons, time) {
    this.canvas = canvas;
    this.player = player;
    this.tree = tree;
    this.house = house;
    this.seasons = seasons;
    this.time = time;
    this.energy = Number(player.energy);

    this.wood = {
      springWood: Number(localStorage.getItem("spring-wood") || 0),
      summerWood: Number(localStorage.getItem("summer-wood") || 0),
      autumnWood: Number(localStorage.getItem("autumn-wood") || 0),
      winterWood: Number(localStorage.getItem("winter-wood") || 0),
      woodAll: Number(localStorage.getItem("spring-wood") || 0) + Number(localStorage.getItem("summer-wood") || 0) + Number(localStorage.getItem("autumn-wood") || 0) + Number(localStorage.getItem("winter-wood") || 0),
    }
    
    this.drawId = null;
    window.addEventListener('load', this.init);
  }
  localStorageSafe = () => {
    document.getElementsByClassName('resources-wood-box__item_count-spring')[0].textContent = Number(localStorage.getItem("spring-wood")) || 0;
    document.getElementsByClassName('resources-wood-box__item_count-summer')[0].textContent = Number(localStorage.getItem("summer-wood")) || 0;
    document.getElementsByClassName('resources-wood-box__item_count-autumn')[0].textContent = Number(localStorage.getItem("autumn-wood")) || 0;
    document.getElementsByClassName('resources-wood-box__item_count-winter')[0].textContent = Number(localStorage.getItem("winter-wood")) || 0;
 
    localStorage.setItem('wood-all', this.wood.woodAll);
    document.getElementsByClassName('resources-all-wood-box-count')[0].textContent = Number(localStorage.getItem('wood-all')) || 0;
    document.getElementsByClassName('resources-coins-box_count')[0].textContent = Number(localStorage.getItem('coins')) || 0;

    document.getElementsByClassName('game-menu-box-character-name')[0].textContent = localStorage.getItem('character-name') || "name";

    document.getElementsByClassName('player')[0].src = localStorage.getItem('character-image') || "./assets/img/players/man.png";
    document.getElementsByClassName('character-energy_energy-persent')[0].textContent = Number(localStorage.getItem('energy')) || 0;
    localStorage.getItem('power-for-work');
    this.player.strength = Number(localStorage.getItem('strength')) || 1;
  }
  init = () => {
    this.time.clock();

    if(localStorage.getItem("season") === "0") {
      this.seasons.winter();
    } else if (localStorage.getItem("season") === "1") {
      this.seasons.spring();
    } else if (localStorage.getItem("season") === "2") {
      this.seasons.summer();
    } else {
      this.seasons.autumn();
    }
    this.time.changeSeasons();
    game.startDraw();
  }
  renderFrame() {
    this.localStorageSafe();
    this.canvas.canvasClear();
    this.drawSpringTrees();
    this.drawSummerTrees();
    this.drawAutumnTrees();
    this.drawWinterTrees();
    this.drawHouse();
    this.drawPlayer();
    this.player.playerEnergy();
  }
  startDraw = () => {
    this.drawId = requestAnimationFrame(this.startDraw)
    this.renderFrame();
  }
  drawPlayer() {
    this.canvas.canvasDraw(
      this.player.image,
      this.player.x = this.house.x + 170,
      this.player.y = this.house.y + 170,
      this.player.width,
      this.player.height,
    )
  }
  drawHouse() {
    this.canvas.canvasDraw(
      this.house.image,
      this.house.x = ((this.canvas.width / 2) - (this.house.width - 126)),
      this.house.y = ((this.canvas.height / 2) - (this.house.height + 120)),
      this.house.width,
      this.house.height
    )
  }
  drawSpringTrees() {
    this.tree.springTrees.forEach((tree) => {
      this.canvas.canvasDraw(
        tree.image,
        tree.x,
        tree.y,
        tree.width,
        tree.height,
      )
    })
  }
  drawSummerTrees() {
    this.tree.summerTrees.forEach((tree) => {
      this.canvas.canvasDraw(
        tree.image,
        tree.x,
        tree.y,
        tree.width,
        tree.height,
      )
    })
  }
  drawAutumnTrees() {
    this.tree.autumnTrees.forEach((tree) => {
      this.canvas.canvasDraw(
        tree.image,
        tree.x,
        tree.y,
        tree.width,
        tree.height,
      )
    })
  }
  drawWinterTrees() {
    this.tree.winterTrees.forEach((tree) => {
      this.canvas.canvasDraw(
        tree.image,
        tree.x,
        tree.y,
        tree.width,
        tree.height,
      )
    })
  }
  getWood = () => {
    if(this.seasons.season === "spring") {
        this.wood.springWood += 1;
        localStorage.setItem("spring-wood", this.wood.springWood);
    } else if (this.seasons.season === "summer") {
        this.wood.summerWood += 1;
        localStorage.setItem("summer-wood", this.wood.summerWood);
    } else if (this.seasons.season === "autumn") {
        this.wood.autumnWood += 1;
        localStorage.setItem("autumn-wood", this.wood.autumnWood);
    } else if (this.seasons.season === "winter") {
        this.wood.winterWood += 1;
        localStorage.setItem("winter-wood", this.wood.winterWood);
    }
    this.wood.woodAll += 1;
  }
  sellWood = () => {
    this.wood.woodAll -= Number(getDealSellWoodCountBox.textContent);
  }
  returnEnergyFromBuyFood = () => {
    console.log(this.player.energy)
    this.player.energy += Number(localStorage.getItem('energy-from-food'));
    console.log(this.player.energy)
  }
}

localStorage.setItem('season', localStorage.getItem('season') || 1);
localStorage.setItem('character-name', localStorage.getItem('character-name') || 'noName');
localStorage.setItem('energy', localStorage.getItem('energy') || 100);