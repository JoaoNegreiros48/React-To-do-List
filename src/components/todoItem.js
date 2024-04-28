export default  function ToDoItem({check, text}) {
    return (
        <div className="Item">
            <input type="checkbox" checked={check}></input>
            <p>{text}</p>
            <span class="material-symbols-outlined">delete</span>
        </div>
    );
  }