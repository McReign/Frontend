import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import ListItem from './components/ListItems'
import HeaderButton from './components/HeaderButtons'
import "./bootstrap.css";
import AuthPage from './containers/AuthPage'
import LotSearchingPage from './containers/LotSearchingPage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const data = new Array(30).fill(1).map((x, i) => ({
  text: 'lot ' + i,
  time: i
}))


  
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerIsSticky: false
    }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    if(this.header) {
      window.addEventListener('scroll', this.onScroll)
    }
  }
  
  componentWillUnmount() {
    if(this.header) {
      window.removeEventListener('scroll', this.onScroll)
    }
  }

  onScroll() {
    const topPoint = this.header.getClientRects()['0'].y;
    const bottomPoint = topPoint + this.header.clientHeight;
    console.log(topPoint);

    if(bottomPoint < 0){
      this.setState({headerIsSticky: true})
    }
    else{
      this.setState({headerIsSticky: false})
    }
   // console.log(topPoint);
    // const bottomPoint = (topPoint + this.stickyWrap.getClientRects()['0'].height) - this.state.toolbarHeight;
    // if (topPoint <= 0 && bottomPoint >= 0 && !this.state.sticky) {
    //   this.setState({ sticky: true });
    // } else if ((topPoint > 0 || bottomPoint < 0) && this.state.sticky) {
    //   this.setState({ sticky: false });
    // }
  }

  render() {
    return (
      <div className="App">
        <div ref={c => this.header = c}>
        <Header
          isSticky={this.state.headerIsSticky}
        >
          <HeaderButton title="das" />
          <HeaderButton title="asdsass" />
       </ Header>
       <Router>
         <div>
          <Route path={'/'} component = {LotSearchingPage}> </Route>
          <Route path={'/auth'} component = {AuthPage}> </Route>
         </div>
       </Router>
       </div>
        <List data={data} />
      </div>
    );
  }
}

export default App;