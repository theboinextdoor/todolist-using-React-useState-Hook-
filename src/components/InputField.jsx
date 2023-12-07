import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

const InputField = ({onNewItem}) => {
  const mystyle = {
    color: "green",
    fontSize: "2.5em",
  };

  const [todoName, setTodoName] = useState("");

  const handleNameChange  = (event) =>{
    setTodoName(event.target.value);
  }

  const handleAddButtonClick = () =>{
    onNewItem(todoName)
    setTodoName("")
  }
  return (
    <div className="flex items-center bg-slate-700 mx-2 font-myFont rounded-md md:mx-5 lg:mx-8 justify-between bg-opacity-50 backdrop-blur-sm">
      <input
        value={todoName}
        onChange={handleNameChange}
        type="text"
        placeholder="Add a Task"
        className="text-white text-xl ml-4 w-full my-2 px-1 py-3 bg-transparent font-medium outline-none"
      />
      <button 
      type="submit"
      className="mr-3"
      onClick={handleAddButtonClick}
      
       ><IoIosAdd style={mystyle} /></button>
    </div>
  );
};

export default InputField;
