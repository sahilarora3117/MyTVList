import React from 'react';
import {Container, Input, Icon, Button} from 'semantic-ui-react';
import Result from '../Result/Result';
import {Link} from 'react-router-dom';

class searchbar extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {    this.setState({value: event.target.value});  }
  render (){
    return (
        <Container>
            <Input icon={<Icon name='search'/>} fluid type='text' value={this.state.value} onChange={this.handleChange}  placeholder='Search...' action name="query" ></Input>
            <Link to={"/search/" + encodeURI(this.state.value)}><Button>Search</Button></Link>

        </Container>
    )
  }
    
}

export default searchbar;