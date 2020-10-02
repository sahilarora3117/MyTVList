import React, {useState} from 'react';
import {  Button } from 'semantic-ui-react';

const Watched = (props) => {
    const [includes, setincludes] = useState();
    function check () {
        if (JSON.parse(localStorage.getItem("episodes")).includes(props.epid) === true){
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
    function addtowatched () {
        try{
            var myfav = localStorage.getItem("episodes");
            var storedFav  = JSON.parse(myfav);
            storedFav.push(props.epid);
            localStorage.setItem("episodes", JSON.stringify(storedFav));
            console.log(localStorage.getItem("episodes"))
            check();
          }
          catch {
            console.log("error updating")
          }
    }

    function removefromwatched () {
        var myfav = localStorage.getItem("episodes");
      var storedFav  = JSON.parse(myfav);
      storedFav = arrayRemove(storedFav, props.epid);
      localStorage.setItem("episodes", JSON.stringify(storedFav));
      check();
    }
    if (includes === true || JSON.parse(localStorage.getItem("episodes")).includes(props.epid) === true ){
        return (
                        <Button inverted size="tiny" floated="left" color="green" icon="eye" circular fitted onClick={removefromwatched}>

                        </Button>
                      

        )
    }
    else {
        return (
            <Button inverted size="tiny" floated="left" icon="eye" circular fitted onClick={addtowatched}>

            </Button>
                
         
        )
    }
}

export default Watched;