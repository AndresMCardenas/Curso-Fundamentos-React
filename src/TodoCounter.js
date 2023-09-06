import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1>
      Has Completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };