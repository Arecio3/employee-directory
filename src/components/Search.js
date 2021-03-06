import React from 'react'

 const Search = (props) => {
    return (
        <form>
            <div className='search-container'>
                <div className='search'>
                    <input 
                    name='search' 
                    type='text' 
                    className='search-text' 
                    placeholder='Search' 
                    onChange={props.handleInputChange}/>
                </div>
            </div>
        </form>
    )
}

export default Search;