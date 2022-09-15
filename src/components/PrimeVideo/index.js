import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="all-movies">
        <MoviesSlider moviesList={moviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
