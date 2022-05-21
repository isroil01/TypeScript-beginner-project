import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { TodoContext } from "../store/todos-context";

const Todo: React.FC = (props) => {
  const Ctxtodd = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {Ctxtodd.item.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onClick={Ctxtodd.remove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;
