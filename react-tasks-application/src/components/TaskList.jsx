import TaskCard from "./TaskCard.jsx";

function TaskList({ tasks, deleteTask }) {
  if (!tasks.length) {
    return <h1>No hay tareas pendientes.</h1>;
  }

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
