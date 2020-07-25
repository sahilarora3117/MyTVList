import React, {useEffect, useState} from 'react';
import Fav from './Fav/Fav';
const Home = () => {
    function emptylocal () {
        localStorage.removeItem ("myfav");
    }
    const [data, setData] = useState([]);

    useEffect (() => {
        var fav = JSON.parse(localStorage.getItem("myfav"));
        if (fav === null){
            return;
        }
        setData(fav);
        
    }, []);   
    return (
        <div>
        {data.map(ids =>(
          <Fav key={ids} ids={ids} />
        ))}
        <button onClick={emptylocal}>remove local storage</button>        
        </div>

    )
    }
export default Home;