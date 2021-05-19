import React, { Component } from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import API from './utils/API'
import Table from './components/Table'
import { Search } from './components/Search';

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
      <Search />
      <Table employees={this.state.employees}/>
      </Wrapper>
     );
  }
}

export default App;
