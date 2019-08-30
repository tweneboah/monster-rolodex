import React from 'react'

import '../stylesheet/searchBox.css'

const Search =  ({placeholder, handleChange}) => {
 return (
  <div>
 <input className='search' type='search' placeholder={placeholder}  onChange = {handleChange}/>
  </div>
 )
}

export default Search