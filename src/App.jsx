import { useState } from "react";
import InputField from "./components/InputField";
import MyDay from "./components/MyDay";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItems from "./components/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (iteName) => {
    const newTodoItems = [...todoItems, { name: iteName }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButton = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="  bg-[url('./img/background.jpg')] min-h-screen w-full bg-center bg-cover p-1">
      <MyDay />
      <InputField onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} />
    </div>
  );
}

export default App;
