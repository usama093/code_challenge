import React from "react";

const ClearButton = props => {
  let buttonView;

  if (props.message !== "") {
    buttonView = (
      <div className="card-footer">
        <button
          type="submit"
          className="btn btn-warning btn-md float-right shadow border-info "
          onClick={() => props.onResetMessage()}
        >
          Clear <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </div>
    );
  }
  return <>{buttonView}</>;
};

export default ClearButton;
