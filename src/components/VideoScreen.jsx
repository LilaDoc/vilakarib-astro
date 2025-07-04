import React from 'react';

const VideoScreen = (props) => {
  return (
    <div className="videoScreen">
      <div className="videoScreenContent">
        <div className="ScreenClose">
          <button onClick={() => props.setVideoOpen(false)}>
            <img src="/images/close.svg" alt="Close" />
          </button>
        </div>
        <iframe
          src="https://www.youtube.com/embed/lK-MzNsLOxU?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="videoScreenFrame"
          alt="image de la villa des k'ribean"
        />
      </div>
    </div>
  );
};

export default VideoScreen;