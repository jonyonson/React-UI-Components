import React from 'react';
import './App.css';

import ButtonRow from './components/ButtonComponents/ButtonRow';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ClearButton';

class App extends React.Component {
  state = {
    display: 0,
  };

  handleClear() {
    this.setState({ display: 0 });
  }

  // handleClick() {
  //   return this.setState(previousState => {
  //     return { count: previousState.count + 1 }
  //   });
  // }

  changeDisplay(n) {
    return this.setState(previousState => {
      const asdf = Number(previousState.display.toString() + String(n));
      return { display: asdf };
    });

    // this.setState({
    //   Number(this.state.display.toString() + String(n));

    // })
  }

  render() {
    return (
      <div className="App__container">
        <div className="App">
          <CalculatorDisplay display={this.state.display} />

          <ButtonRow>
            <ClearButton handleClear={() => this.handleClear()} />
            <ActionButton>&#247;</ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton changeDisplay={() => this.changeDisplay(7)} number={7} />
            <NumberButton changeDisplay={() => this.changeDisplay(8)} number={8} />
            <NumberButton changeDisplay={() => this.changeDisplay(9)} number={9} />
            <ActionButton>&times;</ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton changeDisplay={() => this.changeDisplay(4)} number={4} />
            <NumberButton changeDisplay={() => this.changeDisplay(5)} number={5} />
            <NumberButton changeDisplay={() => this.changeDisplay(6)} number={6} />
            <ActionButton>&minus;</ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton changeDisplay={() => this.changeDisplay(1)} number={1} />
            <NumberButton changeDisplay={() => this.changeDisplay(2)} number={2} />
            <NumberButton changeDisplay={() => this.changeDisplay(3)} number={3} />
            <ActionButton>&#x2B;</ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton
              changeDisplay={() => this.changeDisplay(0)}
              className={'FlexThree'}
              number={0}
            />
            <ActionButton>&#x3d;</ActionButton>
          </ButtonRow>
        </div>
      </div>
    );
  }
}

export default App;
