import React from "react";
import axios from "axios";

class InputTask extends React.Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task !== "") {
      axios.post(
        `http://localhost:5000/`,
        { name: this.state.task }.then((res) => {
          console.log(res);
          this.setState({ task: "" });
        })
      );
    }
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-md-4">
          <from onSubmit={(e) => this.handleSubmit(e)}>
            <input
              placeholder="Task Title"
              name="task"
              value={this.state.task}
              onChange={(e) => this.handleChange()}
              className="form-control mt-5 ml-5"
              style={{ width: "350px" }}
            ></input>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              style={{ width: "350px", padding: "10px" }}
            >
              Add Task
            </button>
          </from>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

export default InputTask;
