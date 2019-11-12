import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    // The state
    this.state = {
      options: []
    };

    // function binding
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  // Life cycle methods
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOptions() {
    //delete option
    this.setState(() => {
      //setting a state options
      return {
        options: []
      };
    });
  }

  // invoking
  handleDeleteOptions(optionToRemove) {
    this.state(prevstste => {
      return {
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
        })
      };
    });
  }

  handlePick() {
    //creating a function
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleData(option) {
    //passing parameter option,created
    if (!option) {
      //if no option.
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => {
      //setting state,previous
      return {
        options: prevState.options.concat(option) //using concat to add the new option that had been created
      };
    });
  }

  render() {
    const title = "Todo App";
    const subtitle = "Business Goals";
    // const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} /> //component header,passing
        props in the expressions
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options //props options
          options={this.state.options} //array in expression
          handleDeleteOptions={this.handleDeleteOptions} //
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleData={this.handleData} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Add Option </button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
