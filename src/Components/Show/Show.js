import React, {useState, useEffect} from 'react';
import Axios from 'axios';
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
            <img height="250" width="200" src={image} alt="problem showing the poster"/>
            <p>
              {props.title} {image}
            </p>
          </div>
        )
      
}

export default Show;