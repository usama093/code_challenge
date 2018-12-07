import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { message: this.props.message };
  // }

  resetComm() {
    this.props.onResetComm();
  }

  updateComm(message) {
    this.props.onUpdateComm(message);
  }

  render() {
    let messageView;
    if (this.props.message !== "") {
      messageView = (
        <div className="message-body">
          <div className="form-group">
            <p>
              <b className="text-info">Scotty : </b>
              {this.props.message}
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-warning btn-lg float-right shadow border-info fixed"
            onClick={() => this.resetComm()}
          >
            Clear <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </div>
      );
    }
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="row ">
                <div className="col-md-6 mx-auto">
                  <div className="card rounded-0 shadow-lg border-info">
                    <div className="card-header">
                      <h3 className="mb-0">
                        Style me, Redux me, Surprise me. ;)
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0 border-info"
                          placeholder="Say something... "
                          onChange={event =>
                            this.updateComm(event.target.value)
                          }
                          value={this.props.message}
                        />
                      </div>
                      {messageView}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

const mapDispachToProps = dispatch => {
  return {
    onResetComm: () => dispatch({ type: "RESET_COMM", value: "" }),
    onUpdateComm: message => dispatch({ type: "UPDATE_COMM", value: message })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
