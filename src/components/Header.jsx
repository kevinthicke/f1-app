import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <li><Link to="/home"> Home </Link></li>
            <li><Link to="/qualifyingresults"> Qualifying Results </Link></li>
            <li><Link to="/driversinformation"> Drivers Information </Link> </li>
        </div>
    )
}

export default Header;