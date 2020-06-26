'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 25;
  var FONT_GAP = 16;
  var BAR_WIDTH = 40;
  var PRINT_COLOR = '#000';
  var FONT_STYLE = '16px PT Mono';
  var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;
  var barHeightMax = 150;


  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    return Math.max.apply(null, arr);
  };

  var getRandomColor = function (players, i) {
    var color = 'hsl(240,' + Math.round(Math.random() * 100) + '%, 50%)';

    if (players[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }

    return color;
  };

  var renderBar = function (ctx, players, times, i) {
    var maxTime = getMaxElement(times);
    ctx.fillRect(CLOUD_X + 2 * GAP + (BAR_WIDTH + 2 * GAP) * i, CLOUD_Y + GAP + (barHeight - (barHeightMax * times[i]) / maxTime),
        BAR_WIDTH, (barHeightMax * times[i]) / maxTime);
  };

  var renderText = function (ctx, players, times, i) {
    var maxTime = getMaxElement(times);
    ctx.fillStyle = PRINT_COLOR;
    ctx.fillText(players[i], CLOUD_X + 2 * GAP + (BAR_WIDTH + 2 * GAP) * i, CLOUD_HEIGHT - GAP / 2);
    ctx.fillText(Math.round(times[i]), CLOUD_X + 2 * GAP + (BAR_WIDTH + 2 * GAP) * i,
        CLOUD_Y + GAP + (barHeight - (barHeightMax * times[i]) / maxTime) - FONT_GAP / 2);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = PRINT_COLOR;
    ctx.font = FONT_STYLE;
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP / 4);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + FONT_GAP / 4);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = getRandomColor(players, i);
      renderBar(ctx, players, times, i);
      renderText(ctx, players, times, i);
    }
  };
})();
