import React from "react";
import PropTypes from "prop-types";
import { Button, CardFooter } from "reactstrap";
const ClearButton = props => {
  let buttonView;

  if (props.message !== "") {
    buttonView = (
      <CardFooter>
        <Button
          size="md"
          color="warning"
          className="float-right shadow border-info "
          onClick={() => props.onResetMessage()}
        >
          Clear <i className="fa fa-trash" aria-hidden="true" />
        </Button>
      </CardFooter>
    );
  }
  return <>{buttonView}</>;
};

ClearButton.propTypes = {
  message: PropTypes.string
};

export default ClearButton;
