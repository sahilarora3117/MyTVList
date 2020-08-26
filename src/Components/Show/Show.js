import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, Image, Header} from 'semantic-ui-react'
import FavIcon from './Favicon/Favicon.js';
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
      
      
      <div>
        <Link to={"/show/" + props.traktid}>
                  <Header color="yellow" as='h5' floated="left">{props.title}</Header>
        </Link>
        <Header floated="right" as="h5"><FavIcon key={props.traktid} id = {props.traktid}/></Header>
        <Link to={"/show/" + props.traktid}>
        <Card>
          <Image fluid src={image} alt={props.title}/>
        </Card>
        </Link>
        </div>
        )

    
      
}

export default Show;