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
import ReactFileReader from 'react-file-reader';
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
    var fileToSave = new Blob([JSON.stringify(exportdata)], {
      type: 'application/json',
      name: fileName
    });
    saveAs(fileToSave, fileName);

  }

  const handle = files => {
    var data = files.base64.split(',');
    console.log(data[1]);
    var codata =  atob(data[1]);
    var parsed =  JSON.parse(codata);
    console.log(parsed.favourites);
    localStorage.setItem("myfav", JSON.stringify(parsed.favourites));
    localStorage.setItem("episodes", JSON.stringify(parsed.watchlist));

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
          <ReactFileReader fileTypes={[".json"]} base64={true} handleFiles={ handle}>
          <Button primary>Import</Button>
          </ReactFileReader>
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