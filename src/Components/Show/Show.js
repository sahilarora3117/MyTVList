import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, Image, Header} from 'semantic-ui-react'
import FavIcon from './Favicon/Favicon.js';
import placeholder from './tv.png';
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
    var path = "/show/" + props.traktid;
    return (
      <div>
        

        
        <a href={path}><Header as='h5' floated="left">{props.title}</Header></a>
        <Header floated="right" as="h5"><FavIcon key={props.traktid} id = {props.traktid}/></Header>
        <Card>
        
        
          <Image src={image} alt={placeholder} href={path}/>
        </Card>
        
        </div>
        )

    
      
}

export default Show;