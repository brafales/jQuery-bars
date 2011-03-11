/*
 * jQuery Bars 1.0
 *
 * Based on the UI ProgressBar plugin from jQueryUI 
 * (http://docs.jquery.com/UI/Progressbar)
 *
 * Copyright 2011, Bernat Ràfales Mulet (http://www.thinkingeek.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function( $ ){

  $.fn.bars = function( options ) {  

    var settings = {
      'height' : '10px',
      'duration' : '500',
	  'background': 'white',
      'foreground' : 'black',
	  'percentage' : 50
    };

    return this.each(function() {        
      if ( options ) { 
        $.extend( settings, options );
      }

	  var $this = $(this);
	  
      $this.html('').css('height', settings.height);;
      $this.css('background-color', settings.background);
      var valueDiv = $('<div></div>').appendTo($this).css('background-color', settings.foreground).css('height', settings.height);
      
	  //Animation
      valueDiv.width('0%');
      valueDiv.animate({
	    width: settings.percentage.toFixed(0) + '%'},
	    settings.duration);
    });

  };
})( jQuery );
