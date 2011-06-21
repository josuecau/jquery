/*
 * jQuery Wrapper Plugin 
 * Copyright (c) 2011 Josué CAU
 * Version: 1.00 (2011-06-21)
 * Requires: jQuery
 */
(function ($) {
	var opts;
	var methods = {
		init: function (options) {
			opts = $.extend({}, $.fn.wrapper.defaults, options);
			$this = $(this);
			var count = $this.length;
			for (var i = 0; i < count; i += opts.wrapperCount)
			{
				$this.filter(':eq('+i+'),:lt('+(i+opts.wrapperCount)+'):gt('+i+')').wrapAll($('<'+opts.wrapperElement+'/>').addClass('wrapper'));
			}
		},
		disable: function () {
			
		}
	};
	$.fn.wrapper = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.wrapper');
		}
	};
	$.fn.wrapper.defaults = {
		wrapperElement : 'div',
		wrapperCount : 2
	};
})(jQuery);