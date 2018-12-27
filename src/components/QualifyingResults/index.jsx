import React, { Component } from 'react';
import fetch from 'node-fetch';

import RaceInfo from './RaceInfo';
import ResultList from './ResultList/';
import * as styles from './styles.css'

const restricData = (data) => {
    const { 
            MRData: { 
                RaceTable: { 
                    Races: [
                        {
                            season, 
                            raceName,
                            QualifyingResults
                        }
                    ]
                }
            }
        } = data;

    return ({
        season,
        raceName,
        QualifyingResults
    });       
}


export default class QualifyingResults extends Component {
    constructor() {
        super();
        this.state = {
            season: null,
            raceName: null,
            QualifyingResults: null
        }
    }

    componentDidMount() {
        this.getData(); 
    }
    
    getData() {
        const response = fetch('http://ergast.com/api/f1/2008/qualifying.json').then(response => response.json());
        
        response.then(data => {
            this.setState(restricData(data))
        });
    }

    render() {
        const { season, raceName, QualifyingResults: fullQualifyingResults} = this.state;
        return (
            <div className={styles.QualifyingResults}>
                <RaceInfo season={season} raceName={raceName}/>
                {
                    fullQualifyingResults ? <ResultList fullQualifyingResults={fullQualifyingResults}/> : "...loading"
                }
                
            </div>
        );
    }
}