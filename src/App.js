import React, { Component } from 'react';
import Scoreboard from './components/Scoreboard'

class App extends Component {

  state = {
    saveLeftValue: 0,
    saveRightValue: 0,
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



  handleSaveValue = (leftValue, rightValue) => {
    this.setState({
      saveLeftValue: leftValue,
      saveRightValue: rightValue
    })
  }

  render() {

    const { handleSaveValue, state: { defaultBoard1, defaultBoard2, defaultBoard3, saveLeftValue, saveRightValue } } = this
    return (
      <div>
        <Scoreboard
          defaultValueLeft={defaultBoard1.defaultValueLeft}
          defaultValueRight={defaultBoard1.defaultValueRight}
          handleSaveValue={handleSaveValue}
        />

        <Scoreboard
          defaultValueLeft={defaultBoard2.defaultValueLeft}
          defaultValueRight={defaultBoard2.defaultValueLeft}
        />

        <Scoreboard
          defaultValueLeft={defaultBoard3.defaultValueLeft}
          defaultValueRight={defaultBoard3.defaultValueRight}
        />
        <div className='col'>
          <div className='card'>{saveLeftValue}</div>
          <div className='col'>{saveRightValue}</div>
        </div>
      </div>
    );
  }
}

export default App;
