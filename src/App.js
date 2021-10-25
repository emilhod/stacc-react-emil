import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [kyc, setKyc] = useState([])


  const fetchData = () => {
    return axios.get("https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=Knut%20Arild%20Hareide")
          .then((response) => {
            console.log(response.data);
            const myResp = response.data;
            let innerData = myResp.hits
            setKyc(innerData);
          });
  };


  
  useEffect(() => {
    fetchData();
  }, []);

  

  

  return (
    <div className = "App">
            <ol>
             {
                kyc.map((item) => ( 
                <li key = { item.id } >
                    userID: { item.id }, 
                    Navn: { item.name }, 
                    </li>
                ))
            }
            </ol>
        </div>
  )
}

export default App;
