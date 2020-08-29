import React, {useState, useEffect} from 'react'
import Show from '../Show/Show';
import Axios from 'axios';
import {Grid, Loader, Container, Header} from 'semantic-ui-react'
const Top = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      Axios.get('https://mytvlistbackend.herokuapp.com/anticipated')
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
          <Header as="h2" inverted style={{marginTop:"1em", marginBottom:"1em"}} color="purple">Most Anticipated</Header>
          <Loader active inline='centered' >Loading</Loader>
          </Container>
          
          );
      }
      return (
        <div>
        <Container>
          <Header as="h2" inverted style={{marginTop:"1em", marginBottom:"1em"}} color="purple">Most Anticipated</Header>

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





export default Top;