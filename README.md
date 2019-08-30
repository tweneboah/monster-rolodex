

## Important Notes

## How to filter Data using search input.

* Create two states, one is for the state that holds the whole data and the other is a search term value

```javascript
state = { 
      monsters: [],
      searchField: ''
    }
```

2. Create the html search input 

```html
 <input type='search' placeholder='Search for Monsters' onChange  = {e => this.setState({searchField: 
           e.target.value}) />
```

* We take the value from the input and store it into searchFiled value

## SetState

setState is asynchronous so if you want to see the immediate change when a state is changed, pass a callback as a second function to setState

```javascript
 <input type='search' placeholder='Search for Monsters' onChange  = {e => this.setState({searchField: e.target.value}, (e) => {
         console.log(this.state)
       })
       
      }/>
```



## HOW TO FILTER

```javascript
const {monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
```
* Then we update our state using _**filteredMonsters**_

## Complete Code

```javascript
import React, {Component} from 'react';

import CardList from './components/card-list/card-list-component.jsx'

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

  render() { 
    const {monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return (  
     
      <div className='App'>
       <input type='search' placeholder='Search for Monsters' onChange  = {e => this.setState({searchField: e.target.value}, (e) => {
         console.log(this.state)
       })
       
      }/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
 

export default App;

```

## Learnt
How to install and apply

* Bootstrap
* Google fonts
* How to apply css to a certain component