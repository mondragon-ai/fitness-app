import React, { Component } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const Search = (props) => {

    const items = [
        {
          id: 0,
          name: 'Squat'
        },
        {
          id: 1,
          name: 'Deadlift'
        },
        {
          id: 2,
          name: 'Bench'
        },
        {
          id: 3,
          name: 'Over Head Press'
        },
        {
          id: 4,
          name: 'Romanian Deadlift'
        }
      ]
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
        
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        // console.log(item)
        props.searchFn(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }

    return (
        <div className="search">
            <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
            />
        </div>
    )
}

export default Search;