import React, { useState } from "react";
import Todos from "../models/todo";

type TodosContext = {
  item: Todos[];
  addTodo: (text: string) => void;
  remove: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContext>({
  item: [],
  addTodo: () => {},
  remove: (id: string) => {},
});

 const TodoContextProvide: React.FC<{children: React.ReactNode}>= (props) => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const addTodoHAndeler = (text: string) => {
    const newtodo = new Todos(text);

    setTodos((prev) => {
      return prev.concat(newtodo);
    });
  };
  const deletHandeler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  const context: TodosContext = {
    item: todos,
    addTodo: addTodoHAndeler,
    remove: deletHandeler,
  };
  return (
    <TodoContext.Provider value={context}>
     {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvide;