import { useContext } from "react";
import TaskCard from "./TaskCard.jsx";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (!tasks.length) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas pendientes.
      </h1>
    );
  }

  return (
    <div>
      <ul className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
