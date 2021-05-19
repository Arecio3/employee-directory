import React from 'react'


const Table = (props) => {
    console.log(props.employees);


    return (
        <table className="table" >
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
            {props.employees.map(employee => {
                const formatYmd = new Date(employee.dob.date)

                return(
                <tr>
                <th><img src={employee.picture.thumbnail} alt={employee.name}></img></th>
                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{formatYmd.getFullYear()+'-' + (formatYmd.getMonth()+1) + '-'+formatYmd.getDate()}</td>
            </tr> 
                )
            })}
            </tbody>
        </table>
    )
}

export default Table
