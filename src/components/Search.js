import React from 'react'

export const Search = (props) => {
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
