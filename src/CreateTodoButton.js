import './CreateTodoButton.css';

function CreateTodoButton() {  
  return (
    <button
      className='CreateTodoButton'
      onClick={() => console.log('Diste click')
      }
    >+</button>
  );
}

export { CreateTodoButton };