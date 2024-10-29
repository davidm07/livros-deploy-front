import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const apiRota = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiRota);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [apiRota]);

  return (
    <>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}

export default App;
