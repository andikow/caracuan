import React from 'react';
import YouTube from 'react-youtube';

class VideoContent extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        enablejsapi:1,
        modestbranding:1,
      },
    };

    return <YouTube videoId="EIKwoP8YH20" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default VideoContent;
