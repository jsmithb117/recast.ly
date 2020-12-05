import searchVideoDetails from '../lib/searchVideoDetails.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var VideoDetails = (props) => (
  <div id="video-details">
    {searchVideoDetails({part: 'id', id: props.videoId, key: YOUTUBE_API_KEY}, (data) => {
      console.log('VideoDetails line 7');
      console.log(data);
    })}
  </div>
);

export default VideoDetails;