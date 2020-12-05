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
      // console.log('got data: ', data);
      callback(data.items);
    })
    .fail((error) => {
      console.error(error.responseText);
    });

  // var searchOptions = {
  //   key: options.key,
  //   q: options.query,
  //   maxResults: options.max
  // };
};

export default searchYouTube;