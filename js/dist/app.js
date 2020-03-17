(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _fixHeader = require('./fixHeader');

var _fixHeader2 = _interopRequireDefault(_fixHeader);

var _sp = require('./sp');

var _sp2 = _interopRequireDefault(_sp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fixHeader2.default)();

(0, _sp2.default)();

$(function () {
  // gnavカテゴリの数を制限
  var gNav = $('#gNav').children('li');
  for (var i = 0; i < gNav.length; i++) {
    if (i > 4) {
      $(gNav[i]).remove();
    }
  }
  $('#gNav li:has(.children)').addClass('cat-parent');
  $('#gNav').css('opacity', 1);
});

// ページロード完了後に発火
$(window).on('load', function () {
  if ($('.entry-thumbnail').length) {
    $('.entry-thumbnail').each(function () {
      var data = $(this).attr('data-thumb');
      $(this).find('.thumb-spinner').fadeOut(1000);
      if (!data == '') {
        $(this).append('<img src="' + data + '" alt="">');
      } else {
        $(this).find('.dummy_logo').fadeIn(1000);
      }
      $(this).find('img').fadeIn(1000);
      $(this).find('.thumb-spinner').remove();
    });
  }
});

},{"./fixHeader":2,"./sp":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // 可変ヘッダー
  var $win = $(window);
  var $header = $('#header');
  var $main = $('#main');
  var $dHeight = $('#site-description').outerHeight();
  var $hHeight = $header.outerHeight();
  $win.on('scroll', function () {
    if ($win.scrollTop() > $dHeight) {
      $header.addClass('is-fixed');
      $main.css('margin-top', $hHeight);
    } else {
      $('#header').removeClass('is-fixed');
      $main.css('margin-top', 0);
    }
  });
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // SPナビゲーション


  // SPナビトグル
  var navOpen = function navOpen() {
    $('.sp-nav-overlay').fadeIn();
    $('#header').addClass('is-open');
    $('body, html').css('overflow', 'hidden');
  };
  var navClose = function navClose() {
    $('.sp-nav-overlay').fadeOut();
    $('#header').removeClass('is-open');
    $('body, html').css('overflow', 'visible');
  };

  $('.nav-toggle').on('click', function () {
    if ($('#header').hasClass('is-open')) {
      navClose();
    } else {
      navOpen();
    }
  });
  $('.sp-nav-overlay').on('click', function () {
    navClose();
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0Y2svanMvc3JjL2FwcC5qcyIsInRjay9qcy9zcmMvZml4SGVhZGVyLmpzIiwidGNrL2pzL3NyYy9zcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQTs7Ozs7O0FBREE7O0FBRUE7O0FBRUEsRUFBRSxZQUFVO0FBQ1Y7QUFDQSxNQUFNLE9BQU8sRUFBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixJQUFwQixDQUFiO0FBQ0EsT0FBTSxJQUFJLElBQUksQ0FBZCxFQUFnQixJQUFJLEtBQUssTUFBekIsRUFBZ0MsR0FBaEMsRUFBc0M7QUFDcEMsUUFBSSxJQUFJLENBQVIsRUFBWTtBQUNWLFFBQUUsS0FBSyxDQUFMLENBQUYsRUFBVyxNQUFYO0FBQ0Q7QUFDRjtBQUNELElBQUUseUJBQUYsRUFBNkIsUUFBN0IsQ0FBc0MsWUFBdEM7QUFDQSxJQUFFLE9BQUYsRUFBVyxHQUFYLENBQWUsU0FBZixFQUEwQixDQUExQjtBQUVELENBWEQ7O0FBYUE7QUFDQSxFQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFVO0FBQzdCLE1BQUcsRUFBRSxrQkFBRixFQUFzQixNQUF6QixFQUFpQztBQUMvQixNQUFFLGtCQUFGLEVBQXNCLElBQXRCLENBQTJCLFlBQVU7QUFDbkMsVUFBSSxPQUFPLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxZQUFiLENBQVg7QUFDQSxRQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBK0IsT0FBL0IsQ0FBdUMsSUFBdkM7QUFDQSxVQUFJLENBQUMsSUFBRCxJQUFTLEVBQWIsRUFBa0I7QUFDaEIsVUFBRSxJQUFGLEVBQVEsTUFBUixDQUFlLGVBQWUsSUFBZixHQUFzQixXQUFyQztBQUNELE9BRkQsTUFFTztBQUNMLFVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxhQUFiLEVBQTRCLE1BQTVCLENBQW1DLElBQW5DO0FBQ0Q7QUFDRCxRQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixNQUFwQixDQUEyQixJQUEzQjtBQUNBLFFBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxnQkFBYixFQUErQixNQUEvQjtBQUNELEtBVkQ7QUFXRDtBQUNGLENBZEQ7Ozs7Ozs7OztrQkNuQmUsWUFBVztBQUN0QjtBQUNGLE1BQU0sT0FBTyxFQUFFLE1BQUYsQ0FBYjtBQUNBLE1BQU0sVUFBVSxFQUFFLFNBQUYsQ0FBaEI7QUFDQSxNQUFNLFFBQVEsRUFBRSxPQUFGLENBQWQ7QUFDQSxNQUFNLFdBQVcsRUFBRSxtQkFBRixFQUF1QixXQUF2QixFQUFqQjtBQUNBLE1BQU0sV0FBVyxRQUFRLFdBQVIsRUFBakI7QUFDQSxPQUFLLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQVU7QUFDMUIsUUFBRyxLQUFLLFNBQUwsS0FBbUIsUUFBdEIsRUFBK0I7QUFDN0IsY0FBUSxRQUFSLENBQWlCLFVBQWpCO0FBQ0EsWUFBTSxHQUFOLENBQVUsWUFBVixFQUF3QixRQUF4QjtBQUNELEtBSEQsTUFHTztBQUNMLFFBQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsVUFBekI7QUFDQSxZQUFNLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLENBQXhCO0FBQ0Q7QUFDRixHQVJEO0FBU0QsQzs7Ozs7Ozs7O2tCQ2hCYyxZQUFXO0FBQ3hCOzs7QUFJQTtBQUNBLE1BQU0sVUFBVSxTQUFWLE9BQVUsR0FBTTtBQUNwQixNQUFFLGlCQUFGLEVBQXFCLE1BQXJCO0FBQ0EsTUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixTQUF0QjtBQUNBLE1BQUUsWUFBRixFQUFnQixHQUFoQixDQUFvQixVQUFwQixFQUFnQyxRQUFoQztBQUNELEdBSkQ7QUFLQSxNQUFNLFdBQVcsU0FBWCxRQUFXLEdBQU07QUFDckIsTUFBRSxpQkFBRixFQUFxQixPQUFyQjtBQUNBLE1BQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsU0FBekI7QUFDQSxNQUFFLFlBQUYsRUFBZ0IsR0FBaEIsQ0FBb0IsVUFBcEIsRUFBZ0MsU0FBaEM7QUFDRCxHQUpEOztBQU1BLElBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFNO0FBQ2pDLFFBQUssRUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixTQUF0QixDQUFMLEVBQXdDO0FBQ3RDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDRDtBQUNGLEdBTkQ7QUFPQSxJQUFFLGlCQUFGLEVBQXFCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckM7QUFDRCxHQUZEO0FBSUQsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgZml4SGVhZGVyIGZyb20gJy4vZml4SGVhZGVyJztcbmZpeEhlYWRlcigpO1xuaW1wb3J0IHNwRmlyZSBmcm9tICcuL3NwJztcbnNwRmlyZSgpO1xuXG4kKGZ1bmN0aW9uKCl7XG4gIC8vIGduYXbjgqvjg4bjgrTjg6rjga7mlbDjgpLliLbpmZBcbiAgY29uc3QgZ05hdiA9ICQoJyNnTmF2JykuY2hpbGRyZW4oJ2xpJyk7XG4gIGZvciAoIGxldCBpID0gMDtpIDwgZ05hdi5sZW5ndGg7aSsrICkge1xuICAgIGlmKCBpID4gNCApIHtcbiAgICAgICQoZ05hdltpXSkucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gICQoJyNnTmF2IGxpOmhhcyguY2hpbGRyZW4pJykuYWRkQ2xhc3MoJ2NhdC1wYXJlbnQnKTtcbiAgJCgnI2dOYXYnKS5jc3MoJ29wYWNpdHknLCAxKTtcblxufSk7XG5cbi8vIOODmuODvOOCuOODreODvOODieWujOS6huW+jOOBq+eZuueBq1xuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgaWYoJCgnLmVudHJ5LXRodW1ibmFpbCcpLmxlbmd0aCkge1xuICAgICQoJy5lbnRyeS10aHVtYm5haWwnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuYXR0cignZGF0YS10aHVtYicpO1xuICAgICAgJCh0aGlzKS5maW5kKCcudGh1bWItc3Bpbm5lcicpLmZhZGVPdXQoMTAwMCk7XG4gICAgICBpZiggIWRhdGEgPT0gJycgKSB7XG4gICAgICAgICQodGhpcykuYXBwZW5kKCc8aW1nIHNyYz1cIicgKyBkYXRhICsgJ1wiIGFsdD1cIlwiPicpOyAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZHVtbXlfbG9nbycpLmZhZGVJbigxMDAwKTtcbiAgICAgIH1cbiAgICAgICQodGhpcykuZmluZCgnaW1nJykuZmFkZUluKDEwMDApO1xuICAgICAgJCh0aGlzKS5maW5kKCcudGh1bWItc3Bpbm5lcicpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIC8vIOWPr+WkieODmOODg+ODgOODvFxuICBjb25zdCAkd2luID0gJCh3aW5kb3cpO1xuICBjb25zdCAkaGVhZGVyID0gJCgnI2hlYWRlcicpXG4gIGNvbnN0ICRtYWluID0gJCgnI21haW4nKTtcbiAgY29uc3QgJGRIZWlnaHQgPSAkKCcjc2l0ZS1kZXNjcmlwdGlvbicpLm91dGVySGVpZ2h0KCk7XG4gIGNvbnN0ICRoSGVpZ2h0ID0gJGhlYWRlci5vdXRlckhlaWdodCgpO1xuICAkd2luLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIGlmKCR3aW4uc2Nyb2xsVG9wKCkgPiAkZEhlaWdodCl7XG4gICAgICAkaGVhZGVyLmFkZENsYXNzKCdpcy1maXhlZCcpO1xuICAgICAgJG1haW4uY3NzKCdtYXJnaW4tdG9wJywgJGhIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2lzLWZpeGVkJyk7XG4gICAgICAkbWFpbi5jc3MoJ21hcmdpbi10b3AnLCAwKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuXG4gICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAvLyBTUOODiuODk+OCsuODvOOCt+ODp+ODs1xuICBcblxuXG4gIC8vIFNQ44OK44OT44OI44Kw44OrXG4gIGNvbnN0IG5hdk9wZW4gPSAoKSA9PiB7XG4gICAgJCgnLnNwLW5hdi1vdmVybGF5JykuZmFkZUluKCk7XG4gICAgJCgnI2hlYWRlcicpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgJCgnYm9keSwgaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gIH1cbiAgY29uc3QgbmF2Q2xvc2UgPSAoKSA9PiB7XG4gICAgJCgnLnNwLW5hdi1vdmVybGF5JykuZmFkZU91dCgpO1xuICAgICQoJyNoZWFkZXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcbiAgfVxuXG4gICQoJy5uYXYtdG9nZ2xlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICggJCgnI2hlYWRlcicpLmhhc0NsYXNzKCdpcy1vcGVuJykgKSB7XG4gICAgICBuYXZDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZPcGVuKCk7XG4gICAgfVxuICB9KTtcbiAgJCgnLnNwLW5hdi1vdmVybGF5Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdkNsb3NlKCk7XG4gIH0pO1xuXG59XG4iXX0=
