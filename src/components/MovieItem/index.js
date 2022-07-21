// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {moviesDetails} = props
  return (
    <div>
      <Popup
        modal
        trigger={<img src={moviesDetails.thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={moviesDetails.videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
