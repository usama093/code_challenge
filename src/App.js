import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ClearButton from "./ClearButton";
import MessageBody from "./MessageBody";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

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
        <Container className="py-5">
          <Row>
            <Col md="12">
              <Row>
                <Col md="6" className="mx-auto">
                  <Card className="rounded-0 shadow-lg border-info">
                    <CardHeader>
                      <h3 className="mb-0">
                        Style me, Redux me, Surprise me. ;)
                      </h3>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <Input
                          type="text"
                          className="form-control form-control-lg rounded-0 border-info"
                          placeholder="Say something... "
                          autoFocus={true}
                          innerRef={this.inputRef}
                          onChange={event =>
                            this.handleUpdateMessage(event.target.value)
                          }
                          value={this.props.message}
                        />
                      </FormGroup>
                      <MessageBody
                        message={this.props.message}
                        onUpdateMessage={() => this.handleUpdateMessage()}
                      />
                    </CardBody>
                    <ClearButton
                      message={this.props.message}
                      onResetMessage={() => this.handleResetMessage()}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
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
