'use strict';

/* eslint-disable no-unused-vars */

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$(document).ready(function() {
	// theme
	var $jsBtnTheme = $('.js-btn-theme');
	$jsBtnTheme.click(function() {
		$jsBtnTheme.removeClass('is-active');
		$jsBtnTheme.removeAttr('disabled');
		$(this).toggleClass('is-active');
		$(this).attr('disabled', 'disabled');
		$('body').toggleClass('tm-light');
	});
	// full page
	var $fullPage = $('#js-fullpage');
	$fullPage.fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		sectionSelector: '.b-screen',
		navigation: true,
		navigationPosition: 'right',
		scrollingSpeed: 800,
		scrollOverflow: true,
		onLeave: function onLeave(origin, destination, direction) {
			var $leavingSection = $('.js-fix');
			if (destination.index == 0 && direction == 'up') {
				$leavingSection.removeClass('fix');
			} else if (origin.index !== 1 && direction == 'down') {
				$leavingSection.addClass('fix');
			}
		}
	});

	// btn catalog
	var $jsBtnLogin = $('.js-btn-login');
	var $jsBoxLogin = $('.js-box-login');
	$jsBtnLogin.click(function() {
		$jsBoxLogin.toggleClass('is-open');
	});
	$document.on('click', function(e) {
		if (!$(e.target).closest($jsBtnLogin).length && !$(e.target).closest($jsBoxLogin).length) {
			$jsBoxLogin.removeClass('is-open');
		}
		e.stopPropagation();
	});

	// top letters
	var $jsLetters = $('.js-anim-txt');
	$jsLetters.each(function() {
		var $letters = $(this).text();
		$(this).addClass('empty');
		$(this).empty();
		for (var i = 0; i < $letters.length; i++) {
			$(this).append('<span class="char' + (i + 1) + '">' + $letters[i] + '</span>');
		}
	});
});
