import YouTube from 'react-youtube'

const Video = ({videoId}) =>{

    const opts = {
        height: '160',
        width: '280',
        playerVars: {
        autoplay: 0,
        },
    };

    let source = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-container">
            {/* <YouTube videoId={videoId} opts={opts} /> */}
            <iframe className='video' src={source} title="UNILAB EASY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                
            </iframe>
        </div>

        //  width="675" height="396"
    );
}

export default Video;