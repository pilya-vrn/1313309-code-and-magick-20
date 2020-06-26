'use strict';

var userDialog = document.querySelector('.setup');
var setupWizardForm = userDialog.querySelector('.setup-wizard-form');
var setupWizard = setupWizardForm.querySelector('.setup-player');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setupWizard.querySelector('.setup-fireball-wrap');

(function () {
  var wizardCoatChanger = function () {
    var wizardCoatColor = window.getRandomValue(window.COAT_COLORS);

    wizardCoat.style.fill = wizardCoatColor;
    setupWizardForm.querySelector('input[name="coat-color"]').value = wizardCoatColor;
  };

  var wizardEyesChanger = function () {
    var wizardEyesColor = window.getRandomValue(window.EYES_COLORS);

    wizardEyes.style.fill = wizardEyesColor;
    setupWizardForm.querySelector('input[name="eyes-color"]').value = wizardEyesColor;
  };

  var fireballChanger = function () {
    var fireballColor = window.getRandomValue(window.FIREBALL_COLORS);

    fireball.style.backgroundColor = fireballColor;
    setupWizardForm.querySelector('input[name="fireball-color"]').value = fireballColor;
  };

  wizardCoat.addEventListener('click', wizardCoatChanger);

  wizardEyes.addEventListener('click', wizardEyesChanger);

  fireball.addEventListener('click', fireballChanger);
})();
