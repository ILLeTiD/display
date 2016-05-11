;(function($){
$(document).ready(function(){
	$('.ba-slider').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slide:('.ba-slider__slide'),
		slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,

	});


		$( '.swipebox' ).swipebox();













});
$(window).load(function(){

		$(".ba-slider-projects").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			 variableWidth: true,
			centerMode: true,
			arrows: false,
			infinite: true,
			asNavFor: '.ba-slider-description',
			focusOnSelect: true
		});
		$(".ba-slider-description").slick({
			asNavFor: '.ba-slider-projects',
			slide: ".ba-slider-description__slide",
			prevArrow: $(".ba-portfolio-text-slider__prev"),
			nextArrow: $(".ba-portfolio-text-slider__next")
		});



		var $grid = $('.ba-works').isotope({
			itemSelector: '.ba-works__work',
			layoutMode: 'fitRows',
				fitRows:{
					gutter: 20
				}
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
		var mapDiv = $('#map')[0];
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 49.592552, lng: 34.547128},
			zoom: 10,
			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {lat: 49.592552, lng: 34.547128},
			map: map,
			icon: 'img/marker.png'
		});
		var infowindow = new google.maps.InfoWindow({
			content: "hello world"
		});
		  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
	})

})(jQuery);
