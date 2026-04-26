import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;

    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();

    // const newTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     return { ...todo, isCompleted: !todo.isCompleted };
    //   }
    //   return todo;
    // });
    // setTodos(newTodos);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto  mx-2 bg-[#97bbfa]  rounded-2xl p-4 my-4 min-h-[80vh] md:w-[45%]">
        <h1 className="font-bold text-center text-2xl md:text-3xl">
          iTask - Manage Your Todos at One Place
        </h1>
        <div className="addTodo my-4 flex gap-4 flex-col">
          <h2 className="text-xl font-bold text-center">Add a Todo</h2>

          <div className="flex gap-2">
            <input
              className="w-full bg-white rounded-full px-5"
              type="text"
              onChange={handleChange}
              value={todo}
            />

            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="bg-[#0a5ceb] text-white px-4 py-2 font-bold rounded-full
          text-sm  hover:bg-[#00246B] disabled:bg-[#4589c8]"
            >
              Save
            </button>
          </div>
        </div>
        <input
          type="checkbox"
          onChange={toggleFinished}
          name=""
          checked={showFinished}
          id="show"
          className="my-4 "
        />
        <label htmlFor="show" className="mx-5">
          Show Finished
        </label>

        <hr className=" opacity-20 w-[90%] mx-auto  my-4" />
        <h2 className="text-xl font-bold text-center">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to Display</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex  my-3 justify-between">
                  <div className="flex gap-5">
                    <input
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      name={item.id}
                      id=""
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-[#0a5ceb] text-white p-2.5 font-bold py-1 rounded-md text-sm mx-1 hover:bg-[#00246B]"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-[#0a5ceb] text-white p-2.5 font-bold py-1  rounded-md text-sm mx-1 hover:bg-[#00246B]"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
