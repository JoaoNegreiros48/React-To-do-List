import ToDoItem from "./todoItem";

export default  function ToDoListItens({itens}) {
    let arrItens = []
    itens.forEach(item => {
        arrItens.push(<ToDoItem check = {item.check} text = {item.text}/>)
    });
    return (
        <div className="ListItens">
            {arrItens}
        </div>
    );
  }