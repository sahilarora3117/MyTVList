import React from 'react';
import { List, Header } from 'semantic-ui-react';
import Watched from './Watched/Watched';
const Episode = (props) => {
    return (
        <List divided verticalAlign='middle'>
            {props.data.episodes.map(episode =>(
                <List.Item>
                <Watched epid={episode.ids.trakt}/>
                <List.Content>
                  <Header as='h6' inverted color="grey">{episode.number}: {episode.title}</Header>
                  
                </List.Content>
              </List.Item>
                
            ))}
        </List>
    )
}

export default Episode;