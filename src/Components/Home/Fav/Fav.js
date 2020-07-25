import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Show from '../../Show/Show';



const Fav = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:9000/showsummary/' + props.ids)
        .then(function (response) {
          console.log(response.data)
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        }, [props.ids]);
        if (data.length === 0) {
            return <p>Loading...</p>;
          }
          return (
            <div>
                <Show key={data.ids.trakt} title={data.title} tvdbid={data.ids.tvdb} traktid={data.ids.trakt} />
            </div>
          )
}

export default Fav