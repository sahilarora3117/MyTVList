import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Info.css';
import {Header, Container, Image, Flag, Embed} from 'semantic-ui-react'
import Episode from '../../Episode/Episode';
import {Accordion, Card} from 'react-bootstrap';
function youtube_parser(url){
  if (url === null){
    return;
  }
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length===11)? match[7] : false;
}
const Info = (props) => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        var address = "http://192.168.1.10:9000/seriesbanner/" + props.data.ids.tvdb;  
        Axios.get(address)
        .then(function (response) {
            setImage (response.data);
            
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

        

      }, [props.data.ids.tvdb]);

    return (
        <div>
            
              <div className="imagediv">
              
              <Image  src={image} alt="problem showing the poster" width="100%" className="image" fluid bordered/>
              </div>
            <Container>
              <Header as='h1' color="yellow">{props.data.title}</Header>
              <Header as='h6' color="grey">{props.data.overview}</Header>
              <br /> <br />
              <p>Certification: {props.data.certification}</p>
              <p>Country: {props.data.country.toUpperCase()} <Flag name={props.data.country} /></p>
              <p>Language: {props.data.language.toUpperCase()}</p>
              <Embed
            id={youtube_parser(props.data.trailer)}
            placeholder='https://www.xda-developers.com/files/2018/03/youtube-dark-1024x672.png'
            source='youtube'
  />
              <Header as='h2'>Episodes:</Header>
              <Accordion className="Acc">
              <Card>
              {props.episode.map((season, index) =>(
                <div>
                  

                    <Accordion.Toggle as={Card.Header} eventKey={index+1}>                                
                    Season:  {season.number}
                       </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index+1}>
      <Card.Body><Episode data={season} /></Card.Body>
    </Accordion.Collapse>
                  
                  
                </div>
    
              ))}
              </Card>
              </Accordion>
            </Container>
        </div>
    )
}

export default Info
