import './index.css'

const MovieItem = ({movieDetails, navigateToMovie}) => {
  const {
    id,
    poster_path: posterPath,
    title,
    vote_average: voteAverage,
  } = movieDetails

  return (
    <li className="movie-item">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <h3 className="rating">{voteAverage} / 10</h3>
      <button
        type="button"
        onClick={() => {
          navigateToMovie(id)
        }}
      >
        View Details
      </button>
    </li>
  )
}

export default MovieItem
