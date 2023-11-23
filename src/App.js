import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  useEffect(() => {
    fetch("http://api.open-notify.org/iss-now.json").then(a => a.json()).then(b => {
      setLatitude(b.iss_position.latitude);
      setLongitude(b.iss_position.longitude);
    })
  }, [])
  return (
    <div className="App">
      <h2>The space station is currently flying over</h2>
      <h1>Latitude: {latitude} and Longitude: {longitude}</h1>
    </div>
  );
}

export default App;
