'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var setupSimilarItem = similarWizardTemplate.content.querySelector('.setup-similar-item');

  var getRandomValue = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  /* var createWizards = function (amount) {
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
  */

  var renderWizard = function (wizards) {
    var wizardElement = setupSimilarItem.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.backend.load(successHandler, window.backend.errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

  var setupWizardForm = userDialog.querySelector('.setup-wizard-form');
  var setupWizard = setupWizardForm.querySelector('.setup-player');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = setupWizard.querySelector('.setup-fireball-wrap');
  var inputCoatColor = setupWizardForm.querySelector('input[name="coat-color"]');
  var inputEyesColor = setupWizardForm.querySelector('input[name="eyes-color"]');
  var inputFireballColor = setupWizardForm.querySelector('input[name="fireball-color"]');

  var wizardCoatChanger = function () {
    var wizardCoatColor = getRandomValue(COAT_COLORS);

    wizardCoat.style.fill = wizardCoatColor;
    inputCoatColor.value = wizardCoatColor;
  };

  var wizardEyesChanger = function () {
    var wizardEyesColor = getRandomValue(EYES_COLORS);

    wizardEyes.style.fill = wizardEyesColor;
    inputEyesColor.value = wizardEyesColor;
  };

  var fireballChanger = function () {
    var fireballColor = getRandomValue(FIREBALL_COLORS);

    fireball.style.backgroundColor = fireballColor;
    inputFireballColor.value = fireballColor;
  };

  wizardCoat.addEventListener('click', wizardCoatChanger);
  wizardEyes.addEventListener('click', wizardEyesChanger);
  fireball.addEventListener('click', fireballChanger);
})();
