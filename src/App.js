import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { todoContext } from "./context/todoContext";

function App() {
  const [filter, setFilter] = useState("all");

  const defaultData = JSON.parse(localStorage.getItem("taskData")) || [];

  const [taskData, setTaskData] = useState(defaultData);

  return (
    <div className="App">
      <todoContext.Provider
        value={{ filter, setFilter, taskData, setTaskData }}
      >
        <MainPage />
      </todoContext.Provider>
    </div>
  );
}

export default App;
