import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ClearButton from "./ClearButton";
import MessageBody from "./MessageBody";

class App extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleResetMessage() {
    this.props.onResetMessage();
    this.inputRef.current.focus();
  }

  handleUpdateMessage(message) {
    this.props.onUpdateMessage(message);
  }
  // componentDidMount() {
  //   this.inputRef.current.focus();
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   //console.log("updated");
  // }
  render() {
    let mainView;
    mainView = (
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
                          autoFocus={true}
                          ref={this.inputRef}
                          onChange={event =>
                            this.handleUpdateMessage(event.target.value)
                          }
                          value={this.props.message}
                        />
                      </div>
                      <MessageBody
                        message={this.props.message}
                        onUpdateMessage={() => this.handleUpdateMessage()}
                      />
                    </div>
                    <ClearButton
                      message={this.props.message}
                      onResetMessage={() => this.handleResetMessage()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return <>{mainView}</>;
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

const mapDispachToProps = dispatch => {
  return {
    onResetMessage: () => dispatch({ type: "RESET_MESSAGE", value: "" }),
    onUpdateMessage: message =>
      dispatch({ type: "UPDATE_MESSAGE", value: message })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
