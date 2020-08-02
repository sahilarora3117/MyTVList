import React, {useEffect, useState} from 'react';
import Fav from './Fav/Fav';
import {Grid} from 'semantic-ui-react'

const Home = () => {
    function emptylocal () {
        localStorage.removeItem ("myfav");
        localStorage.removeItem ("episodes");
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
            <Grid doubling columns={4} container>

                {data.map(ids =>(
                <Grid.Column>
                    <Fav key={ids} ids={ids} />
                </Grid.Column>
                ))}
            </Grid>
            <button onClick={emptylocal}>Clear Data</button>
        </div>

    )
    }
export default Home;