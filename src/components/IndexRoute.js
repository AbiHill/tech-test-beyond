import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class IndexRoute extends React.Component {
  state =  {
    videos: {
      items: []
    }
  }

  componentWillMount() {
    this.getVideos();
  }

  getVideos() {
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
      .then(res => {
        this.setState({ videos: res.data}, () => console.log('get videos', this.state.videos.items));
        console.log(this.state.videos.items[0].snippet.thumbnails.high.url);

      });
  }

  render() {
    // console.log('render', this.state.videos.items[0].snippet.thumbnails.high.url);
    return (
      <section>
        <div className="top-nav"></div>
        <div>
          <img className="logo" src="././assets/images/MusicPlay_logo.png" alt="logo" />
          <div className="video-wrapper">
            {this.state.videos.items.map((video, i) =>
              <div className="video-box" key={i}>
                <Link to={`/${video.snippet.resourceId.videoId}`}>


                  <iframe id="ytplayer" type="text/html"
                    src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                    frameBorder="0">
                  </iframe>


                  {/* { video.snippet.thumbnails && <img className="logo" src={`${video.snippet.thumbnails.high.url}`} />} */}
                  <div className="video-titles">
                    <h3>{ video.snippet.title }</h3>
                    <img className="play-button" src="././assets/images/play_button.png" alt="play button" />
                  </div>
                  <p>{ video.snippet.description }</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default IndexRoute;
