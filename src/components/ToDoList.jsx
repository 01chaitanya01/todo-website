import React, { useContext, useEffect, useState } from "react";
import "../styles/todolist.css";
import { todoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";
import { FaCirclePlus } from "react-icons/fa6";

const ToDoList = () => {
  const { taskData, filter } = useContext(todoContext);

  const [displayList, setDisplayList] = useState(taskData);

  useEffect(() => {
    if (filter === "complete") {
      const filtered = taskData.filter((task) => task.status === "complete");
      setDisplayList(filtered);
    } else if (filter === "incomplete") {
      const filtered = taskData.filter((task) => task.status === "incomplete");
      setDisplayList(filtered);
    } else {
      setDisplayList(taskData);
    }

  }, [taskData, filter]);

  return (
    <div className="todo-list-container">
      {displayList.length > 0 ? (
        displayList?.map((task) => (
          <TodoItem
            key={task.id}
            data={{
              id: task.id,
              task: task.task,
              // date: task.date,
              status: task.status,
            }}
          />
        ))
      ) : (
        <div className="empty-list">
          <FaCirclePlus />
        </div>
      )}
    </div>
  );
};

export default ToDoList;
