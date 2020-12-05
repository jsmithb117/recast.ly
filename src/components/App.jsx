import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: null,
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }


  componentDidMount() {
    searchYouTube({query: 'dogs', max: 5, key: YOUTUBE_API_KEY}, (data) => {
      this.setState({videos: data}, () => console.log(data));
    });
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearchInput(input) {
    console.log (input);
    this.setState({searchQuery: input});
  }

  onSearchSubmit() {
    var options = {
      query: this.state.searchQuery,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    searchYouTube(options, callback);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search onVideoClick={this.onVideoClick} onSearchInput={this.onSearchInput}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick.bind(this)}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
