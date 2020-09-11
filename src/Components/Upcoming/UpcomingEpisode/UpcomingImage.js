import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Image, Header, Loader, Container} from 'semantic-ui-react';

const UpcomingImage = (props) => {
    const [image, setImage] = useState([]);  
    useEffect(() => {
      var address = "https://mytvlistbackend.herokuapp.com/seriesimage/" + props.id;  
      Axios.get(address)
      .then(function (response) {
          setImage (response.data);
          console.log(response.data);
          console.log(props.id)
          
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      
    }, [props.id]);
    return (
        <Image floated="left" size="medium" src={image} alt={props.title}/>
          )
  
    }


export default UpcomingImage;