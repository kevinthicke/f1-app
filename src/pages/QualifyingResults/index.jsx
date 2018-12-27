import React, { Component } from 'react';
import fetch from 'node-fetch';

import RaceHeader from './RaceHeader';
import ResultList from './ResultList/';
import * as styles from './styles.css'
import { restricApiData } from './utils/restrictData';


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
            this.setState(restricApiData(data))
        });
    }

    showResultList(data) {
        if(data) {
            return <ResultList fullQualifyingResults={data}/>
        } else return "... Loading";
    }

    render() {
        const { season, raceName, QualifyingResults: fullQualifyingResults} = this.state;
        
        return (
            <div className={styles.QualifyingResults}>
                <RaceHeader season={season} raceName={raceName}/>
                { this.showResultList(fullQualifyingResults) }
            </div>
        );
    }
}