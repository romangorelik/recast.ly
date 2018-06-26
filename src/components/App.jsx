// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// TODO: Render the `App` component to the DOM
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData.slice(),
      curVid: window.exampleVideoData[0]
    };
    this.playVideo = this.playVideo.bind(this);
    this.liveVideo = this.liveVideo.bind(this);
    this.searchYouTube = window.searchYouTube;
  }

  playVideo(video) {
    this.setState({
      curVid: video
    });
  }

  liveVideo(data){
    this.setState({videos: data.items, curVid: data.items[0]});
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <Search searchYouTube={this.searchYouTube} liveVideo={this.liveVideo}/>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.curVid}/></div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} playVid={this.playVideo}/>
        </div>
      </div>
    </div>);
  }
}
