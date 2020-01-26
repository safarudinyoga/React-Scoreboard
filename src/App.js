import React, { Component } from 'react';
import Scoreboard from './components/Scoreboard'

class App extends Component {

  state = {
    defaultBoard1: {
      defaultValueLeft: 7,
      defaultValueRight: 2
    },
    defaultBoard2: {
      defaultValueLeft: 3,
      defaultValueRight: 5
    },
    defaultBoard3: {
      defaultValueLeft: 4,
      defaultValueRight: 1
    }
  }

  handleResetBoard = (leftScore, rightScore) => () => {
    console.log('mashok')
    // console.log(leftScore, rightScore);
    this.setState({
      defaultBoard1: {
        defaultValueLeft: 0,
        defaultValueRight: 0
      },
      defaultBoard2: {
        defaultValueLeft: 0,
        defaultValueRight: 0
      },
      defaultBoard3: {
        defaultValueLeft: 0,
        defaultValueRight: 0
      }
    })
  }

  handleGetScoreboardValue = (leftScore, rightScore) => () => {
    console.log(leftScore, rightScore);
    return (
      <div className='col'>
        <p>
          {`your score ${leftScore} and opponent score is ${rightScore}`}
        </p>
      </div>
    )
  }

  render() {

    const { state: { defaultBoard1, defaultBoard2, defaultBoard3}, handleResetBoard, handleGetScoreboardValue } = this

    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Scoreboard
              defaultValueLeft={defaultBoard1.defaultValueLeft}
              defaultValueRight={defaultBoard1.defaultValueRight}
              handleResetBoard={handleResetBoard}
              handleGetScoreboardValue={handleGetScoreboardValue}
            />
          </div>
          <div className='col'>
            <Scoreboard
              defaultValueLeft={defaultBoard2.defaultValueLeft}
              defaultValueRight={defaultBoard2.defaultValueLeft}
            />
          </div>
          <div className='col'>
            <Scoreboard
              defaultValueLeft={defaultBoard3.defaultValueLeft}
              defaultValueRight={defaultBoard3.defaultValueRight}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
