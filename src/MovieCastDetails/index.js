import {useState, useEffect} from 'react'

import './index.css'

const MovieCastDetails = ({movieId}) => {
  const [movieCastDetails, setMovieCastDetails] = useState({})
  const {cast} = movieCastDetails

  const fetchMovieCastDetails = async () => {
    const apiResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0ccfbcc1d9659ca4526749ddb4daead0&language=en-US`,
    )
    const jsonResponse = await apiResponse.json()
    setMovieCastDetails(jsonResponse)
  }

  useEffect(() => {
    fetchMovieCastDetails()
  }, [])

  return (
    <section>
      <ul className="cast-list">
        {cast?.map(eachCast => (
          <li className="cast-item" key={eachCast.id}>
            <img
              className="cast-image"
              src={`https://image.tmdb.org/t/p/w500${eachCast.profile_path}`}
              alt={eachCast.name}
            />
            <p>{eachCast.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MovieCastDetails
