import React from 'react'
import styles from './style.module.css'
const Medals = ({gold, silver, bronze, children}) => {
    return (
        <div className={'d-flex gap-1'}>
            {children}
            <div className={styles.medal} style={{backgroundColor:'gold'}}>{gold || 0}</div>
            <div className={styles.medal} style={{backgroundColor:'silver'}}>{silver || 0}</div>
            <div className={styles.medal} style={{backgroundColor:'#D2B48C'}}>{bronze || 0}</div>
        </div>
    )
}

export default Medals
