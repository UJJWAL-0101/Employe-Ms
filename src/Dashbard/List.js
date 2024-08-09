import React from 'react'
import './list.css';

function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                       
                       <th>EMP_ID</th>
                        <th>EMP_FIRST_NAME</th>
                        <th>EMP_LAST_NAME</th>
                        <th>EMP_EMAIL</th>
                        <th>EMP_SALARY</th>
                        <th>EMP_JOINING_DATE</th>
                        
                                 
                        <th colSpan={3} className="text-center">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                       UPDATE
                                                                           </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        REMOVE
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>Sorry! Please Add Atleast One Employee Details</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List