import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  render(){
      return(
    <div>
        <p>Team Member {this.props.params.teamMemberID}</p>
    </div>)
}
}
