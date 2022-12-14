import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <li key={task.id}>
        <h3 className="text-xl font-bold capitalize">{task.title}</h3>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button
          className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar Tarea
        </button>
      </li>
    </div>
  );
}

export default TaskCard;
