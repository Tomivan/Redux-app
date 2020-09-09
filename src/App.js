import React, { Component } from 'react';
import { voteAngular, voteReact, voteVue } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVue = () => {
    this.store.dispatch(voteVue());
  }
  render() {
    return(
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src="ctsw_logo.png" height="96" alt="CodingTheSmartWay.com"></img>
          <h2>What is your favourite frontend framework 2017?</h2>
          <h4>Click on the logos to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset col-xs-2">
              <img src="./images/angular_logo.jpg" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div> 
            <div className="col-xs-2">
              <img src="./images/react_logo.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div> 
            <div className="col-xs-2">
              <img src="./images/vue_logo.png" height="96" alt="Vue" onClick={this.handleVoteVue}></img>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;
