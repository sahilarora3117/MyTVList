import React, {useState, useEffect} from 'react'
import Show from '../Show/Show';
import Axios from 'axios';

const Top = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.get('http://localhost:9000/trending')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      }, []);
  
      if (data.length === 0) {
        return <p>Loading...</p>;
      }
      return (
        <div>
        <h1>Displaying shows now</h1>
        {data.map(show =>(
          <Show key={show.show.ids.trakt} title={show.show.title} tvdbid={show.show.ids.tvdb} traktid={show.show.ids.trakt} />
        ))}
        </div>
      )
};





export default Top;