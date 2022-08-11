'use strict';

class Seasons {
  constructor(tree) {
    this.tree = tree;
    this.season = "";
    this.timeToChangeSeason = 60000;
    this.seasonsCounter = Number(localStorage.getItem('season') || 1);
  }
  spring = () => {
    document.getElementsByClassName('canvas')[0].classList.remove('winter');
    document.getElementsByClassName('canvas')[0].classList.add('spring');
    this.season = "spring";
    document.getElementsByClassName('game-menu-season__item')[0].textContent = this.season.toUpperCase();
    document.getElementsByClassName('game-menu-season__item')[0].style.color = "var(--spring-color)";
    document.getElementsByClassName('game-menu-weather__item')[0].textContent = "CLOUDY"
    document.getElementsByClassName('game-menu-weather__item')[0].style.color = "var(--spring-color)";
    document.getElementsByClassName('house')[0].src = "./assets/img/house/summer-house.png"
    this.tree.winterTrees = [];
    this.createSpringTree();
  }
  createSpringTree = () => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      const tree = new Tree(this.tree.springTreeImg, this.tree.width, this.tree.height);
      tree.x = this.tree.treesCoord[i].x;
      tree.y = this.tree.treesCoord[i].y;

      tree.target.style.top = (tree.y + 300) + "px";
      tree.target.style.left = (tree.x + 115) + "px";
      tree.target.classList.add('target');
      tree.target.textContent = "C";
      tree.target.style.backgroundColor = "grey";
      tree.target.style.textAlign = "center";

      tree.timer.style.top = (tree.y + 345) + "px";
      tree.timer.style.left = (tree.x + 93) + "px";
      tree.timer.classList.add('timer-box');
      
      document.getElementsByClassName('game-section')[0].append(tree.target, tree.timer);

      this.tree.springTrees.push(tree);
    }
  }
  summer = () => {
    document.getElementsByClassName('canvas')[0].classList.remove('spring');
    document.getElementsByClassName('canvas')[0].classList.add('summer');
    this.season = "summer";
    document.getElementsByClassName('game-menu-season__item')[0].textContent = this.season.toUpperCase();
    document.getElementsByClassName('game-menu-season__item')[0].style.color = "var(--summer-color)";
    document.getElementsByClassName('game-menu-weather__item')[0].textContent = "SUNNY"
    document.getElementsByClassName('game-menu-weather__item')[0].style.color = "var(--summer-color)";
    this.tree.springTrees = [];
    this.createSummerTree();
  }
  createSummerTree = () => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      const tree = new Tree(this.tree.summerTreeImg, this.tree.width, this.tree.height);
      tree.x = this.tree.treesCoord[i].x;
      tree.y = this.tree.treesCoord[i].y;

      tree.target.style.top = (tree.y + 300) + "px";
      tree.target.style.left = (tree.x + 115) + "px";
      tree.target.classList.add('target');
      tree.target.textContent = "C";
      tree.target.style.backgroundColor = "grey";
      tree.target.style.textAlign = "center";

      tree.timer.style.top = (tree.y + 345) + "px";
      tree.timer.style.left = (tree.x + 93) + "px";
      tree.timer.classList.add('timer-box');
      
      document.getElementsByClassName('game-section')[0].append(tree.target, tree.timer);


      this.tree.summerTrees.push(tree);
    }
  }
  autumn = () => {
    document.getElementsByClassName('canvas')[0].classList.remove('summer');
    document.getElementsByClassName('canvas')[0].classList.add('autumn');
    this.season = "autumn";
    document.getElementsByClassName('game-menu-season__item')[0].textContent = this.season.toUpperCase();
    document.getElementsByClassName('game-menu-season__item')[0].style.color = "var(--autumn-color)";
    document.getElementsByClassName('game-menu-weather__item')[0].textContent = "RAINY"
    document.getElementsByClassName('game-menu-weather__item')[0].style.color = "var(--autumn-color)";
    this.tree.summerTrees = [];
    this.createAutumnTree();
  }
  createAutumnTree = () => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      const tree = new Tree(this.tree.autumnTreeImg, this.tree.width, this.tree.height);
      tree.x = this.tree.treesCoord[i].x;
      tree.y = this.tree.treesCoord[i].y;

      tree.target.style.top = (tree.y + 300) + "px";
      tree.target.style.left = (tree.x + 115) + "px";
      tree.target.classList.add('target');
      tree.target.textContent = "C";
      tree.target.style.backgroundColor = "grey";
      tree.target.style.textAlign = "center";

      tree.timer.style.top = (tree.y + 345) + "px";
      tree.timer.style.left = (tree.x + 93) + "px";
      tree.timer.classList.add('timer-box');
      
      document.getElementsByClassName('game-section')[0].append(tree.target, tree.timer);


      this.tree.autumnTrees.push(tree);
    }
  }
  winter = () => {
    document.getElementsByClassName('canvas')[0].classList.remove('autumn');
    document.getElementsByClassName('canvas')[0].classList.add('winter');
      this.season = "winter";
      document.getElementsByClassName('game-menu-season__item')[0].textContent = this.season.toUpperCase();
      document.getElementsByClassName('game-menu-season__item')[0].style.color = "var(--winter-color)";
      document.getElementsByClassName('game-menu-weather__item')[0].textContent = "SNOWY"
      document.getElementsByClassName('game-menu-weather__item')[0].style.color = "var(--winter-color)";
      document.getElementsByClassName('house')[0].src = "./assets/img/house/winter-house.png"
      this.tree.autumnTrees = [];
      this.createWinterTree();
  }
  createWinterTree = () => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      const tree = new Tree(this.tree.winterTreeImg, this.tree.width, this.tree.height);
      tree.x = this.tree.treesCoord[i].x;
      tree.y = this.tree.treesCoord[i].y;

      tree.target.style.top = (tree.y + 300) + "px";
      tree.target.style.left = (tree.x + 115) + "px";
      tree.target.classList.add('target');
      tree.target.textContent = "C";
      tree.target.style.backgroundColor = "grey";
      tree.target.style.textAlign = "center";

      tree.timer.style.top = (tree.y + 345) + "px";
      tree.timer.style.left = (tree.x + 93) + "px";
      tree.timer.classList.add('timer-box');
      
      document.getElementsByClassName('game-section')[0].append(tree.target, tree.timer);


      this.tree.winterTrees.push(tree);
    }
  }
}