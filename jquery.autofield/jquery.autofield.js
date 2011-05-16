/*
 * jQuery Autofield Plugin 
 * Copyright (c) 2011 Josué CAU
 * Version: 1.00 (2010-08-01)
 * Requires: jQuery
 */
(function($) {
 
	$.fn.autofield = function(options) {
		
		var defaults = {selector	: 'input[type="text"],input[type="password"],textarea',
						useLabels	: false,
						debug		: false};
		
		settings = $.extend({}, defaults, options);
		
			this.each(function() {
				
				var $this = $(this);
				
				var defaultValues = []; // contient les valeurs des champs par défaut
				var fields = $this.find(settings.selector); // champs du formulaire correspondants à 'selector'
				
				fields.each(function(i){
					
					if (settings.useLabels)
					{
						var id = $(this).attr('id');
						var label = $this.find('label[for="' + id + '"]');
						defaultValues[i] = label.html();
						$(this).val(defaultValues[i]);
						label.hide();
					}
					else
					{
						defaultValues[i] = $(this).val();
					}
					
					$(this).focus(function(){
						if($(this).val() == defaultValues[i]) $(this).val('');
					});
					
					$(this).blur(function(){
						if($(this).val() == '') $(this).val(defaultValues[i]);				   
					});
					
					if (settings.debug)
					{
						if (i == fields.length - 1) console.log('Fields values : ' + defaultValues + "\n");
					}
					
				});
			});
		
		return this;
	};
 
})(jQuery);