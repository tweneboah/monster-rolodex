import React, {Component} from 'react';
import SearchBox from './components/Search'
import CardList from './components/card-list/card-list-component.jsx'

import Header from './components/Header.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      monsters: [],
      searchField: ''
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

//Handle Search Change
handleChange = (e) => {
   return  this.setState({searchField: e.target.value})
}

  render() { 
    const {monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return (  
     
      <div className='App'>
        <Header/>
        <h1>Monsters</h1>
        <SearchBox placeholder ='Search monsters' handleChange = {this.handleChange} />
      
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
 

export default App;
