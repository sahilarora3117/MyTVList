import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Grid, Loader, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Popular = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.get('http://192.168.1.10:9000/list')
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
      }, []);
  
      if (data.length === 0) {
        return (
          <Loader active inline='centered' >Loading</Loader>
          
          );
      }
      return (
        <div>
        
        <Grid doubling columns={5} container>

        {data.map(genre =>(
          <Grid.Column key={genre.slug} >
            <Link to={"/list/" + genre.slug}>
            <Button inverted color='purple'>{genre.name}</Button>
            </Link>
          </Grid.Column>
        ))}
        </Grid>
        </div>
      )
};





export default Popular;