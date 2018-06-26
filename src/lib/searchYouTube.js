var searchYouTube = (options, callback) => {
  // TODO      
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {type: 'video', q: options.query,
      part: 'snippet',
      maxResults: options.max || 5,
      key: options.key, videoEmbeddable: true},
    success: function(data){
      console.log(this.url);
      callback(data);
    },
    error: function(error){
      console.log('error',error);
    }
  });
};

window.searchYouTube = searchYouTube;
