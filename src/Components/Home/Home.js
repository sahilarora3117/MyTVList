import React, {useEffect, useState} from 'react';
import Fav from './Fav/Fav';
import {Grid, Container, Header, Icon} from 'semantic-ui-react'

const Home = () => {
    function emptylocal () {
        localStorage.removeItem ("myfav");
        localStorage.removeItem ("episodes");
    }
    const [data, setData] = useState([]);

    useEffect (() => {
        var fav = JSON.parse(localStorage.getItem("myfav"));
        
        setData(fav);
        
    }, []);   
    
    if (data.length === 0){
        return (
            <Container textAlign="center">
                <Header as="h3" inverted color="purple" style={{marginTop:"3em", marginBottom:"3em"}}>This looks empty try adding some shows</Header>
                <Icon name='file outline' size='massive' color="purple" />
            </Container>
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
                        <Fav key={ids} ids={ids} />
                    </Grid.Column>
                    ))}
                </Grid>
                <button onClick={emptylocal}>Clear Data</button>
            </div>
    
        )
    
    }
export default Home;