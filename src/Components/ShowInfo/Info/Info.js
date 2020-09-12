import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Info.css';
import Added from './Added/Added';
// import Cast from './Cast/Cast';
import {Header, Container, Image, Flag, Embed, Button} from 'semantic-ui-react'
import Episode from '../../Episode/Episode';
import {Accordion, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
        var address = "https://mytvlistbackend.herokuapp.com/seriesbanner/" + props.data.ids.tvdb;  
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
              
              <Image  src={image} width="100%" className="image" fluid bordered/>
              </div>
            <Container>
              <Header as='h1' color="yellow">{props.data.title + " (" + props.data.year  + ")"}</Header>
              <Added id={props.data.ids.trakt}/>

              <Header as='h3' color="red">{props.data.network + " (" + props.data.status + ")"} </Header>
              <Header as='h6' color="grey">{props.data.overview}</Header>
              <Button inverted href={props.data.homepage} color="blue">Visit Homepage</Button>
              <Header as='h6' inverted>Certification: {props.data.certification} <br /> Country: {props.data.country.toUpperCase()} <Flag name={props.data.country} /> <br /> Language: {props.data.language.toUpperCase()}</Header>
              {props.data.genres.map((gen) =>(
                  <Link to={"/list/" + gen}>
                    <Button style={{marginRight:"1em"}} inverted color="purple" size="small">{gen.charAt(0).toUpperCase() + gen.slice(1)}</Button>
                  </Link>
    
              ))}
              <Header as='h2' color="yellow">Trailer:</Header>
              <Embed
            id={youtube_parser(props.data.trailer)}
            placeholder='https://www.xda-developers.com/files/2018/03/youtube-dark-1024x672.png'
            source='youtube'
  />
              {/* <Header as='h2' color="yellow">Cast</Header>
              <Cast cast={props.cast}/> */}
              <Header as='h2' color="yellow">Episodes:</Header>
              <Accordion style={{backgroundColor:"black", border:"none"}}>
              <Card>
              {props.episode.map((season, index) =>(
                <div>
                  

                    <Accordion.Toggle style={{backgroundColor:"#202020", border:"none"}} as={Card.Header} eventKey={index+1} >                                
                    Season:  {season.number}
                       </Accordion.Toggle>
                      <Accordion.Collapse style={{backgroundColor:"#202020", color:"white"}} eventKey={index+1}>
      <Card.Body><Episode id={props.traktid} season={season.number} data={season} /></Card.Body>
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
