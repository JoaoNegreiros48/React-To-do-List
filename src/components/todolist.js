import ToDoTitle from './todoTitle';
import ToDoLine from './todoLine';
import ToDoListItens from './todoListItens';
import ToDoAddItem from './todoAddItem';
import { useState } from "react";

export default  function ToDoList() {
    const [Itens, setItens] = useState([{check: true, text: "Tanto faz"}]);

    return (
      <div className="ToDoList">
        <ToDoTitle />
        <ToDoLine />
        <ToDoListItens itens={Itens}/>
        <ToDoLine />
        <ToDoAddItem />
      </div>
    );
  }