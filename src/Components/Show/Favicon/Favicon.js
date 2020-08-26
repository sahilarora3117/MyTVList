import React, { useState } from 'react'
import {Icon} from 'semantic-ui-react'

const FavIcon = (props) => {
    const [includes, setincludes] = useState();
    function check () {
        if (JSON.parse(localStorage.getItem("myfav")).includes(props.id) === true){
            console.log(JSON.parse(localStorage.getItem("myfav")));
            setincludes(true);
            console.log("true called");
        }
        else {
            setincludes(false);
            console.log(JSON.parse(localStorage.getItem("myfav")));
            console.log("false called");
        }
    }
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
    function addtofav () {
        try{
            var myfav = localStorage.getItem("myfav");
            var storedFav  = JSON.parse(myfav);
            storedFav.push(props.id);
            localStorage.setItem("myfav", JSON.stringify(storedFav));
            console.log(localStorage.getItem("myfav"))
            check();
          }
          catch {
            console.log("error updating")
          }
    }

    function removefromfav () {
        var myfav = localStorage.getItem("myfav");
      var storedFav  = JSON.parse(myfav);
      storedFav = arrayRemove(storedFav, props.id);
      localStorage.setItem("myfav", JSON.stringify(storedFav));
      check();
    }
    if (includes === true || JSON.parse(localStorage.getItem("myfav")).includes(props.id) === true ){
        return (
            <Icon name="favorite" color='red' fitted onClick={removefromfav}></Icon>
        )
    }
    else {
        return (
            <Icon name="favorite" color="blue" fitted onClick={addtofav}></Icon>
        )
    }
    
}

export default FavIcon;