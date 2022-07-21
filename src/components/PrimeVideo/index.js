// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const filteredActionMovies = moviesList.filter(
    eachAction => eachAction.categoryId === 'ACTION',
  )

  const filteredComedyMovies = moviesList.filter(
    eachComedy => eachComedy.categoryId === 'COMEDY',
  )

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <h1>Action Movies</h1>
        <MoviesSlider filteredMoviesList={filteredActionMovies} />
        <h1> Comedy Movies </h1>
        <MoviesSlider filteredMoviesList={filteredComedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
