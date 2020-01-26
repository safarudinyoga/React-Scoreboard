import React, { Component } from 'react';

class Scoreboard extends Component {

  state = {
    rightScore: this.props.defaultValueRight,
    leftScore: this.props.defaultValueLeft
  }

  // Method Map can be Applied to
  handleIncreaseScoreRight = () => {
    this.setState({
      rightScore: this.state.rightScore + 1
    })
  }
  handleDecreaseScoreRight = () => {
    this.setState({
      rightScore: this.state.rightScore - 1
    })
  }
  handleIncreaseScoreLeft = () => {
    this.setState({
      leftScore: this.state.leftScore + 1
    })
  }
  handleDecreaseScoreLeft = () => {
    this.setState({
      leftScore: this.state.leftScore - 1
    })
  }

  handleReset = () => {
    this.setState({
        rightScore: 0,
        leftScore: 0
      })
  }


  render() {

    const { handleDecreaseScoreLeft, handleDecreaseScoreRight, handleIncreaseScoreLeft, handleIncreaseScoreRight, handleReset ,state: { rightScore, leftScore }} = this
    return (
      <div className='container'>
        <div className='row'>
          <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header bg-transparent border-success" style={{ textAlign: 'center' }}>Scoreboard</div>
            <div className="card-body text-success">
              <div className='row'>
                <div className='card col'>
                  <h5 style={{ textAlign: 'center' }}>{leftScore}</h5>
                </div>
                <div className='card col'>
                  <h5 style={{ textAlign: 'center' }}>{rightScore}</h5>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent border-success">
              <div className='row'>
                <div className='card col'>
                  <div className='row' style={{ alignItems: 'center' }}>
                    <button onClick={handleIncreaseScoreLeft} className='btn btn-warning col'>up</button>
                    <button onClick={handleDecreaseScoreLeft} className='btn btn-primary col'>down</button>
                  </div>
                </div>
                <div className='card col'>
                  <div className='row' style={{ alignItems: 'center' }}>
                    <button onClick={handleIncreaseScoreRight} className='btn btn-warning col'>up</button>
                    <button onClick={handleDecreaseScoreRight} className='btn btn-primary col'>down</button>
                  </div>
                </div>
              </div>
            </div>
            <button className='btn btn-danger' onClick={handleReset}>
              Reset Scoreboard
        </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
