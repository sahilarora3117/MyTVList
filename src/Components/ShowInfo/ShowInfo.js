import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Info from './Info/Info';
import {Loader} from 'semantic-ui-react';
const ShowInfo = () => {
    let location = useLocation();
    var path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    const [data, setData] = useState([]);
    const [episode, setEpisode] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        Axios.get('https://mytvlistbackend.herokuapp.com/showinfo/' + path)
        .then(function (response) {
          setData(response.data);
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        var address = "https://mytvlistbackend.herokuapp.com/episodelist/" + path;  
        Axios.get(address)
        .then(function (response) {
            setEpisode (response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        var address = "https://mytvlistbackend.herokuapp.com/comments/" + path;  
        Axios.get(address)
        .then(function (response) {
            setComments (response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }, [path]);
    if (data.length === 0){
        return (
            <div>
                          <Loader active style={{marginTop:"1em"}} inline='centered' >Loading</Loader>

            </div>
        )
    }
    else {
        return (
            <div>
                <Info data={data} traktid={path} episode={episode} comments={comments}/>
            </div>
        )
    }
    
  
}



export default ShowInfo;