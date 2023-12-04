// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// Install axios for API requests: npm install axios

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BeerApp = () => {
//   const [beers, setBeers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.punkapi.com/v2/beers');
//         setBeers(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredBeers = beers.filter((beer) =>
//     beer.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search beers"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {filteredBeers.map((beer) => (
//           <div key={beer.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
//             <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '100px' }} />
//             <h3>{beer.name}</h3>
//             <p>{beer.tagline}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BeerApp;


import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchBeers } from './Components/api';
import BeerCard from './Components/BeerCard';

const BeerApp = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBeers();
      setBeers(data);
    };

    fetchData();
  }, []);

  const filteredBeers = beers.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input  className="input-container"
        type="text"
        placeholder="Search beers"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-container" >
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default BeerApp;
