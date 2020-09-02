import React from 'react';
import '../css/videoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { forwardRef } from 'react';
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className='videoCard'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=''
      />
      <TextTruncate
        line={1}
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      <h2>{movie.title || movie.orginal_name}</h2>
      <p className='stats'>
        {movie.media_type && `${movie.media_type} ▪`}
        {movie.release_date && `${movie.release_date}`} {'  '}
        <ThumbUpIcon /> {'  '}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
