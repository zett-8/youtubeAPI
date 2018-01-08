import React from 'react';

const VideoItems = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' alt="" src={imageURL} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

const VideoList = (props) => {
    const videoItems = props.videos.map((value) => {
        return <VideoItems onVideoSelect={props.onVideoSelect} key={value.etag} video={value} />
    });

    return(
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;