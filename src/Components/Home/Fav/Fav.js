import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Show from '../../Show/Show';
import {Placeholder, Card} from 'semantic-ui-react';


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
            return ( 
              <Card>
                <Placeholder inverted style={{ height: 383, width: 260 }}>
                  <Placeholder.Image />
                </Placeholder>
              </Card>
            )
          }
          return (
            <div>
                <Show key={data.ids.trakt} title={data.title} tvdbid={data.ids.tvdb} traktid={data.ids.trakt} year={data.year}/>
            </div>
          )
}

export default Fav