import React from 'react'
import './style.css'
const Loader = ({color}) => {
    const styles = {
        backgroundColor: color ?? '#004AAD',
    }

    return (
        <div className="w-100 d-flex h-100 justify-content-center align-items-end">
            <div className="lds-ellipsis">
                <div style={styles} />
                <div style={styles} />
                <div style={styles} />
                <div style={styles} />
            </div>
        </div>
    )
}

export default Loader
