import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  let inputEl = null;
  switch (props.elementType) {
    case "input":
      inputEl = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.handleChange}
        />
      );
      break;
    case "textarea":
      inputEl = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.handleChange}
        />
      );
      break;
    case "select":
      inputEl = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.handleChange}
        >
          {props.elementConfig.options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputEl = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.handleChange}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputEl}
    </div>
  );
};

export default Input;
