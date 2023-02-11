import React from "react";

const CreateTodoFiled = ({ setTodos }) => {
  const [title, setTitle] = React.useState("");
  const addTodo = (title) => {
    setTodos(prev => [ {
      id:new Date(),
      title,
      isCompleted: false,
    },...prev])
    setTitle('')
  }
  return (
    <div
      className="flex items-center justify-between  mb-4 
    rounded-2xl border-zinc-800 p-5 w-full border-2 px-5 py-3 "
    >
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        onKeyPress={e=>e.key === "Enter" 
        && addTodo(title)}
        placeholder="Add a task and Press Enter"
        className=" bg-transparent w-full border-none outline-none"
        />
    </div>
  );
};

export default CreateTodoFiled;
