import React, { useState } from 'react'
import {Button} from 'semantic-ui-react'

const WatchedEp = (props) => {
    const [includes, setincludes] = useState();
    function check () {
        if (JSON.parse(localStorage.getItem("episodes")).includes(props.id) === true){
            console.log(JSON.parse(localStorage.getItem("episodes")));
            setincludes(true);
            console.log("true called");
        }
        else {
            setincludes(false);
            console.log(JSON.parse(localStorage.getItem("episodes")));
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
            var myfav = localStorage.getItem("episodes");
            var storedFav  = JSON.parse(myfav);
            storedFav.push(props.id);
            localStorage.setItem("episodes", JSON.stringify(storedFav));
            console.log(localStorage.getItem("episodes"))
            check();
          }
          catch {
            console.log("error updating")
          }
    }

    function removefromfav () {
        var myfav = localStorage.getItem("episodes");
      var storedFav  = JSON.parse(myfav);
      storedFav = arrayRemove(storedFav, props.id);
      localStorage.setItem("episodes", JSON.stringify(storedFav));
      check();
    }
    if (includes === true || JSON.parse(localStorage.getItem("episodes")).includes(props.id) === true ){
        return (
            <Button inverted color="red" onClick={removefromfav}>
                Remove from Watched
            </Button>

        )
    }
    else {
        return (
            <Button inverted color="yellow" onClick={addtofav}>
                Mark as Watched
            </Button>
            
        )
    }
    
}

export default WatchedEp;