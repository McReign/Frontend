import React, { Component } from 'react';
import './App.css';
import './uikit.css';
import './index.css';
import './uikit'
import SearchBar from './components/search-bar';
import CardsHolder from './components/cardsHolder'
import Header from './components/header';

const data = new Array(19).fill(1).map((x, i) => ({
  // image: require('./images/default-image-for-lot.png'),
  name: 'lot ' + (i+1),
  price: 1,
  timeTillEnd: i*10+':'+i*10
}))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <Header/>
          <SearchBar/>
        </header>
        <CardsHolder data = {data}/>
      </div>
    );
  }
}

export default App;
