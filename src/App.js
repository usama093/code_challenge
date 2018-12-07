import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: this.props.message };
  }

  resetComm() {
    this.setState({ message: "" });
  }

  updateComm(message) {
    this.setState({
      message
    });
  }

  render() {
    const { message } = this.state;
    let messageView;
    if (message !== "") {
      messageView = (
        <div>
          <div class="form-group">
            <p>
              <b>Scotty : </b>
              {message}
            </p>
          </div>

          <button
            type="submit"
            class="btn btn-warning btn-lg float-right"
            onClick={() => this.resetComm()}
          >
            Clear <i class="fa fa-trash" aria-hidden="true" />
          </button>
        </div>
      );
    }
    return (
      <div>
        <div class="container py-5">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6 mx-auto">
                  <div class="card rounded-0">
                    <div class="card-header">
                      <h3 class="mb-0">Style me, Redux me, Surprise me. ;)</h3>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg rounded-0"
                          placeholder="Say something... "
                          onChange={event =>
                            this.updateComm(event.target.value)
                          }
                          value={message}
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

export default App;
