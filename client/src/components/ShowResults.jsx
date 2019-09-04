import React from 'react';

const ShowResults = (props) => {
  // console.log(props);
  return (
    <div id="shown">
      <div id="results">
        {props.limitedArray.length} of our guests have mentioned "<b>{props.searchedTerm}</b>"
      </div>
      <span id="clearSearch" onClick={props.clearSearch}> Back to all reviews </span>
      <br/>
      <div id="ratingsDivide">
      </div>
    </div>
  );
};

export default ShowResults;