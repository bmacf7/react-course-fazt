import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar Tarea</button>
    </form>
  );
}

export default TaskForm;
