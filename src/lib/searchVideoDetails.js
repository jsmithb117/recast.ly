var searchVideoDetails = (options, callback) => {
  console.log ('searchVideoDetails');
  console.log('options: ', options);
  console.log('callback: ', callback);
  $.get('https://www.googleapis.com/youtube/v3/video', {
    part: 'id',
    key: options.key,
    id: options.id
  })
    .done((data) => {
      console.log('got Description data: ', data);
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

export default searchVideoDetails;