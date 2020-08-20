import React, {useState, useEffect} from 'react';
import Show from '../Show/Show';
import { useLocation } from 'react-router-dom';
import Axios from 'axios'
import {Grid, Loader} from 'semantic-ui-react'

const Result = (props) => {
    const [data,setData] = useState([]);
    let location = useLocation();
    var path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

    useEffect (() => {
        Axios.get('http://localhost:9000/search/' + path)
        .then(function (response) {
          setData(response.data);
          console.log(response.data);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }, [path])
   if (data.length === 0){
        return (
            <div>
<Loader active inline='centered' >Loading</Loader>
            </div>
        )
    }
    else {
        return (
            <div>
        <h1>Displaying shows now</h1>
        
        <Grid doubling columns={4} container>

        {data.map(show =>(
          <Grid.Column key={show.show.ids.trakt} >
          <Show key={show.show.ids.trakt} title={show.show.title} tvdbid={show.show.ids.tvdb} traktid={show.show.ids.trakt} year={show.show.year}/>
          </Grid.Column>
        ))}
        </Grid>
        </div>
        )
    }
}

export default Result;