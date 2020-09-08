import React, {useEffect, useState} from 'react';
import {Grid, Container, Header} from 'semantic-ui-react'
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
                <Header as="h2" inverted color="purple" style={{marginTop:"1em", marginBottom:"1em"}}>Your TVList</Header>
            </Container>
                <Grid doubling columns={4} container>
            
                    {data.map(ids =>(
                    <Grid.Column>
                        <UpcomingEpisode></UpcomingEpisode>
                    </Grid.Column>
                    ))}
                </Grid>
            </div>
    
        )
    
    }
export default Home;