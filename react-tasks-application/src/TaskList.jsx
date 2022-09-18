function TaskList({ tasks }) {
  if (!tasks.length) {
    return <h1>No hay tareas pendientes.</h1>;
  }

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
