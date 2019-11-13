import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    // function binding
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    this.state = {
      options: [],
      selectedOption: null
    };
  }

  // Lifecycle methods/hooks
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
  // handler functions

  // handles delete
  // handleDeleteOptions() {
  //   //delete option
  //   this.setState(() => {
  //     //setting a state options
  //     return {
  //       options: []
  //     };
  //   });
  // }

  // invoking
  handleClearSelectedOption() {
    this.setState(() => ({ selectedOption: null }));
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
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
    this.setState(() => ({
      selectedOption: option
    }));
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
        <Header title={title} subtitle={subtitle} />
        {/* component header,passing
        props in the expressions */}
        <div className="container">
          <Action
            hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options //props options
              options={this.state.options} //array in expression
              handleDeleteOptions={this.handleDeleteOptions} //
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleData={this.handleData} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default TodoApp;
