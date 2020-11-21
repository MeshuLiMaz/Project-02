$( document ).ready(function() {
    console.log( "ready!" );

    $('#fetch-from-api').on('click', (} => {
        console.log('I was clicked!');
        $.get('api.giphy.com/v1/gifs/search')

    })




});  