import React from 'react';
import {Container, Form} from 'semantic-ui-react';
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              inverted fluid type='text' value={this.state.value} onChange={this.handleChange}  placeholder='Search...' name="query"
            />
            
            <Link to={"/search/" + encodeURI(this.state.value)}><Form.Button content='Search' /></Link>
          </Form.Group>
        </Form>
      
        </Container>


            </div>
    )
  }
    
}

export default searchbar;