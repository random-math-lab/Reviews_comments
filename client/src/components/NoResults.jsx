import React from 'react';

const NoResults = (props) => {
  return (
    <div id="NoResults">
      None of our guests have mentioned "{props.searchedTerm}"

    </div>
  )
}

export default NoResults;