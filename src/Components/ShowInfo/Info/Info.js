import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Info.css';

const Info = (props) => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        var address = "http://localhost:9000/seriesbanner/" + props.tvdbid;  
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
            <img src={image} alt="problem showing the poster" width="100%" className="image"/>
        </div>
    )
}

export default Info
