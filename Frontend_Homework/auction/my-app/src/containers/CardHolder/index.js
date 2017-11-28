import React from 'react';
import Card from '../../components/card';
import {Component} from "react/cjs/react.production.min";

class CardsHolder extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (

        <div className="card-holder">
          {this.props.data.map((dataField, index) =>
              <Card {...dataField} />
          )}
        </div>
    );
  }
}

function mapStateToProps (state) {
    return {
        lots: state.lots
    }
}

export default CardsHolder