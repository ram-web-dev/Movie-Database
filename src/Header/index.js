import './index.css'

import {Link, withRouter} from 'react-router-dom'

import {useContext} from 'react'

import searchContext from '../context/searchContext'

const Header = ({history}) => {
  const {searchInput, onChangeSearchInput} = useContext(searchContext)
  return (
    <header className="header">
      <h1 className="app-title">movieDB</h1>
      <nav className="links-and-searchbar-container">
        <ul className="links-list">
          <li>
            <Link className="link" to="/">
              Popular
            </Link>
          </li>
          <li>
            <Link className="link" to="/top-rated">
              Top Rated
            </Link>
          </li>
          <li>
            <Link className="link" to="/upcoming">
              Upcoming
            </Link>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <button
            className="search-button"
            type="button"
            onClick={() => {
              history.push('/search')
            }}
          >
            Search
          </button>
        </div>
      </nav>
    </header>
  )
}

export default withRouter(Header)
