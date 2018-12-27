import React from 'react';
import * as styles from './styles.css';

const RaceInfo = ({ season, raceName} ) => {
    return(
        <div className={styles.RaceInfo}>{season} - {raceName}</div>
    )
}

export default RaceInfo;