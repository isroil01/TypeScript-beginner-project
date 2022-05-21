import './App.css';
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';
import TodoContextProvide from './store/todos-context';


function App() {
 
  return (
    <TodoContextProvide>
      <NewTodo />
      <Todo  />
    </TodoContextProvide>
  );
}

export default App;
