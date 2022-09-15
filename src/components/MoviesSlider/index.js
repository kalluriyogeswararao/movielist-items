import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MovieSlider = props => {
  const {moviesList} = props
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const renderActionMovieItem = movie => {
    if (movie.categoryId === 'ACTION') {
      return <MovieItem movieDetails={movie} key={movie.id} />
    }
    return null
  }

  const renderComedyMovieItem = movie => {
    if (movie.categoryId === 'COMEDY') {
      return <MovieItem movieDetails={movie} key={movie.id} />
    }
    return null
  }

  return (
    <div>
      <h1 className="action-movies">Action Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachMovie => renderActionMovieItem(eachMovie))}
      </Slider>
      <h1 className="action-movies">Comedy Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachMovie => renderComedyMovieItem(eachMovie))}
      </Slider>
    </div>
  )
}

export default MovieSlider
