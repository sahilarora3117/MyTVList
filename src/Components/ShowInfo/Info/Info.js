import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Info.css';
import {Header, Container, Image, Flag} from 'semantic-ui-react'
import Episode from '../../Episode/Episode';
import {Accordion, Card} from 'react-bootstrap';

const Info = (props) => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        var address = "http://localhost:9000/seriesbanner/" + props.data.ids.tvdb;  
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
    var event = 0;
    return (
        <div>
            
              <div className="imagediv">
              
              <Image  src={image} alt="problem showing the poster" width="100%" className="image" fluid bordered/>
              </div>
            <Container>
              <Header as='h1'>{props.data.title}</Header>
              <Header as='h6' floated="left">{props.data.overview}</Header>
              <br /> <br />
              <p>Certification: {props.data.certification}</p>
              <p>Country: {props.data.country.toUpperCase()} <Flag name={props.data.country} /></p>
              <p>Language: {props.data.language.toUpperCase()}</p>
              
              <Header as='h2'>Episodes:</Header>
              <Accordion>
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
