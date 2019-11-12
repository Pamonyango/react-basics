import React from "react";

const Options = props => (
  <div>
    <button onClick={this.props.handleDeleteOptions}> Remove All</button>
    {props.options.length === 0 && <p> Please add an option to the started</p>}
    {this.props.options.map(option => {
      return (
        <Option
          key={option}
          optionText={option} //prop key to pass option map.
          handleRemove={props.handleDeleteOption}
        />
      );
    })}
  </div>
);
export default options;
