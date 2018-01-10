import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar.js'
import VideoList from './video_list.js'

const API_KEY = 'AIzaSyAqCUuT9R2Ccnjbl7zSa17GJt3lM6PS8ak'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      term: ''
    }
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: this.state.term }, videos => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar change={e=>{
          this.setState({term:e.target.value})
          console.log(this.state.term)
        }} />
        <VideoList
          videos={this.state.videos}
          />
      </div>
    );
  }
}
