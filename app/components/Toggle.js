import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
        <div className = {this.state.isToggleOn ? "Toggle-active" : "Toggle-desactive" }>
        <h1> Toggle {this.props.title} </h1>
        <p>{this.props.abcde} | {this.state.isToggleOn ? "Marche" : "Arrêt" }</p>
        
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    );
  }
}

export default Toggle;