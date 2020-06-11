'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarItem = similarWizardTemplate.content.querySelector('.setup-similar-item');
var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var createWizards = function () {
  for (var j = 0; j < 4; j++) {
    wizards[j] = {name: wizardsName[Math.floor(Math.random() * wizardsName.length)] + ' ' + wizardsSurname[Math.floor(Math.random() * wizardsSurname.length)],
      coatColor: coatColor[Math.floor(Math.random() * coatColor.length)],
      eyesColor: eyesColor[Math.floor(Math.random() * eyesColor.length)]};
  }
};

createWizards();

var renderWizard = function (wizard) {
  var wizardElement = setupSimilarItem.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createDOM = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

createDOM();


