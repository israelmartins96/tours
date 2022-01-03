// ***IMPORTS*** //
// React
import React from 'react';
// Tour
import Tour from './Tour.js';

// ***COMPONENT*** //
const Tours = ( { tours, removeTour } ) => {
    return(
        <>
            {
                tours.map(
                    (tour) => {
                        return <Tour key={ tour.id } {...tour} removeTour={ removeTour }/>;
                    }
                )
            }
        </>
    );
};

// ***EXPORT*** //
export default Tours;