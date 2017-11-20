import React, { Component } from 'react';
import Header from '../../components/header';
import CardInfo from '../../components/card-info';

class LotPage extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <Header/>
          </header>
          <CardInfo/>
        </div>
    );
  }
}

export default LotPage;
