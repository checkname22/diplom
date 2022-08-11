'use strict';
class Player {
  constructor(image, width, height, tree, seasons)  {
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.strength = Number(localStorage.getItem('strength')) || 1;
    this.energy = Number(localStorage.getItem('energy'));
    this.isPowerForWork = localStorage.getItem('power-for-work') || true;

    this.tree = tree;
    this.timeTreeCutting = 6000 - (this.strength * 1000);

    this.seasons = seasons;
    document.addEventListener('click', this.cutTree);
  }
  playerEnergy = () => {
    document.getElementsByClassName('character-energy_energy-line')[0].style.width = `${this.energy}px`;
    document.getElementsByClassName('character-energy_energy-persent')[0].textContent = `${this.energy}%`;

    if(this.energy > 50) {
      document.getElementsByClassName('character-energy_energy-persent')[0].style.color = `var(--correct_color)`;
    } else {
      document.getElementsByClassName('character-energy_energy-persent')[0].style.color = `var(--wrong_color)`;
    }

    if(this.energy < 0) {
      this.energy = 0;
      localStorage.setItem('energy', this.energy);
    } else if (this.energy > 100) {
      this.energy = 100;
      localStorage.setItem('energy', this.energy);
    }

    if(localStorage.getItem('energy') == 0) {
      this.isPowerForWork = false;
      localStorage.setItem('power-for-work', this.isPowerForWork);
    } else {
      this.isPowerForWork = true;
      localStorage.setItem('power-for-work', this.isPowerForWork);
    }
  }
  cutTheSpringTree = (e) => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      if(e.target === this.tree.springTrees[i].target) {
        this.energy -= 10;
        localStorage.setItem('energy', this.energy);

        this.tree.springTrees[i].target.style.display = "none";

        this.tree.springTrees[i].timer.style.display = `flex`;
        this.tree.springTrees[i].timer.textContent = `${(this.timeTreeCutting / 1000)}`;
        let counter = (this.timeTreeCutting / 1000) - 1;

        let treeCutted = setInterval(() => {
          this.tree.springTrees[i].timer.textContent = `${counter}`;
          counter -= 1;

          if(counter < 0) {
            this.tree.springTrees[i].timer.style.display = `none`;
            this.tree.springTrees[i].isTreeCutted = true;
            this.tree.springTrees[i].image = this.tree.stump;
            clearInterval(treeCutted);
            game.getWood();
          }
        }, 1000);

        setTimeout(() => {
          this.tree.springTreeGrowUp(this.tree.springTrees, i);
        }, this.tree.treeGrowUpRandom() + this.timeTreeCutting);
      }
    }
  }
  cutTheSummerTree = (e) => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      if(e.target === this.tree.summerTrees[i].target) {
        this.energy -= 10;
        localStorage.setItem('energy', this.energy);

        this.tree.summerTrees[i].target.style.display = "none";

        this.tree.summerTrees[i].timer.style.display = `flex`;
        this.tree.summerTrees[i].timer.textContent = `${(this.timeTreeCutting / 1000)}`;
        let counter = (this.timeTreeCutting / 1000) - 1;

        let treeCutted = setInterval(() => {
          this.tree.summerTrees[i].timer.textContent = `${counter}`;
          counter -= 1;

          if(counter < 0) {
            this.tree.summerTrees[i].timer.style.display = `none`;
            this.tree.summerTrees[i].isTreeCutted = true;
            this.tree.summerTrees[i].image = this.tree.stump;
            clearInterval(treeCutted);
            game.getWood();
          }
        }, 1000);

        setTimeout(() => {
          this.tree.summerTreeGrowUp(this.tree.summerTrees, i);
        }, this.tree.treeGrowUpRandom() + this.timeTreeCutting);
      }
    }
  }
  cutTheAutumnTree = (e) => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      if(e.target === this.tree.autumnTrees[i].target) {
        this.energy -= 10;
        localStorage.setItem('energy', this.energy);

        this.tree.autumnTrees[i].target.style.display = "none";

        this.tree.autumnTrees[i].timer.style.display = `flex`;
        this.tree.autumnTrees[i].timer.textContent = `${(this.timeTreeCutting / 1000)}`;
        let counter = (this.timeTreeCutting / 1000) - 1;

        let treeCutted = setInterval(() => {
          this.tree.autumnTrees[i].timer.textContent = `${counter}`;
          counter -= 1;

          if(counter < 0) {
            this.tree.autumnTrees[i].timer.style.display = `none`;
            this.tree.autumnTrees[i].isTreeCutted = true;
            this.tree.autumnTrees[i].image = this.tree.stump;
            clearInterval(treeCutted);
            game.getWood();
          }
        }, 1000);

        setTimeout(() => {
          this.tree.autumnTreeGrowUp(this.tree.autumnTrees, i);
        }, this.tree.treeGrowUpRandom() + this.timeTreeCutting);
      }
    }
  }
  cutTheWinterTree = (e) => {
    for(let i = 0; i < this.tree.treesAmount; i += 1) {
      if(e.target === this.tree.winterTrees[i].target) {
        this.energy -= 10;
        localStorage.setItem('energy', this.energy);

        this.tree.winterTrees[i].target.style.display = "none";

        this.tree.winterTrees[i].timer.style.display = `flex`;
        this.tree.winterTrees[i].timer.textContent = `${(this.timeTreeCutting / 1000)}`;
        let counter = (this.timeTreeCutting / 1000) - 1;

        let treeCutted = setInterval(() => {
          this.tree.winterTrees[i].timer.textContent = `${counter}`;
          counter -= 1;

          if(counter < 0) {
            this.tree.winterTrees[i].timer.style.display = `none`;
            this.tree.winterTrees[i].isTreeCutted = true;
            this.tree.winterTrees[i].image = this.tree.stump;
            clearInterval(treeCutted);
            game.getWood();
          }
        }, 1000);

        setTimeout(() => {
          this.tree.winterTreeGrowUp(this.tree.winterTrees, i);
        }, this.tree.treeGrowUpRandom() + this.timeTreeCutting);
      }
    }
  }
  cutTree = () => {
    if(this.seasons.season === "spring") {
      if (this.isPowerForWork) {
      document.addEventListener('click', this.cutTheSpringTree);
    } else {
      console.log('not enougth energy');
      document.removeEventListener('click', this.cutTheSpringTree);
    }
    } else if (this.seasons.season === "summer") {
      if (this.isPowerForWork) {
        document.addEventListener('click', this.cutTheSummerTree);
      } else {
        console.log('not enougth energy');
        document.removeEventListener('click', this.cutTheSummerTree);
      }
    } else if (this.seasons.season === "autumn") {
      if (this.isPowerForWork) {
        document.addEventListener('click', this.cutTheAutumnTree);
      } else {
        console.log('not enougth energy');
        document.removeEventListener('click', this.cutTheAutumnTree);
      }
    } else if (this.seasons.season === "winter") {
    if (this.isPowerForWork) {
      document.addEventListener('click', this.cutTheWinterTree);
    } else {
      console.log('not enougth energy');
      document.removeEventListener('click', this.cutTheWinterTree);
    }
  }
   
  }
}