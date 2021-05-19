import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './Search';
import API from '../utils/API';
import Table from './Table'

function Search() {
    const [allEmployees, setEmployees] = useState([]);
    const [searchValue, setSearch] = useState('');

    useEffect(() => {
        API.getUsers().then((res) => setEmployees(res.data.results))
    }, []);

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
        <Search handleInputChange={handleInputChange} value={searchValue}/>
        <Table allEmployees={allEmployees} searchValue={searchValue} employees={this.state.employees}/>
        </>
    )
}

export default Search;