import React from 'react';
import { List } from 'semantic-ui-react';
import Watched from './Watched/Watched';
const Episode = (props) => {
    return (
        <List divided verticalAlign='middle'>
            {props.data.episodes.map(episode =>(
                <List.Item>
                <Watched epid={episode.ids.trakt}/>
                <List.Content>
                  <List.Header as='h6'>{episode.number}: {episode.title}</List.Header>
                  
                </List.Content>
              </List.Item>
                
            ))}
        </List>
    )
}

export default Episode;