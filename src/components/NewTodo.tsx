import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () =>{
const CtxTodo = useContext(TodoContext);

  const todoRef = useRef<HTMLInputElement>(null);
  const submitHandeler = (e: React.FormEvent) => {
    e.preventDefault();

    const enterRef = todoRef.current!.value;

    if (enterRef.trim().length === 0) {
      return;
    }

   CtxTodo.addTodo(enterRef);
  };
  return (
    <form onSubmit={submitHandeler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
