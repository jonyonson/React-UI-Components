import React from 'react';
import './App.css';

import ButtonRow from './components/ButtonComponents/ButtonRow';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import EqualsButton from './components/ButtonComponents/EqualsButton';

class App extends React.Component {
  state = {
    display: 0,
    operation: null,
    n1: null,
    n2: null,
  };

  handleClear() {
    this.setState({
      display: 0,
      operation: null,
      n1: null,
      n2: null,
    });
  }

  changeDisplay(n) {
    if (this.state.n1 !== null && this.state.n2 !== null) {
      return this.setState(previousState => {
        const display = Number(previousState.display.toString() + String(n));
        return { display, n2: display };
      });
    }

    if (this.state.n1 !== null && this.state.n2 === null) {
      return this.setState(previousState => {
        return { n2: n, display: n };
      });
    }
    return this.setState(previousState => {
      const display = Number(previousState.display.toString() + String(n));
      return { display };
    });
  }

  handleAction(operation) {
    // if this is the third or more number in an operation
    // we need to operate on num1 and num2 make that result num1.
    if (this.state.n1 !== null && this.state.n2 !== null && this.state.display === this.state.n2) {
      this.handleEquals();
    }
    return this.setState(previousState => {
      const n1 = Number(previousState.display);
      return { n1, operation };
    });
  }

  handleEquals() {
    if (this.state.num1 !== null && this.state.num2 !== null) {
      if (this.state.operation === 'division') {
        return this.setState(previousState => {
          const display = previousState.n1 / previousState.n2;
          return {
            display,
            operation: null,
            n1: display,
            n2: null,
          };
        });
      }
      if (this.state.operation === 'multiplication') {
        return this.setState(previousState => {
          const display = previousState.n1 * previousState.n2;
          return {
            display,
            operation: null,
            n1: display,
            n2: null,
          };
        });
      }
      if (this.state.operation === 'subtraction') {
        return this.setState(previousState => {
          const display = previousState.n1 - previousState.n2;
          return {
            display,
            operation: null,
            n1: display,
            n2: null,
          };
        });
      }
      if (this.state.operation === 'addition') {
        return this.setState(previousState => {
          const display = previousState.n1 + previousState.n2;
          return {
            display,
            operation: null,
            n1: display,
            n2: null,
          };
        });
      }
    }
    return;
  }

  render() {
    return (
      <div className="App__container">
        <div className="App">
          <CalculatorDisplay display={this.state.display} />

          <ButtonRow>
            <ClearButton handleClear={() => this.handleClear()} />
            <ActionButton handleAction={() => this.handleAction('division')}>&#247;</ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton changeDisplay={() => this.changeDisplay(7)} number={7} />
            <NumberButton changeDisplay={() => this.changeDisplay(8)} number={8} />
            <NumberButton changeDisplay={() => this.changeDisplay(9)} number={9} />
            <ActionButton handleAction={() => this.handleAction('multiplication')}>
              &times;
            </ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton changeDisplay={() => this.changeDisplay(4)} number={4} />
            <NumberButton changeDisplay={() => this.changeDisplay(5)} number={5} />
            <NumberButton changeDisplay={() => this.changeDisplay(6)} number={6} />
            <ActionButton handleAction={() => this.handleAction('subtraction')}>
              &minus;
            </ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton changeDisplay={() => this.changeDisplay(1)} number={1} />
            <NumberButton changeDisplay={() => this.changeDisplay(2)} number={2} />
            <NumberButton changeDisplay={() => this.changeDisplay(3)} number={3} />
            <ActionButton handleAction={() => this.handleAction('addition')}>&#x2B;</ActionButton>
          </ButtonRow>

          <ButtonRow>
            <NumberButton
              changeDisplay={() => this.changeDisplay(0)}
              className={'FlexThree'}
              number={0}
            />
            <EqualsButton handleEquals={() => this.handleEquals()}>&#x3d;</EqualsButton>
          </ButtonRow>
        </div>
      </div>
    );
  }
}

export default App;
