import React, { Component } from 'react'
import './App.css'
import Button from './Components/Button';
import Checkout from './Components/Checkout';
import Counter from './Components/Counter';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Counter counter={this.props.counter}></Counter>
        <div className=' container d-flex justify-content-around align-items-center'>
          <Button Dvalue={"+1"} click={() =>{this.props.modifyStateHandler("inc", 1)}}></Button>
          <Button Dvalue={"-1"} click={() =>{this.props.modifyStateHandler("dec", 1)}}></Button>
          <Button Dvalue={"+2"} click={() =>{this.props.modifyStateHandler("inc", 2)}}></Button>
          <Button Dvalue={"-2"} click={() =>{this.props.modifyStateHandler("dec", 2)}}></Button>
        </div>
        <Checkout price={this.props.price} counter={this.props.counter}></Checkout>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    counter: state.counter,
    price: state.price
  }
}
const mapActionToProps = (dispatch) =>{
  return{
    modifyStateHandler: (action,value) =>{
      dispatch({
        type: action,
        value: value,
      })
    }
  }
}
export default connect(mapStateToProps, mapActionToProps)(App);
