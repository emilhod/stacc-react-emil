import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [kyc, setKyc] = useState(null);

  const getKycData = async () => {
    const response = await axios.get("https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=Knut%20Arild%20Hareide");
    setKyc(response.data);
  };
  
  useEffect(() => {
    getKycData();
  }, []);

  

  

  return (
    <div>
      <p>{kyc}</p>
 
    </div>
  )
}

export default App;
