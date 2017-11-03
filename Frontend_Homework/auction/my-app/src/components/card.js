import React from 'react';
//import PropTypes from 'prop-types'
import _image from '../images/image_2017-10-22_13-57-03.png'
import PrimaryBtn from './primary-btn';

export default function Card(){
    return (
        <div className="uk-child-width-1-6@m">
            <div className="uk-card uk-card-hover uk-card-default">
                <div className="uk-card-media-top card-image"></div>
                <div className="uk-card-body">
                    
                    <div className="info">
                        <h1 className="uk-card-title">Name of lot</h1>
                        <p>Current price : <span>4100$</span></p>
                        <p>Time till end : <span>2:41</span></p>
                        <PrimaryBtn title = "Place a bet" />
                    </div>
                </div>
            </div>
        </div>
    );
  };

  Card.defaultProps = {
    image: _image
}

