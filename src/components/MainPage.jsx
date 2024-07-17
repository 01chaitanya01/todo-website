import React, { useContext, useEffect, useState } from "react";
import "../styles/mainpage.css";
import { todoContext } from "../context/todoContext";
import ToDoList from "./ToDoList";
import Header from "./Header";

const MainPage = () => {
  const { filter, setFilter, taskData, setTaskData } = useContext(todoContext);

  const [taskinput, setTaskInput] = useState();

  const [allCount, setAllCount] = useState();

  const [completeCount, setCompleteCount] = useState();

  const [incompleteCount, setIncompleteCount] = useState();

  useEffect(() => {
    setAllCount(taskData.length);

    const completed = taskData.filter((task) => task.status === "complete");
    setCompleteCount(completed.length);

    const incomplete = taskData.filter((task) => task.status === "incomplete");
    setIncompleteCount(incomplete.length);
  }, [taskData, filter]);

  const handleInputTask = (e) => {
    setTaskInput(e.target.value);
  };

  // const EnterDate = () => {
  //   let today = new Date();
  //   let dd = String(today.getDate()).padStart(2, "0");
  //   let mm = String(today.getMonth() + 1).padStart(2, "0");
  //   let yyyy = today.getFullYear();

  //   today = mm + "/" + dd + "/" + yyyy;
  //   return today;
  // };

  const handleAddData = () => {
    if (taskinput.trim() !== "") {
      const newTask = {
        id: taskData.length ? taskData[taskData.length - 1].id + 1 : 1,
        task: taskinput,
        // date: EnterDate(),
        status: "incomplete",
      };
      setTaskData([...taskData, newTask]);
      setTaskInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleAddData();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleAddData]);

  return (
    <div className="main-container">
      <Header />
      <div className="main-page-header">
        <div className="main-page-header-content">
          <div className="input-container">
            <input
              type="text"
              value={taskinput}
              onChange={(e) => handleInputTask(e)}
            />
            <p className="add-btn" onClick={handleAddData}>
              Add
            </p>
          </div>

          <div className="todo-info-container">
            <div
              className={`todo-info ${
                filter === "all" ? "selected-filter-count" : ""
              }`}
            >
              <p className="todo-info-type">Total:</p>
              <p className="todo-count">{allCount}</p>
            </div>

            <div
              className={`todo-info ${
                filter === "complete" ? "selected-filter-count" : ""
              }`}
            >
              <p className="todo-info-type">Complete:</p>
              <p className="todo-count">{completeCount}</p>
            </div>

            <div
              className={`todo-info ${
                filter === "incomplete" ? "selected-filter-count" : ""
              }`}
            >
              <p className="todo-info-type">Incomplete:</p>
              <p className="todo-count">{incompleteCount}</p>
            </div>
          </div>

          <div className="filter-container">
            <p className="filter-text">Filter Task: </p>
            <p
              className={`filter-btn ${filter === "all" ? "all-filter" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </p>
            <p
              className={`filter-btn ${
                filter === "complete" ? "complete-filter" : ""
              }`}
              onClick={() => setFilter("complete")}
            >
              Complete
            </p>
            <p
              className={`filter-btn ${
                filter === "incomplete" ? "incomplete-filter" : ""
              }`}
              onClick={() => setFilter("incomplete")}
            >
              Incomplete
            </p>
          </div>
        </div>
      </div>

      <ToDoList />
    </div>
  );
};

export default MainPage;
