// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {filteredMoviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {filteredMoviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} moviesDetails={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
