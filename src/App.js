import React from "react";
import "./App.scss";
import List from "./Components/List";
import Form from "./Components/Form";
import { useSelector } from "react-redux";

const App = () => {
  const albums = useSelector((state) => state.albums.albums);
  const list = albums.length ? <List /> : null;

  return (
    <div className="favMusicList">
      <Form />
      {list}
    </div>
  );
};

export default App;
