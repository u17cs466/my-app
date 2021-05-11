import { Component } from "react";
import { connect } from "react-redux";
import { updateFirstName, updateLastName } from "./redux/actions/UserAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: "",
    };
  }

  changeFirstName = () => {
    this.props.updateFirstName(this.state.inputValue);
  };
  changeLastName = () => {
    this.props.updateLastName(this.state.inputValue);
  };
  render() {
    return (
      <div>
        <p>Srikanth Damacharla {this.props.fullName}</p>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />

        <button onClick={this.changeFirstName}> changefirstname</button>
        <button onClick={this.changeLastName}>changeLastName</button>
      </div>
    );
  }
}

const mapStoreStateToComponentsProps = (state) => {
  return {
    postInfo: state.postInfo,
    fullName: state.userInfo.firstName + "" + state.userInfo.lastName,
  };
};

export default connect(mapStoreStateToComponentsProps, {
  updateFirstName,
  updateLastName,
})(App);
