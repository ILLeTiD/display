;(function($){
	$(window).load(function(){
		// init Isotope
		var $grid = $('.ba-grid').isotope({
			itemSelector: '.ba-works__work',
			layoutMode: 'fitRows'
		});
		// bind filter button click
		$('.filters-button-group').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// change is-checked class on buttons
		$('.ba-filters').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
		  });
		});
		$('.swipebox').swipebox({

		});
	});
})(jQuery);
