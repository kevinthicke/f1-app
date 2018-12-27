import React from 'react';
import ResultItem from './ResultItem';
import { restricQualifyingResults } from '../utils/restrictData';

const ResultList = ({ fullQualifyingResults }) => {
    const qualifyingResults = restricQualifyingResults(fullQualifyingResults);

    const aResults = qualifyingResults.map( result => <ResultItem result={result} key={result.driverId}/> );

    return <div> { aResults } </div>;
}

export default ResultList;