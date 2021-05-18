import React from 'react';

const Header = () => {

    const styles = {
        header: {
            backgroundColor: 'blue',
            color: 'white',
            display: 'flex',
            justifyContent: 'center'
        }
    }
    
    return (
        <div className='header' style={styles.header}>
            <h1>Employee Directory</h1>
        </div>
    )
}

export default Header;
