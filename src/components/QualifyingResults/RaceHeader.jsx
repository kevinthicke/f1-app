import React from 'react';
import * as styles from './styles.css';

const RaceHeader = ({ season, raceName} ) => {
    return(
        <div className={styles.RaceHeader}>{season} - {raceName}</div>
    )
}

export default RaceHeader;
