import { useState } from "react";
import "./App.css";
import Modal from "./modal";
import TodoItem from "./components/todoItem";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [todoArrayInP, setTodoArrayInP] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSaveData = (title) => {
    setTodoArrayInP((prevTodo) => [...prevTodo, title]);
  };

  const handleDelete = (indextoDelete) => {
    setTodoArrayInP((prev) =>
      prev.filter((_, index) => index !== indextoDelete)
    );
  };

  const handleUpdate = (indextoUpdate) => {
    setEditingIndex(indextoUpdate);
    setModalOpen(true);
  };

  return (
    <div className="box">
      {isModalOpen && (
        <Modal
          initialTitle={editingIndex != null ? todoArrayInP[editingIndex] : ""}
          onClose={() => {
            setModalOpen(false);
            setEditingIndex(null);
          }}
          onAdd={(title) => {
            if (editingIndex == null) {
              handleSaveData(title);
            } else {
              setTodoArrayInP((prev) =>
                prev.map((t, i) => (i === editingIndex ? title : t))
              );
            }
            setModalOpen(false);
            setEditingIndex(null);
          }}
        />
      )}
      <div className="todo-box">
        <div className="top-box">
          <div className="heading">
            <h2 style={{color: "white"}}>Todo-List 4</h2>
          </div>
          <div className="todo-items">
            { todoArrayInP.length!==0 ?
          todoArrayInP.map((item, index) => {
            return (
              <TodoItem
                key={index}
                name={item}
                onDelete={() => {
                  handleDelete(index);
                }}
                onUpdate={() => {
                  handleUpdate(index);
                }}
              />
            );
          }) : "Add todos to see it here..."}
          </div>
        </div>
        <div className="bottom-box">
          <button className="button-primary" onClick={() => setModalOpen(true)}>Add Todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
