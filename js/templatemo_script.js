

var menuDisabled = false;

jQuery(function($) {
    
    $(window).load(function() { 
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
    });
    
    $(document).ready( function() {
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 400});


	$(".change-section").on('click',function(e){
            e.preventDefault();
            if (menuDisabled == false)
            {
                menuDisabled = true; 
                
                var name = $(this).attr('href');
                console.log(name);
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 400});
                $("section.active").hide('size',{easing: 'easeInQuart', duration: 400},function(){
                    $(this).removeClass("active");
                    $(name+"-section").show('size',{easing: 'easeOutQuart', duration: 400},function(){
                        $(this).addClass("active");
                        
                       
                        google.maps.event.trigger(map, 'resize'); 
                        $.backstretch("resize");
                        menuDisabled = false;
                     });
                });                
            }
            return;
	});
        
    });

});

var map = '';

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(16.8496189,96.1288854)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
}