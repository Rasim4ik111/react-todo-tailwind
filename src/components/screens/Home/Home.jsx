import React from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoFiled from "./create-todo-field/CreateTodoFiled";
//-----------------------------------------
//Это сделано норм, но добавляя много туду
//не удаляются задачи надо будет починить
//https://www.youtube.com/watch?v=sAa71agGwcg
//-----------------------------------------
const data = [
  {
    id:1,
    title: "Todo",
    isCompleted: false,
  }
];

const Home = () => {
  const [todos, setTodos] = React.useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };


  return (
    <div className="text-white w-4/6 mx-auto p-5">
      <h1 className=" text-2xl font-bold text-center mb-10">
        <a href="/">ToDo for Junior</a>
      </h1>
      <CreateTodoFiled setTodos={setTodos}/>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default Home;
