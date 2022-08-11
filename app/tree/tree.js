class Tree {
  constructor(image, width, height) {
    this.image = image;
    this.springTreeImg = document.getElementsByClassName('spring-tree')[0];
    this.summerTreeImg = document.getElementsByClassName('summer-tree')[0];
    this.autumnTreeImg = document.getElementsByClassName('autumn-tree')[0];
    this.winterTreeImg = document.getElementsByClassName('winter-tree')[0];
    this.stump = document.getElementsByClassName('stump')[0];
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;

    this.treesAmount = 5;
    this.isTreeCutted = false;
    this.growUpMin = 5000;
    this.growUpMax = 11000;
    this.treesCoord = [
      {
        x: (window.innerWidth / 2) - (this.width + 570), 
        y: (window.innerHeight / 2) - (this.height - 250), 
      }, 
      {
        x: (window.innerWidth / 2) - (this.width + 400),
        y: (window.innerHeight / 2) - (this.height + 150), 
      }, 
      {
        x: (window.innerWidth / 2) - (this.width - 350), 
        y: (window.innerHeight / 2) - (this.height + 180), 
      },
      {
        x: (window.innerWidth / 2) - (this.width - 540), 
        y: (window.innerHeight / 2) - (this.height - 400), 
      },
      {
        x: (window.innerWidth / 2) - (this.width - 750), 
        y: (window.innerHeight / 2) - (this.height - 100),
      },
    ]
    this.target = document.createElement('div');
    this.timer = document.createElement('div');
    this.springTrees = [];
    this.summerTrees = [];
    this.autumnTrees = [];
    this.winterTrees = [];
  }
  treeGrowUpRandom = () => {
    return Math.floor((Math.random() * (this.growUpMax - this.growUpMin) + this.growUpMin));
  }
  springTreeGrowUp = (target,i) => {
    target[i].target.textContent = "C";
    target[i].target.style.display = "flex";
    target[i].target.style.justifyContent = "center";
    this.springTrees[i].isTreeCutted = false;
    this.springTrees[i].image = this.springTreeImg;

    if(this.springTrees[i].isTreeCutted === true) {
      target[i].target.style.display = "none";
    }
  }
  summerTreeGrowUp = (target,i) => {
    target[i].target.textContent = "C";
    target[i].target.style.display = "flex";
    target[i].target.style.justifyContent = "center";
    this.summerTrees[i].isTreeCutted = false;
    this.summerTrees[i].image = this.summerTreeImg;
    
    if(this.summerTrees[i].isTreeCutted === true) {
      target[i].target.style.display = "none";
    }
  }
  autumnTreeGrowUp = (target,i) => {
    target[i].target.textContent = "C";
    target[i].target.style.display = "flex";
    target[i].target.style.justifyContent = "center";
    this.autumnTrees[i].isTreeCutted = false;
    this.autumnTrees[i].image = this.autumnTreeImg;
        
    if(this.autumnTrees[i].isTreeCutted === true) {
      target[i].target.style.display = "none";
    }
  }
  winterTreeGrowUp = (target,i) => {
    target[i].target.textContent = "C";
    target[i].target.style.display = "flex";
    target[i].target.style.justifyContent = "center";
    this.winterTrees[i].isTreeCutted = false;
    this.winterTrees[i].image = this.winterTreeImg;

    if(this.winterTrees[i].isTreeCutted === true) {
      target[i].target.style.display = "none";
    }
  }
}