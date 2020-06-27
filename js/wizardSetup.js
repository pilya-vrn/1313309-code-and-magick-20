'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupWizardForm = userDialog.querySelector('.setup-wizard-form');
  var setupWizard = setupWizardForm.querySelector('.setup-player');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = setupWizard.querySelector('.setup-fireball-wrap');
  var inputCoatColor = setupWizardForm.querySelector('input[name="coat-color"]');
  var inputEyesColor = setupWizardForm.querySelector('input[name="eyes-color"]');
  var inputFireballColor = setupWizardForm.querySelector('input[name="fireball-color"]');

  var wizardCoatChanger = function () {
    var wizardCoatColor = window.setup.getRandomValue(window.setup.COAT_COLORS);

    wizardCoat.style.fill = wizardCoatColor;
    inputCoatColor.value = wizardCoatColor;
  };

  var wizardEyesChanger = function () {
    var wizardEyesColor = window.setup.getRandomValue(window.setup.EYES_COLORS);

    wizardEyes.style.fill = wizardEyesColor;
    inputEyesColor.value = wizardEyesColor;
  };

  var fireballChanger = function () {
    var fireballColor = window.setup.getRandomValue(window.setup.FIREBALL_COLORS);

    fireball.style.backgroundColor = fireballColor;
    inputFireballColor.value = fireballColor;
  };

  wizardCoat.addEventListener('click', wizardCoatChanger);
  wizardEyes.addEventListener('click', wizardEyesChanger);
  fireball.addEventListener('click', fireballChanger);
})();
