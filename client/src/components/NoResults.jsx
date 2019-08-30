import React from 'react';

const NoResults = (props) => {

  return (
    <div>
      <div id="results">
        None of our guests have mentioned "
        <b>{props.searchedTerm}</b>"
      </div>
      <span id="clearSearch" onClick={props.clearSearch}> Back to all reviews </span>
    </div>
  )
}

export default NoResults