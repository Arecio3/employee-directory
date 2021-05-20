import React from 'react';
import './style.css';

const Table = ({  allEmployees, searchValue, handleSort }) => {
 

    return (
        <div className='table-container'>
        <table id="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th><span id='filterBtn' onClick={handleSort}>Name</span></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
            {allEmployees.map((employee) => {
                const formatYmd = new Date(employee.dob.date)

                return employee.name.first.includes(searchValue) ? (
                <tr>
                <th><img src={employee.picture.thumbnail} alt={employee.name}></img></th>
                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{formatYmd.getFullYear()+'-' + (formatYmd.getMonth()+1) + '-'+formatYmd.getDate()}</td>
            </tr> 
                ) : null;
            })}
            </tbody>
        </table>
        </div>
    )
}

export default Table
