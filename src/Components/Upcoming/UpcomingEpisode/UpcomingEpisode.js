import React, {useState, useEffect} from 'react';
import {Item, Container, Header, Button} from 'semantic-ui-react';
import Axios from 'axios';
import UpcomingImage from './UpcomingImage';
import {Link} from 'react-router-dom';
const UpcomingEpisode = (props) => {
    const [data, setData] = useState([]);  
    const [datanext, setDataNext] = useState([]);  

    useEffect(() => {
      var address = "https://mytvlistbackend.herokuapp.com/next/" + props.id;  
      Axios.get(address)
      .then(function (response) {
          setData (response.data);
          
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

      address = "https://mytvlistbackend.herokuapp.com/showsummary/" + props.id;  
      Axios.get(address)
      .then(function (response) {
          setDataNext (response.data);
          
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }, [props.id]);
    if (data.length === 0 || datanext.length === 0) {
        return (
          <span></span>
          );
        }

    return (
        <div>
            <Item.Content>

    <Header color="yellow" inverted as='h2'>{datanext.title}: {data.title}</Header>
    <Header as="h5" inverted>{data.first_aired.split("T")[0]}</Header>

    <UpcomingImage id={datanext.ids.tvdb}></UpcomingImage>
    <Container>
    <Header color="purple" inverted as='h5'> S{data.season}E{data.number}</Header>
    <Header inverted as="h6">{data.overview}</Header></Container>
      <Container style={{marginTop:"2rem"}}>
      <Link to={"/show/" + props.id}>

    <Button inverted color="red" floated="left">More About this Show</Button>
    </Link>
    <Link to={"/episodes/" + props.id + "/season/" + data.season + "/episode/" + data.number}>
    <Button inverted color="yellow" floated="left">More About this Episode</Button>
    </Link>
      </Container>
    

      </Item.Content>
        </div>
    )
}
export default UpcomingEpisode;