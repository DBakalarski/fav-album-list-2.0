import React from "react";
import "./App.scss";
import List from "./Components/List";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="favMusicList">
      <Form />
      <List />
    </div>
  );
};

export default App;
