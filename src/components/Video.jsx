import YouTube from 'react-youtube'

const Video = ({videoId}) =>{

    const opts = {
        height: '160',
        width: '280',
        playerVars: {
        autoplay: 0,
        },
    };

    return (
        <div className="video-container">
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
}

export default Video;