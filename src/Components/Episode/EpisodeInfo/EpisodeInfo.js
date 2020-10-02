import React, {useEffect, useState} from 'react';
import {  Loader, Container, Header, Button, Statistic } from 'semantic-ui-react';
import Axios from 'axios';
import Watched from './WatchedButton/Watched';
const EpisodeInfo = (props) => {
    var path = window.location.href;
    var parray = path.split('/');
    var episode = parray[parray.length -1];
    var season = parray[parray.length -3];
    var id = parray[parray.length -5];
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get('https://mytvlistbackend.herokuapp.com/episode/' + id + '/' + season + '/' + episode)
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
        
      
    }, [id, season, episode]);

    if (data.length === 0) {
        return (
          <Container>
                      <Loader active inline='centered' >Loading</Loader>

          </Container>
       
          
          );
      }
      return (
        <Container>
      <Header as="h1" style={{marginTop:"1em"}} color="yellow">S{data.season}E{data.number}: {data.title}</Header>
      <header as="h5" color="grey">
        {data.overview}
      </header>
        <br />
      <Watched id={data.ids.trakt}></Watched>
      <br /><br />
      <Container>
      <Statistic inverted>
      <Statistic.Value>{data.rating}</Statistic.Value>
    <Statistic.Label>Rating</Statistic.Label>
  </Statistic>
  <Statistic inverted>
      <Statistic.Value>{data.votes}</Statistic.Value>
    <Statistic.Label>Votes</Statistic.Label>
  </Statistic>
  <Statistic inverted>
      <Statistic.Value>{data.runtime}</Statistic.Value>
    <Statistic.Label>Runtime</Statistic.Label>
  </Statistic>
      </Container>
      
        </Container>
        
      )
};




export default EpisodeInfo;