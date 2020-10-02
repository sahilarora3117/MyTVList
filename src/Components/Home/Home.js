import React, {useEffect, useState} from 'react';
import Fav from './Fav/Fav';
import {Grid, Container, Header} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect (() => {
        var fav = JSON.parse(localStorage.getItem("myfav"));
        
        setData(fav);
        
    }, []);   
    
    if (JSON.parse(localStorage.getItem("myfav")).length === 0){
        
        return (
            <Redirect to="/relavant-home"/>
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
            </div>
    
        )
    
    }
export default Home;