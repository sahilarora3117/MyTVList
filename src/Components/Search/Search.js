import React from 'react';
import {Container, Input, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './Search.css';

class searchbar extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {    this.setState({value: event.target.value});  }
  render (){
    return (
      <div>


        <Container>
            <Input size='massive'  className="search" fluid type='text' value={this.state.value} onChange={this.handleChange}  placeholder='Search...' name="query" >
            <Button><Link to={"/search/" + encodeURI(this.state.value)}>Search</Link></Button>
            </Input>
        </Container>


            </div>
    )
  }
    
}

export default searchbar;