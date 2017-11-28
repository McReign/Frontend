import React, { Component } from 'react';
import Header from '../Header/index';
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
