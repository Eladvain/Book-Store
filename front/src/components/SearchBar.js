import React,{useState} from 'react'
import '../CSS/searchBar.css'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event)=> setSearchTerm(event.target.value);

  return (
    <div className='searchBar'>
      <input className='searchInput'
        type = "text"
        placeholder='Search Book...'
        value = {searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
