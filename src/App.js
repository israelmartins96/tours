// ***IMPORTS*** //
// React
import React from 'react';
// Tours data
import toursData from './data-tours';
// Tours Component
import Tours from './Tours';
// Loading Component
import Loading from './Loading';

// ***MAIN COMPONENT*** //
function App() {
  const [isLoading, setIsLoading] = React.useState(true); //Loading state
  const [tours, setTours] = React.useState([]); //Tours array

  // Check for and get tours if any
  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await toursData;
      const tours = await response;
      setTours(tours);
      setIsLoading(false); //Remove Loading indicator; loading complete
    } catch (error) {
      console.log(error);
    }
  };
  
  // Remove a tour from the list
  const removeTour = (id) => {
    const toursListUpdate = tours.filter( (tour) => tour.id !== id );
    setTours(toursListUpdate);
  };

  React.useEffect(() => {
    getTours();
  }, []);

  // When the app is loading
  if (isLoading) {
    return <Loading/>;
  }

  // If there are no tours
  if (tours.length === 0) {
    // Inform user
    return(
      <main className='container'>
        <div className='no-tours'>
          <h2>There Are No Tours Available Right Now</h2>
          <button className='refresh-tours btn btn-primary' onClick={ () => { getTours(); } }>Refresh</button>
        </div>
      </main>
    );
  }
  
  // If there are tours
  return (
    <main className='container'>
      <header className='main-heading'>
        <h1>Our Tours</h1>
        <div className='underline'></div>
      </header>
      <div className="tours">
        <Tours tours={ tours } removeTour={ removeTour }/>
      </div>
    </main>
  );
}

// ***EXPORT*** //
export default App;
