/*
 * jQuery Center Plugin 
 * Copyright (c) 2011 Josué CAU
 * Version: 1.00 (2011-05-16)
 * Requires: jQuery v1.3.2 or later
 */
(function( $ ){

	$.fn.center = function() {  
		
		return this.each(function() {        

			$this = $(this);
			
			$this.css({
				'position'		: 'absolute',
				'left'			: '50%',
				'top'			: '50%',
				'margin-top'	: '-' + $this.height() / 2 + 'px',
				'margin-left'	: '-' + $this.width() / 2 + 'px'				
			});
		
		});
	
	};
  
})(jQuery);