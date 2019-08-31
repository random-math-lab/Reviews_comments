import React from 'react';

const Responses = (props) => {
  console.log(props.listingsInfo[0])
  return (
    <div>

      <div className="hostPic">
        <a href="">
          <img id="hostPic" src={props.listingsInfo.img} />
        </a>
      </div>

      <div>

      </div>

    </div>
  )
}

export default Responses;