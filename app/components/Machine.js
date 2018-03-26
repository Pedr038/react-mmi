/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return <div className='Machine'>Machine{this.props.number}</div>
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
