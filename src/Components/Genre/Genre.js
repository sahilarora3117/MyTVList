import React, {useState, useEffect} from 'react'
import Show from '../Show/Show';
import Axios from 'axios';
import {Container, Grid, Header, Loader} from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';

const Genre = () => {
    const [data, setData] = useState([]);
    let location = useLocation();
    var path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        Axios.get('https://mytvlistbackend.herokuapp.com/genres/' + path)
        .then(function (response) {
          setData(response.data);
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, [path]);

  
      if (data.length === 0) {
        return (
          <Container>
                      <Loader active inline='centered' >Loading</Loader>

          </Container>
       
          
          );
      }
      return (
        <div>
          <Container>
          <Header as="h2" inverted color="purple" style={{textTransform:"capitalize", marginTop:"1em", marginBottom:"1em"}}>{path}</Header>

          </Container>
        <Grid doubling columns={4} container>

        {data.map(show =>(
          <Grid.Column key={show.show.ids.trakt} >
          <Show key={show.show.ids.trakt} title={show.show.title} tvdbid={show.show.ids.tvdb} traktid={show.show.ids.trakt} year={show.show.year}/>
          </Grid.Column>
        ))}
        </Grid>
        </div>
      )
};





export default Genre;