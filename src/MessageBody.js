import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";

const MessageBody = props => {
  let messageView;

  if (props.message !== "") {
    messageView = (
      <div className="message-body border border-white ">
        <FormGroup>
          <p className="text-capitalize font-italic">
            <b className="text-info">Scotty : </b>
            {props.message}
          </p>
        </FormGroup>
      </div>
    );
  }
  return <>{messageView}</>;
};

MessageBody.propTypes = {
  message: PropTypes.string
};

export default MessageBody;
