import React from "react";
import ToDo from "./ToDo.js";
import PropTypes from "prop-types";

const ToDoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <ToDo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default ToDoList;
