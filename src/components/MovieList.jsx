import React, { Component } from 'react';
import '../css/movie.css';
import VideoCard from '../components/VideoCard';
import axios from '../axios';
import FlipMove from 'react-flip-move';
// import Fade from 'react-reveal/Fade';
class MovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movielist: [],
    };
  }
  async componentDidMount() {
    const list = await axios.get(this.props.selectOption);
    // console.log(list.data.results);
    this.setState({
      movielist: list.data.results,
    });
    this.props.setSelectOption('');
  }
  async componentWillReceiveProps(nextProps) {
    const list = await axios.get(nextProps.selectOption);
    this.setState({
      movielist: list.data.results,
    });
    this.props.setSelectOption('');
  }
  render() {
    return (
      <div className='movie-list'>
        <FlipMove>
          {this.state.movielist.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
        </FlipMove>
      </div>
    );
  }
}

export default MovieList;
