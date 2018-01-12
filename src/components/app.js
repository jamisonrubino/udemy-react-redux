import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyAqCUuT9R2Ccnjbl7zSa17GJt3lM6PS8ak'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      term: '',
      selectedVideo: null
    }
    this.searchTimeout = null
  }

  search() {
    YTSearch({ key: API_KEY, term: this.state.term }, videos => {
      console.log("search ran, term: ", this.state.term)
      this.setState({ videos: videos,
        selectedVideo: videos[0]})
    })
  }

  handleChange(e) {
    clearTimeout(this.searchTimeout)
    if(e.target.value.length > 0) {
      const val = e.target.value
      this.searchTimeout = setTimeout(()=>this.setState({term:val}, ()=>this.search()), 1000)
    } else {
      this.setState({term:''})
    }
  }


  render() {
    return (
      <div>
        <SearchBar
          change={e=>this.handleChange(e)}
          term={this.state.term} />
        <VideoDetail
          video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
      </div>
    );
  }
}
