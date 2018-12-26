import React from 'react';

const restricQualifyingResults = (fullQualifyingResults) => {
    console.log(fullQualifyingResults);
    const qualifyingResults =  fullQualifyingResults.map( fullQualifyingResult => {
        const { 
            number, 
            position, 
            Driver: { 
                driverId,
                familyName, 
                givenName, 
                nationality 
            }
        } = fullQualifyingResult;
        return ({ number, position, driverId, familyName, givenName, nationality })
    })
    return qualifyingResults;
}

const ResultList = ({ fullQualifyingResults }) => {
    const qualifyingResults = restricQualifyingResults(fullQualifyingResults);
    const aResults =  qualifyingResults.map( result => {
        const { number, position, driverId, familyName, givenName, nationality } = result;
        return(
            <ul key={driverId}>
                <li> { givenName + familyName } </li>
                <li> { nationality } </li>
                <li> { number } </li>
                <li> Position { position} </li>
            </ul>
        )
    });
    return(
        <div>
            { aResults }
        </div>
    )    
}

export default ResultList;