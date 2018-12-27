export const restricApiData = (data) => {
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

export const restricQualifyingResults = (fullQualifyingResults) => {
    
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
