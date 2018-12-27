import React from 'react';
import { MdLocationCity, MdPermIdentity, MdCheckBoxOutlineBlank } from 'react-icons/md';
import * as styles from './styles.css';

const ResultItem = ( { result }) => {
    const { number, position, familyName, url, givenName, nationality } = result;
    
    return (
        <div className={styles.ResultItem}>
            <div className={styles.position}> { position} </div> 
            <div className={styles.name}> 
                <span> <MdPermIdentity/> </span> 
                <a href={url}> { `${givenName} ${familyName}` } </a>
            </div>
            <div className={styles.number}> 
                <span> <MdCheckBoxOutlineBlank/> </span>
                <span> { number } </span>
                 </div>   
            <div className={styles.nationality}>
                <span> <MdLocationCity/> </span>
                <span> { nationality } </span>
            </div>
        </div>
    )
        
}

export default ResultItem;