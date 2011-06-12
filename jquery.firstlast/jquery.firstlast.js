/*
 * jQuery FirstLast Plugin 
 * Copyright (c) 2011 Josué CAU
 * Version: 1.00 (2011-06-12)
 * Requires: jQuery
 */
(function ($) {
	var opts;
	var methods = {
		init: function (options) {
			opts = $.extend({}, $.fn.firstlast.defaults, options);
			return this.each(function () {
				var $this = $(this);
				doIt($this);

				function doIt(element) {
					var childrens = element.children();
					if (childrens.length > 1) {
						var tagNames = [];
						childrens.each(function () {
							var tagName = $(this).get(0).tagName;
							if ($.inArray(tagName, tagNames)) tagNames.push(tagName);
						});
						$.each(tagNames, function (i, v) {
							var tags = element.children(v);
							if (tags.length > 1) {
								element.children(v + ':first').addClass(opts.first);
								element.children(v + ':last').addClass(opts.last);
							}
						});
					}
					childrens.each(function (i, e) {
						doIt($(e));
					});
				}
			});
		},
		disable: function () {
			return this.each(function () {
				var $this = $(this);
				$this.find('.' + opts.first + ', .' + opts.last).removeClass(opts.first + ' ' + opts.last);
			});
		}
	};
	$.fn.firstlast = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.firstlast');
		}
	};
	$.fn.firstlast.defaults = {
		first: 'first',
		last: 'last'
	};
})(jQuery);