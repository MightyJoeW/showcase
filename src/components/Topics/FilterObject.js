import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      contestants:  [
      {
        name: 'AJ Styles',
        finisher: 'Phenomenal Forearm',
        position: 1,
      },
      {
        name: 'Finn Balor',
        finisher: 'Coup de Grace',
        position: 2,
      },
      {
        name: 'Bobby Roode',
        finisher: 'Glorious DDT',
        position: 3,
    }
    ],
      userInput: '',
      filteredContestants: [] 
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterContestants(prop) {
    let contestants = this.state.contestants;
    let filteredContestants = [];
    
    for ( let i = 0; i < contestants.length; i++ ) {
      if ( contestants[i].hasOwnProperty(prop) ) {
        filteredContestants.push(contestants[i]);
      }
    }

    this.setState({ filteredEmployees: filteredContestants });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.contestants, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.something(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterContestants(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredContestants, null, 10) } </span>
      </div>
    )
  }
}