import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>EMPLOYEES DASHBOARD</h1>
            <div style={{ marginTop: '40px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>CREATE EMPLOYEE</button>
            </div>
        </header>
    )
}

export default Header