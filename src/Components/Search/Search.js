import React from 'react';
import {Container, Input, Icon} from 'semantic-ui-react';
import Result from '../Result/Result';


class searchbar extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
      console.log(this.state.value)
      
}
  render (){
      var path = "/search/" + this.state.value;
    return (
        <Container>
            <Input icon={<Icon name='search' inverted circular link onClick={this.handleSubmit}/>} fluid type='text' value={this.state.value} onChange={this.handleChange}                 autoFocus
                onKeyDown={this.handleSubmit} placeholder='Search...' action name="query" ></Input>
            <br />        
        </Container>
    )
  }
    
}

export default searchbar;