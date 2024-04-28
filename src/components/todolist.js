import ToDoTitle from './todoTitle';
import ToDoLine from './todoLine';

export default  function ToDoList() {
    return (
      <div className="ToDoList">
        <ToDoTitle />
        <ToDoLine />
      </div>
    );
  }