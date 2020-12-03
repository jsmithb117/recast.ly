var searchYouTube = (options, callback) => {



  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: true
  })
    .done((data) => {
      console.log('got data: ', data);
      callback(data.items);
    })
    .fail((data) => {
      console.error(data.items);
    });

  var searchOptions = {
    key: options.key,
    q: options.query,
    maxResults: options.max
  };

  // $.ajax({
  //   type: 'GET',
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   data: searchOptions,
  //   contentType: 'applications/json',
  //   success: function(data) {
  //     callback(data);
  //     console.log('Succcessfully Loaded')
  //   },
  //   error: function(data) {
  //     console.log('Error');
  //   }
  // });
};

export default searchYouTube;


// create: function(message, successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'POST',
//     data: JSON.stringify(message),
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// },