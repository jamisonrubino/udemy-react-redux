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
      term: ''
    }
  }

  componentDidMount() {
    YTSearch({ key: API_KEY, term: this.state.term }, videos => {
      this.setState({ videos })
    })
  }
  //
  // this.search = () => {
  //   YTSearch({ key: API_KEY, term: this.state.term }, videos => {
  //     this.setState({ videos })
  // }

  render() {
    return (
      <div>
        <SearchBar change={e=>{
          console.log(this.state.term)
          this.setState({term:e.target.value})
        }} />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList
          videos={this.state.videos}
          />
      </div>
    );
  }
}
