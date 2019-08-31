import React from 'react';
import PageListEntry from './PageListEntry.jsx';

const PageList = (props) => {
  // console.log(props)
  return props.carouseledReviewsInfo.map((page, i) =>
   <PageListEntry goToPage={props.goToPage} page={i+1} key={i} />
  );
}

export default PageList;