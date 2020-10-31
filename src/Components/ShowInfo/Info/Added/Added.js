import React, { useState } from 'react'
import { Button} from 'semantic-ui-react'
export const arrayRemove =(array, value)=> {
    for(let i=0; i<array.length; ++i) {
        if(array[i] === value) {
            let copy = [...array];
            copy.splice(i, 1);
            return copy;
        }
    }
    return array;
}
const Added = (props) => {
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
            <Button inverted color="red" onClick={removefromfav}>
                Remove from the List
            </Button>

        )
    }
    else {
        return (
            <Button inverted color="yellow" onClick={addtofav}>
                Add to the List
            </Button>
            
        )
    }
    
}

export default Added;