import React from 'react';
import './Task4.css'

export class Qoute extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle} className={this.state.isVisible ? "on" : "off"}>
          {this.state.isVisible ? "Hide" : "Open"}
        </button>

        {this.state.isVisible && (
          <div className="quote-text">
            Успіх — справа виключно випадку. Це вам скаже будь-який невдаха. Ерл Вілсон
          </div>
        )}
      </div>
    );
  }
}


















