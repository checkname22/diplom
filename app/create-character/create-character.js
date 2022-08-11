'use strict';

const character = {
  man: "./assets/img/players/man.png",
  woman: "./assets/img/players/woman.png",
  gender: "",
  isCreate: false,
}

const genderMaleBtn = document.getElementsByClassName('create-character-gender-male')[0];
const genderFemaleBtn = document.getElementsByClassName('create-character-gender-female')[0];
const characterImage = document.getElementsByClassName('create-character-person-box__image')[0];

const choiceGenderMale = () => {
  characterImage.src = character.man;
  character.gender = "man";
  genderFemaleBtn.classList.remove('active-btn');
  genderMaleBtn.classList.add('active-btn');
}
genderMaleBtn.addEventListener('click', choiceGenderMale);

const choiceGenderFemale = () => {
  characterImage.src = character.woman;
  character.gender = "woman";
  genderMaleBtn.classList.remove('active-btn');
  genderFemaleBtn.classList.add('active-btn');
}
genderFemaleBtn.addEventListener('click', choiceGenderFemale);


const createCharacterSection = document.getElementsByClassName('create-character-section')[0];
const gameSection = document.getElementsByClassName('game-section')[0];
const exitCreateCharacterBtn = document.getElementsByClassName('create-character-menu-exit')[0];
const createCharacterBtn = document.getElementsByClassName('create-character-menu-create')[0];

const exitCreateCharacter = () => {
  createCharacterSection.style.display = "none";
  loginSection.style.display = "flex";
}
exitCreateCharacterBtn.addEventListener('click', exitCreateCharacter);

const createCharacter = () => {
  if (character.gender === "man") {
    localStorage.setItem('character-image', character.man)
  } else if (character.gender === "woman") {
    localStorage.setItem('character-image', character.woman)
  }

  if(localStorage.getItem("character-name") === "") {
    permisionNameCharacterName.textContent = "WRITE YOUR NAME";
    permisionNameCharacterName.style.color = "var(--wrong_color)"
  } else {
    createCharacterSection.style.display = "none";
    gameSection.style.display = "flex";
    character.isCreate = true;
    localStorage.setItem('is-create', character.isCreate);
  }
}
createCharacterBtn.addEventListener('click', createCharacter);


const inputCreateCharacterName = document.getElementsByClassName('create-character-person-input-name')[0];
const permisionNameCharacterName = document.getElementsByClassName('create-character-person-permision')[0];
const btnCreateCharacterName = document.getElementsByClassName('create-character-person-btn-name')[0];

const getValueFromInputCreateCharacter = () => {
  if (inputCreateCharacterName.value !== "" && inputCreateCharacterName.value.length > 2) {
    permisionNameCharacterName.textContent = "NAME ALLOWED";
    permisionNameCharacterName.style.color = "var(--correct_color)"
  } else {
    permisionNameCharacterName.textContent = "WRITE YOUR NAME";
    permisionNameCharacterName.style.color = "var(--wrong_color)"
  }

  localStorage.setItem("character-name", inputCreateCharacterName.value)
}
btnCreateCharacterName.addEventListener('click', getValueFromInputCreateCharacter);