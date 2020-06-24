'use strict';

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarItem = similarWizardTemplate.content.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupWizardForm = userDialog.querySelector('.setup-wizard-form');
var setupWizard = setupWizardForm.querySelector('.setup-player');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setupWizard.querySelector('.setup-fireball-wrap');
var wizardNameTarget = document.querySelector('.setup-user-name');

var getRandomValue = function (arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

var createWizards = function (amount) {
  var wizards = [];
  var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardsSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  for (var j = 0; j < amount; j++) {
    wizards[j] = {
      name: getRandomValue(wizardsName) + ' ' + getRandomValue(wizardsSurname),
      coatColor: getRandomValue(COAT_COLORS),
      eyesColor: getRandomValue(EYES_COLORS)
    };
  }

  return wizards;
};

var wizardsList = createWizards(4);

var createWizardElement = function (wizard) {
  var wizardElement = setupSimilarItem.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizardElement(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizards(wizardsList);

// создание мага и отправка формы
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== wizardNameTarget) {
    evt.preventDefault();
    closePopupOnClick();
  }
};

var openPopupOnClick = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopupOnClick = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopupOnClick);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopupOnClick();
  }
});

setupClose.addEventListener('click', closePopupOnClick);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopupOnClick();
  }
});

var wizardCoatChanger = function () {
  var wizardCoatColor = getRandomValue(COAT_COLORS);

  wizardCoat.style.fill = wizardCoatColor;
  setupWizardForm.querySelector('input[name="coat-color"]').value = wizardCoatColor;
};

var wizardEyesChanger = function () {
  var wizardEyesColor = getRandomValue(EYES_COLORS);

  wizardEyes.style.fill = wizardEyesColor;
  setupWizardForm.querySelector('input[name="eyes-color"]').value = wizardEyesColor;
};

var fireballChanger = function () {
  var fireballColor = getRandomValue(FIREBALL_COLORS);

  fireball.style.backgroundColor = fireballColor;
  setupWizardForm.querySelector('input[name="fireball-color"]').value = fireballColor;
};

wizardCoat.addEventListener('click', wizardCoatChanger);

wizardEyes.addEventListener('click', wizardEyesChanger);

fireball.addEventListener('click', fireballChanger);
