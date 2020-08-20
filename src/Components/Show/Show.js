import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, Image, Header} from 'semantic-ui-react'
import FavIcon from './Favicon/Favicon.js';
import placeholder from './tv.png';
import {Link} from 'react-router-dom';
const Show = (props) => {
    const [image, setImage] = useState([]);  
    useEffect(() => {
      var address = "http://localhost:9000/seriesimage/" + props.tvdbid;  
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
    }, [props.tvdbid]);
    return (
      <Link to={"/show/" + props.traktid}>
      
      <div>
        <Header as='h5' floated="left">{props.title}</Header>
        <Header floated="right" as="h5"><FavIcon key={props.traktid} id = {props.traktid}/></Header>
        <Card>
          <Image src={image} alt={placeholder}/>
        </Card>
        
        </div>
        </Link>
        )

    
      
}

export default Show;