import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './Search';
import API from '../utils/API';
import Table from './Table'

function Main() {
    const [allEmployees, setEmployees] = useState([]);
    const [searchValue, setSearch] = useState('');
    const [sortOrder , setSort] = useState(false)

    useEffect(() => {
        API.getUsers().then((res) => setEmployees(res.data.results))
    }, []);

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSort = (e) => {
        setSort(!sortOrder);

        const sorted = (!sortOrder ? allEmployees.sort((a, b) => a.name.last.localeCompare(b.name.last)) : allEmployees.sort((a, b) => b.name.last.localeCompare(a.name.last)));

        setEmployees(sorted);
    }
    
    return (
        <>
        <Search handleInputChange={handleInputChange} value={searchValue}/>
        <Table allEmployees={allEmployees} searchValue={searchValue} sortOrder={sortOrder} setSort={setSort} handleSort={handleSort}/>
        </>
    )
}

export default Main;