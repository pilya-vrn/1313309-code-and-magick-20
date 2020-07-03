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


  var dialogHandle = userDialog.querySelector('.upload');

  var dialogMover = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  dialogHandle.addEventListener('mousedown', dialogMover);
})();
