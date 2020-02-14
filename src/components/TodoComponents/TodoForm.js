import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: "",
        }
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({ [e.target.name]: e.target.value });
    }
    
      // class property to submit form
    submitItem = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
        // this.setState({ item: "" });
    };

    render () {
        return (
            <form onSubmit={this.submitItem}>
                <input type="text" name="task" onChange={this.handleChanges} />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;