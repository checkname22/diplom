const getChoiceCharacterImg = document.getElementsByClassName('choice-character-img')[0];
getChoiceCharacterImg.src = `${localStorage.getItem('character-image')}`;

const getChoiceCharacterName = document.getElementsByClassName('choice-character-name')[0];
getChoiceCharacterName.textContent = localStorage.getItem('character-name');

const getChoiceCharacterEnergy = document.getElementsByClassName('choice-character-energy')[0];
getChoiceCharacterEnergy.textContent = `${localStorage.getItem('energy')}%`;

const getChoiceCharacterStr = document.getElementsByClassName('choice-character-str')[0];
getChoiceCharacterStr.textContent = localStorage.getItem('strength') || 1;

const getChoiceCharacterResources = document.getElementsByClassName('choice-character-resoursec')[0];
getChoiceCharacterResources.textContent = localStorage.getItem('wood-all');

const getChoiceCharacterSection = document.getElementsByClassName('choice-character-section')[0];
const getChoiceBtnInGame = document.getElementsByClassName('choice-btn-in-game')[0];
const getChoiceBtnBack = document.getElementsByClassName('choice-btn-back')[0];

const inGame = () => {
  getChoiceCharacterSection.style.display = 'none';
  gameSection.style.display = 'flex';
}
getChoiceBtnInGame.addEventListener('click', inGame);

const goBackFromChoiceCharacter = () => {
  getChoiceCharacterSection.style.display = 'none';
  loginSection.style.display = 'flex';
}
getChoiceBtnBack.addEventListener('click', goBackFromChoiceCharacter);