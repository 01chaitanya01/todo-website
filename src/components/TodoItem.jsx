import React, { useContext } from "react";
import "../styles/todoitem.css";
import { FaRegCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { todoContext } from "../context/todoContext";
// import { GiConsoleController } from "react-icons/gi";

const TodoItem = (props) => {
  const { id, task, status } = props.data;

  const { taskData, setTaskData } = useContext(todoContext);

  const toggleStatus = (id) => {
    const newData = taskData?.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "complete" ? "incomplete" : "complete",
          }
        : task
    );

    setTaskData(newData);
  };

  const removeTask = (id) => {
    const index = taskData.findIndex((task) => task.id === id);

    if (index > -1) {
      const newData = [...taskData];
      newData.splice(index, 1);
      setTaskData(newData);
    }
  };

  return (
    <div
      className={`todo-item-container ${
        status === "complete" ? "complete-text" : ""
      }`}
    >
      <p className="check-btn" onClick={() => toggleStatus(id)}>
        {status === "complete" ? <FaCheck /> : <FaRegCircle />}
      </p>
      <p className={`task-text `} onClick={() => toggleStatus(id)}>
        {task}
      </p>
      {/* <p className="task-date">{date}</p> */}
      <p className="remove-btn" onClick={() => removeTask(id)}>
        <MdDelete />
      </p>
    </div>
  );
};

export default TodoItem;
