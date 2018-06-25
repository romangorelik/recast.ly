// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// TODO: Render the `App` component to the DOM
class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          thing: true,
          videos: window.exampleVideoData.slice(),
          curVid: window.exampleVideoData[0]
      }
      this.playVideo = this.playVideo.bind(this);
  }

  playVideo (e) {
      this.state.curVid = $(e.target).text();
      console.log(this.state.curVid);
      
  }

  render(){
      return (<div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.curVid}/></div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} playVid={this.playVideo}/>
          </div>
        </div>
      </div>)
  }


}