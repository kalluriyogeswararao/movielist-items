import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="image-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
      >
        {close => (
          <div className="video-player-container">
            <button
              type="button"
              onClick={() => close()}
              className="close-button"
              testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
