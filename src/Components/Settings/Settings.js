import React from 'react'
import { saveAs } from 'file-saver';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Container,
} from 'semantic-ui-react'
import Remove from './RemoveData/Remove';
function settings() {
  const createBackup = () => {
    var fav = JSON.parse(localStorage.getItem("myfav"));
    var episodes = JSON.parse(localStorage.getItem("episodes"));
    console.log(fav);
    console.log(episodes);
    var exportdata = {favourites: fav, watchlist: episodes};
    console.log(exportdata);
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '-' + dd + '-' + yyyy;

var fileName = 'MyTVList-Backup-' + today + '.json';

// Create a blob of the data
var fileToSave = new Blob([JSON.stringify(exportdata)], {
  type: 'application/json',
  name: fileName
});
saveAs(fileToSave, fileName);

// Save the file


  }


    return (
        <Container style= {{marginTop:"1em"}}>
                <Header as="h2" inverted color="purple">Settings</Header>

        <Header as="h3" inverted color="yellow" style={{marginBottom:"1em"}}>Export & Import Data</Header>
        <Segment placeholder inverted>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical inverted>Or</Divider>
 
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon inverted>
            <Icon name='download' />
            Export Data
          </Header>
          <Button primary onClick={() => createBackup()}>Export</Button>

        </Grid.Column>

        <Grid.Column>
          <Header icon inverted>
            <Icon name='upload' inverted />
            Import Data
          </Header>
          <Button primary>Import</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Header as="h3" inverted color="yellow" style={{marginBottom:"1em"}}>Delete User Data</Header>
        <Segment placeholder inverted>
        <Remove />
        </Segment>
    </Container>
    )
    
  
    }
export default settings