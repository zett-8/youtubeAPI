import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyBf-C0N4ssAnB_i6SXHwLZ7ZGecOYpgi4c';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboard')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render(){
        const VideoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={VideoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo}) }videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);