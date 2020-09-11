import React, {useEffect, useState} from 'react';
import {Item, Container, Header} from 'semantic-ui-react'
import UpcomingEpisode from './UpcomingEpisode/UpcomingEpisode';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect (() => {
        var fav = JSON.parse(localStorage.getItem("myfav"));
        
        setData(fav);
        
    }, []);   
    
    if (JSON.parse(localStorage.getItem("myfav")).length === 0){
        
        return (
            <Header>Looks like you don't have any upcoming episodes.</Header>
        )
    }
    
        return (
            <div>
                <Container>
                <Header as="h2" inverted color="purple" style={{marginTop:"1em", marginBottom:"1em"}}>Upcoming</Header>
            
            <Item.Group>
                    {data.map(ids =>(
                        <Item>
                            <UpcomingEpisode id={ids}/>
                        </Item> 
                    
                    ))}
            </Item.Group>
            </Container>
            </div>
    
        )
    
    }
export default Home;