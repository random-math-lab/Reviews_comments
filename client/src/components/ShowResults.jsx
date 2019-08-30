import React from 'react';

const ShowResults = (props) => {

  return (
    <div >
      <div id="NoResults">
        {props.limitedArray.length} of our guests have mentioned "
        <b>{props.searchedTerm}</b>"
      </div>
      <span id="clearSearch" onClick={props.clearSearch}> Back to all reviews </span>
    </div>
  )
}

export default ShowResults;