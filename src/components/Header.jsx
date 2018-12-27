import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.css';

const navigationBar = () => {
    return (
        <div className={styles.navigationBar}>
            <li ><Link className={styles.navBarItem} to="/home"> Home </Link></li>
            <li ><Link className={styles.navBarItem} to="/qualifyingresults"> Qualifying Results </Link></li>
            <li ><Link className={styles.navBarItem} to="/driversinformation"> Drivers Information </Link> </li>
        </div>
    )
}

export default navigationBar;