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
    useEffect(() => {
        Axios.get('http://192.168.1.10:9000/showinfo/' + path)
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
        var address = "http://192.168.1.10:9000/episodelist/" + path;  
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
    }, [path]);
    if (data.length === 0 || episode.length === 0){
        return (
            <div>
                          <Loader active inline='centered' >Loading</Loader>

            </div>
        // <Info tvdbid={data.ids.tvdb}/>
        )
    }
    else {
        return (
            <div>
                <Info data={data} episode={episode}/>
            </div>
        )
    }
    
  
}



export default ShowInfo;