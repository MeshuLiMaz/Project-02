$( document ).ready(function() {
    console.log( "ready!" );


    $('#search-button').on('click', () => {
      
      let searchTerm = $('#search-field').val();

      console.log(searchTerm);

      let url = "https://api.giphy.com/v1/gifs/search?api_key=VT3E7s35IVGNTJL23r5PgMJQjp4u3ydt" + searchTerm;


      $.get(url, function(giphyResponse) {
      

        let resultsHtml = '';


        for (let image of giphyResponse.data) {                
          let imgHtml = `<img src=${image.images.original.url} />`
          resultsHtml = resultsHtml + imgHtml;          
        }

        console.log(resultsHtml);

        $('#search-results').html(resultsHtml);


      });





    })



});