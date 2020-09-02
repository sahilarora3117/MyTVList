import React from 'react';
import { List, Header, Button } from 'semantic-ui-react';
import Watched from './Watched/Watched';
import {Link} from 'react-router-dom';
const Episode = (props) => {
    return (
        <List divided verticalAlign='middle'>
            {props.data.episodes.map(episode =>(
                <List.Item>
                <Watched epid={episode.ids.trakt}/>
                <Link to={"/episodes/" + props.id + "/season/" + props.season + '/episode/' + episode.number}>

                <Button inverted icon="plus" color="yellow" floated="left"></Button>
                </Link>

                <List.Content>
                  <Header as='h6' inverted color="grey">S{props.season}E{episode.number}: {episode.title}</Header>
                  
                </List.Content>
              </List.Item>
                
            ))}
        </List>
    )
}

export default Episode;