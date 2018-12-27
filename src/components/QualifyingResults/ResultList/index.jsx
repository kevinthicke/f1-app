import React from 'react';
import ResultItem from './ResultItem';

const restricQualifyingResults = (fullQualifyingResults) => {
    
    return fullQualifyingResults.map( fullQualifyingResult => {
        console.log(fullQualifyingResult)
        const { 
            number, 
            position, 
            Driver: { 
                url,
                familyName, 
                givenName, 
                nationality 
            }
        } = fullQualifyingResult;
        
        return ({ number, position, url, familyName, givenName, nationality })
    });
}

const ResultList = ({ fullQualifyingResults }) => {
    const qualifyingResults = restricQualifyingResults(fullQualifyingResults);

    const aResults = qualifyingResults.map( result => {
        return <ResultItem result={result} key={result.driverId}/> 
});
    return(
        <div> { aResults } </div>
    )    
}

export default ResultList;