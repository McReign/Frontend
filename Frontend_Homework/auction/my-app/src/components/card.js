import React from 'react';
import PropTypes from 'prop-types'
import PrimaryBtn from './primary-btn';
import {Component} from "react/cjs/react.production.min";

export default class Card extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div className="uk-child-width-1-6@m">
          <div className="uk-card uk-card-hover uk-card-default">
            <div className="uk-card-media-top card-image">
              <img src={this.props.image} alt=""/>
            </div>
            <div className="uk-card-body">
              <div className="info">
                <h1 className="uk-card-title">{this.props.name}</h1>
                <p>Current price : <span>{this.props.price}</span></p>
                <p>Time till end : <span>{this.props.timeTillEnd}</span></p>
                <PrimaryBtn title = {"Learn more"} />
              </div>
            </div>
          </div>
        </div>
    );
  };
  }


  Card.defaultProps = {
    image: require('../images/default-image-for-lot.png'),
    name: 'Some lot',
    price: 0,
    timeTillEnd: 0
}

