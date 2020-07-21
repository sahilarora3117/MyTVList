import React, {useState, useEffect} from 'react'
import Show from '../Show/Show';
import Axios from 'axios';
import myHeaders from '../Environment/Environment'

const Top = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const result = await Axios(
            `https://api.trakt.tv/shows/trending?page=$1+"&limit=10`,
            {
              method: "GET",
              headers: myHeaders
            }
          );
          setData(result.data);
          console.log(result.data);
            
        };
        fetchData();
      }, []);
        
      if (data.length === 0) {
        return <p>Loading...</p>;
      }
      return (
        <div>
        <h1>Displaying shows now</h1>
        {data.map(show =>(
          <Show id={show.show.ids.trakt} />
        ))}
        </div>
      )
};





export default Top;