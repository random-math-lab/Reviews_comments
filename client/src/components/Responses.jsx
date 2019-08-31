import React from 'react';

const Responses = (props) => {
  let hostPic = '';
  let response = '';
  let hostName = '';
  let responseDate = '';
  if(props.listingsInfo.length) {
    console.log(props);
    hostPic = props.listingsInfo[0].img;
    response = props.response;
    hostName = props.listingsInfo[0].host_firstName;
    responseDate = props.response_date;
  }

  return (

    <div className="responses">

      <div className="hostPic">
        <a href="">
          <img id="hostPic" src={hostPic} />
        </a>
      </div>

      <div className="response">

        <div className="hostInfo">
          <div id="hostName"> Response from {hostName}:</div>

        </div>

        <div className="responseBody">
          <div id="responseBody">
            {response}
          </div>

        </div>
        <div className="responseDate">
          <div> {responseDate} </div>

        </div>

      </div>
    </div>
  )
}

export default Responses;