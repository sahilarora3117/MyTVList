import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Grid, Loader, Button, Container, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Popular = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.get('https://mytvlistbackend.herokuapp.com/list')
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
          <Container>
          <Header as="h2" inverted style={{marginTop:"1em", marginBottom:"1em"}} color="purple">Genres</Header>
          <Loader active inline='centered' >Loading</Loader>
          </Container>
          );
      }
      return (
        <div>
        <Container>
          <Header as="h2" inverted style={{marginTop:"1em", marginBottom:"1em"}} color="purple">Genres</Header>
          </Container>
        <Grid doubling columns={5} container style={{marginBottom:"1em"}}>

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