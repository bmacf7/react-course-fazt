function TaskCard({ task, deleteTask }) {
  return (
    <>
      <li key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
      </li>
    </>
  );
}

export default TaskCard;
