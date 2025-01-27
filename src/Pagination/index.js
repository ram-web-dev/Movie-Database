import './index.css'

const Pagination = ({page, setPage}) => {
  const decrementPageNumber = () => {
    setPage(prevPage => prevPage - 1)
  }

  const incrementPageNumber = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <div className="pagination">
      <button type="button" onClick={decrementPageNumber}>
        Prev
      </button>
      <span>{page}</span>
      <button type="button" onClick={incrementPageNumber}>
        Next
      </button>
    </div>
  )
}

export default Pagination
