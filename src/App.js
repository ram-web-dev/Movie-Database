import './App.css'

import {useState} from 'react'

import {Switch, Route} from 'react-router-dom'

import searchContext from './context/searchContext'

import PopularMovies from './PopularMovies'

import TopRatedMovies from './TopRatedMovies'

import UpcomingMovies from './UpcomingMovies'

import SingleMovieDetails from './SingleMovieDetails'

import SearchedMovies from './SearchedMovies'

// write your code here
const App = () => {
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value)
  }

  return (
    <searchContext.Provider value={{searchInput, onChangeSearchInput}}>
      <Switch>
        <Route exact path="/" component={PopularMovies} />
        <Route exact path="/top-rated" component={TopRatedMovies} />
        <Route exact path="/upcoming" component={UpcomingMovies} />
        <Route exact path="/movies/:id" component={SingleMovieDetails} />
        <Route exact path="/search" component={SearchedMovies} />
      </Switch>
    </searchContext.Provider>
  )
}

export default App
