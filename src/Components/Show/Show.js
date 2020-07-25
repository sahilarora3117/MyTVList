import React, {useState, useEffect} from 'react';
import Axios from 'axios';
const Show = (props) => {
    const [image, setImage] = useState([]);
    function arrayRemove(array, value) {
      for(let i=0; i<array.length; ++i) {
          if(array[i] === value) {
              let copy = [...array];
              copy.splice(i, 1);
              return copy;
          }
      }
      return array;
  }
    function addToFav (id){
      try{  
        if (localStorage.getItem("myfav") === null) {
          localStorage.setItem("myfav", "[]");
        }
        var myfav = localStorage.getItem("myfav");
        var storedFav  = JSON.parse(myfav);
        storedFav.push(id);
        localStorage.setItem("myfav", JSON.stringify(storedFav));
        console.log(localStorage.getItem("myfav"))
      }
      catch {
        console.log("error updating")
      }
    }
    
    function removeFromFav (id){
      var myfav = localStorage.getItem("myfav");
      var storedFav  = JSON.parse(myfav);
      storedFav = arrayRemove(storedFav, id);
      localStorage.setItem("myfav", JSON.stringify(storedFav));
    }

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
    if (JSON.parse(localStorage.getItem("myfav")).includes(props.traktid)){
        return (
          <div>
            <img height="250" width="200" src={image} alt="problem showing the poster"/>
            <p>
              {props.title}
            </p>
            <a href={path}><button>Info</button></a>
            <button onClick={() => removeFromFav(props.traktid)}>Remove from favorite</button>
          </div>
        )
        }
    else {
      return (
        <div>
          <img height="250" width="200" src={image} alt="problem showing the poster"/>
          <p>
            {props.title}
          </p>
          <a href={path}><button>Info</button></a>
          <button onClick={() => addToFav(props.traktid)}>Add to favorite</button>
        </div>
      )
    }
      
}

export default Show;