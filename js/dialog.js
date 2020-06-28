'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var wizardNameTarget = document.querySelector('.setup-user-name');

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

  var onEnterClickSetupOpener = function (evt) {
    if (evt.key === 'Enter') {
      openPopupOnClick();
    }
  };

  var onEnterClickSetupCloser = function (evt) {
    if (evt.key === 'Enter') {
      closePopupOnClick();
    }
  };

  setupOpen.addEventListener('click', openPopupOnClick);
  setupOpen.addEventListener('keydown', onEnterClickSetupOpener);

  setupClose.addEventListener('click', closePopupOnClick);
  setupClose.addEventListener('keydown', onEnterClickSetupCloser);
})();
