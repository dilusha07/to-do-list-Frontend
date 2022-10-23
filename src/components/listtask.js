import { Axios } from "axios";
import React from "react";

class ListTask extends React.Component {
  state = {
    tasks: [],
  };
  gettasks = () => {
    try {
      Axios.get(`http://localhost:5000/`).then((res) => {
        this.setState({ task: res.data });
        console.log(this.state.tasks);
      });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    this.gettasks();
  };

  deleteTask = (e) => {
    try {
      Axios.delete(`http://localhost:5000/task/${e}`).then((res) => {
        console.log(res);
      });
      this.setState({
        tasks: this.state.tasks.filter((task) => task.todo_id !== e),
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task) => (
              <tr key={task.todo_id}>
                <td>{task.name}</td>
                <td>
                  <button class="btn btn-warning update">Edit</button>
                </td>
                <td>
                  <button
                    class="btn btn-danger delete"
                    onClick={() => this.deleteTask(task.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTask;
