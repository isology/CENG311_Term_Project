document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'a686bd0bbe6d650a0dec2a1fb2b1a1f2'; 
    const city = 'Ankara';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDataDiv = document.getElementById('weather-data');
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;

                weatherDataDiv.innerHTML = `
                    <p>Location: ${city}</p>
                    <p>Weather: ${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                `;
            } else {
                weatherDataDiv.innerHTML = `<p>Error fetching weather data: ${data.message}</p>`;
            }
        })
        .catch(error => {
            const weatherDataDiv = document.getElementById('weather-data');
            weatherDataDiv.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const quoteUrl = 'https://api.quotable.io/random';

    fetch(quoteUrl)
        .then(response => response.json())
        .then(data => {
            const quoteDiv = document.getElementById('quote-data');
            quoteDiv.innerHTML = `
                <blockquote>"${data.content}"</blockquote>
                <p>- ${data.author}</p>
            `;
        })
        .catch(error => {
            const quoteDiv = document.getElementById('quote-data');
            quoteDiv.innerHTML = `<p>Error fetching quote: ${error.message}</p>`;
        });
});


$(document).ready(function() {	

    $("#owl-demo").owlCarousel({
         
        navigation : true, // Show next and prev buttons
         
        slideSpeed : 300,
        paginationSpeed : 400,
         
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
         
        });

    var id = '#dialog';
        
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
        
    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //transition effect
    $('#mask').fadeIn(500);	
    $('#mask').fadeTo("slow",0.9);	
        
    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();
                  
    //Set the popup window to center
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
        
    //transition effect
    $(id).fadeIn(2000); 	
        
    //if close button is clicked
    $('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    
    $('#mask').hide();
    $('.window').hide();
    });
    
    //if mask is clicked
    $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
    });
        
    var gallery = new SimpleLightbox('.gallery a', { 
        // default source attribute
sourceAttr: 'href',

// shows fullscreen overlay
overlay: true,

// shows loading spinner
spinner: true,

// shows navigation arrows
nav: true,

// text for navigation arrows
navText: ['&larr;','&rarr;'],

// shows image captions
captions: true,
captionDelay: 0,
captionSelector: 'img',
captionType: 'attr',
captionPosition: 'bottom',
captionClass: '',
captionHTML: false,

// captions attribute (title or data-title)
captionsData: 'title',

// shows close button
close: true,

// text for close button
closeText: 'X',

// swipe up or down to close gallery
swipeClose: true,

// show counter
showCounter: true,

// file extensions
fileExt: 'png|jpg|jpeg|gif',

// weather to slide in new photos or not, disable to fade
animationSlide: true,

// animation speed in ms
animationSpeed: 250,

// image preloading
preloading: true,

// keyboard navigation
enableKeyboard: true,

// endless looping

// group images by rel attribute of link with same selector
rel: false,

// closes the lightbox when clicking outside
docClose:  true,

// how much pixel you have to swipe
swipeTolerance: 50,

// lightbox wrapper Class
className: 'simple-lightbox',

// width / height ratios
widthRatio: 0.8,
heightRatio: 0.9,

// scales the image up to the defined ratio size
scaleImageToRatio: false,
    });

    });


