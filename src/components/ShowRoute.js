import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowRoute extends React.Component {

  state =  {
    video: {
      snippet: {}
    }

  }


  componentWillMount() {
    this.getVideo();
  }

  getVideo () {
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: { 'id': this.props.match.params.id,
        'part': 'snippet',
        'key': 'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
      }
    })
      .then(res => {
        this.setState({ video: res.data.items[0]}, () => console.log('get video', this.state.video));
      });
  }

  render() {
    console.log('render', this.state);
    return (
      <section>
        <div className="top-nav"></div>
        <img className="logo" src="././assets/images/MusicPlay_logo.png" alt="logo" />
        <div className="show-video-wrapper">
          <div className="description-box-right">
            <iframe id="ytplayer" type="text/html" width="640" height="360"
              src={`https://www.youtube.com/embed/${this.state.video.id}`}
              frameBorder="0">
            </iframe>
          </div>
          <div className="large-video">
            <h1>{this.state.video.snippet.title}</h1>
            <p>{this.state.video.snippet.description}</p>
            <Link className="back-link" to={'/'}><img src="././assets/images/back_arrow.png" alt="back arrow"/> Back to list</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowRoute;
