import React, { Component } from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import API from './utils/API'
import Main from './components/Main';

class App extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    API.getUsers().then(results => {
      console.log(results);
      this.setState({employees: results.data.results})
    })
  }

  render() {
    console.log(this.state.employees);
    return (
      <Wrapper>
      <Header />
      <Main />
      </Wrapper>
     );
  }
}

export default App;
