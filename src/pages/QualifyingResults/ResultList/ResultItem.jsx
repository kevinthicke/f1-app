import React from 'react';
import { MdLocationCity, MdPermIdentity, MdCheckBoxOutlineBlank } from 'react-icons/md';
import * as styles from './styles.css';

const ResultItem = ( { result }) => {
    const { number, position, familyName, url, givenName, nationality } = result;
    
    return (
        <div className={styles.ResultItem}>
            <div className={styles.position}> { position} </div> 
            <div className={styles.name}> 
                <span className={styles.icon}> <MdPermIdentity/> </span> 
                <a className={styles.hyperlink} href={url}> { `${givenName} ${familyName}` } </a>
            </div>
            <div className={styles.number}> 
                <span className={styles.icon}> <MdCheckBoxOutlineBlank/> </span>
                <span className={styles.spanText}> { number } </span>
                 </div>   
            <div className={styles.nationality}>
                <span className={styles.icon}> <MdLocationCity/> </span>
                <span className={styles.spanText}> { nationality } </span>
            </div>
        </div>
    )
        
}

export default ResultItem;