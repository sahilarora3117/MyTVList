import React, {useState, useEffect} from 'react'
import Shows from '../Shows/Shows'
import Axios from 'axios';
import myHeaders from '../Environment/Environment'


const Top = (props) => {
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
      return <p>{data.map(show =>(show.show.ids.trakt))}</p>;
    };





export default Top;