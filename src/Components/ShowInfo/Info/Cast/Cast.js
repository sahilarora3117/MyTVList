import React from 'react';
import { Item } from 'semantic-ui-react'

const Cast = (props) => (
<Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/avatar/large/stevie.jpg' />

      <Item.Content>
        <Item.Header color="grey">Stevie Feliciano</Item.Header>
<Item.Description color="grey">{JSON.stringify(props.cast)}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Cast;
