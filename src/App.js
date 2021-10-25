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
    
    <div className="tableData" >
      
    {
      kyc.map((data =>
        <table style={{color: "black"}}>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>ID</th>
            <th>Dataset</th>
            <th>Last Seen</th>
          </tr>
          <tr>
            <td>{data.name}</td>
            <td>{data.score}</td>
            <td>{data.id}</td>
            <td>{data.dataset}</td>
            <td>{data.last_seen}</td>
          </tr>
        </table>
      ))
    }
  </div>
  )
}

export default App;
