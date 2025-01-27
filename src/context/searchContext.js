import {createContext} from 'react'

const searchContext = createContext({
  searchInput: '',
  onChangeSearchInput: () => {},
})

export default searchContext
