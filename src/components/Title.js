import React, { useState } from 'react';
import { connect } from "react-redux";
// import { initialState, titleReducer } from '../reducers/titleReducer';

import { toggleEditing, updateTitle } from "../actions/titleActions";

const Title = ({ editing, title, toggleEditing, updateTitle }) => {
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{' '}
          <i
            className="far fa-edit"
            onClick={toggleEditing}
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => updateTitle(newTitleText)}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Connect component to redux store using `connect` (a function that gets called twice -fx currying-: 1st - mapStateToProps and action creators, 2nd - takes component you want to connect to the state)
// const mapStateToProps = state => {
//   return {
//     editing: state.editing,
//     title: state.title
//   };
// };
const mapStateToProps = ({editing, title}) => (
  { editing, title }
);


export default connect(
  mapStateToProps, 
  { toggleEditing, updateTitle }
)(Title);
