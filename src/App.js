import React, {Component} from 'react';

import CardList from './components/card-list/card-list-component.jsx'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [] 
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((respons) => {
       respons.json()
       .then((user) => {
              this.setState({monsters: user})
       })
    })
  }

  render() { 
    return (  
      <div className='App'>
       
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}
 

export default App;
