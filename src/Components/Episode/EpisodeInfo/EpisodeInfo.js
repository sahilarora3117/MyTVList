import React, {useEffect, useState} from 'react';
import {  Loader, Container, Header } from 'semantic-ui-react';
import Axios from 'axios';
const EpisodeInfo = (props) => {
    var path = window.location.href;
    var parray = path.split('/');
    var episode = parray[parray.length -1];
    var season = parray[parray.length -3];
    var id = parray[parray.length -5];
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
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
        </Container>
        
      )
};




export default EpisodeInfo;