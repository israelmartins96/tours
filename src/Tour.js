// ***IMPORTS*** //
// React
import React from 'react';

// ***COMPONENT*** //
const Tour = ( { id, title, fee, description, image, removeTour } ) => {
    const [readMore, setReadMore] = React.useState(false);

    const toggleDescription = (id) => {
        setReadMore(!readMore);
    }
    
    // Display fee with comma separator
    let feeOutput = fee.toString().split('');
    feeOutput.splice(1, 0, ',');
    feeOutput = feeOutput.join('');
    
    return(
        <section className='tour'>
            <img src={ image } alt={ title } className='tour-image'/>
            <div className="tour-info">
                <header>
                    <h2 className='tour-title'>{ title }</h2>
                    <h6 className='tour-fee'>${ feeOutput }</h6>
                </header>
                <div className='tour-description'>
                    <p className='body'>{ readMore ? description : `${description.slice(0, 200)}...` }</p>
                    <button className='description-toggle' onClick={ () => { toggleDescription(id); } }>{ readMore ? 'Show Less' : 'Read More' }</button>
                </div>
                <button className='remove-tour btn' onClick={ () => { removeTour(id); } }>Not Interested</button>
            </div>
        </section>
    )
};

// ***EXPORT*** //
export default Tour;