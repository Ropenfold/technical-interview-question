import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MoonImage from './components/MoonImage/MoonImage';

function App() {

  const [moonData, setMoonData] = useState([])
  const [isLoading, setLoadStatus] = useState(false)
  
  useEffect(() => {
    const getMoonData = async () => {
      setLoadStatus(true)
      try {
      const {data: response } = await axios.get('https://images-api.nasa.gov/search?q=moon')
       console.log('response', response.collection.items);
       setMoonData(response.collection.items);
       
      } catch(error) {
        console.log('error', error)
      } 
      setLoadStatus(false)
     }
     getMoonData()

  }, [])
  
  return (
    <div className="App">
            <p>The Moon</p>
            <main>
      {!isLoading && (
        moonData.map((item, index) => {
          return <div key={index}>
         {item.links && item.links.length > 0 && (<MoonImage item={item} />)}
        </div>
        })
      )}
      </main>
    </div>
  );
}

export default App;
