import React from "react";

const MessageBody = props => {
  let messageView;

  if (props.message !== "") {
    messageView = (
      <div className="message-body border border-white ">
        <div className="form-group">
          <p className="text-capitalize font-italic">
            <b className="text-info">Scotty : </b>
            {props.message}
          </p>
        </div>
      </div>
    );
  }
  return <>{messageView}</>;
};

export default MessageBody;
