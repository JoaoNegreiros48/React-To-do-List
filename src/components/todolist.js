import ToDoTitle from './todoTitle';
import ToDoLine from './todoLine';
import ToDoListItens from './todoListItens';
import ToDoAddItem from './todoAddItem';

export default  function ToDoList() {
    return (
      <div className="ToDoList">
        <ToDoTitle />
        <ToDoLine />
        <ToDoListItens />
        <ToDoLine />
        <ToDoAddItem />
      </div>
    );
  }