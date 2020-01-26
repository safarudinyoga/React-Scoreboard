import React, { Component } from 'react';
import Scoreboard from './components/Scoreboard'

class App extends Component {

  render() {

    return (
      <div>
        <Scoreboard
          defaultValueLeft={7}
          defaultValueRight={2}
        />

        <Scoreboard
          defaultValueLeft={3}
          defaultValueRight={5}
        />

        <Scoreboard
          defaultValueLeft={3}
          defaultValueRight={5}
        />
      </div>
    );
  }
}

export default App;
