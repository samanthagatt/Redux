import React from 'react';
import { connect } from "react-redux";

import { addMember, toggleDragonStatus } from "../actions/dragonListActions";

class DragonList extends React.Component {
  state = { newMember: '' };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index} id={index} onClick={e => this.props.toggleDragonStatus(e.target.id)}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={e => this.props.addMember(this.state.newMember)}>Add member</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({dragonListReducer}) => ({
  members: dragonListReducer.members
})

export default connect(mapStateToProps, { addMember, toggleDragonStatus })(DragonList);
