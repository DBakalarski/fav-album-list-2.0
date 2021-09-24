import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem";
import "./list.scss";

const List = () => {
  const albums = useSelector((state) => state.albums.albums);

  const list = albums.map((item) => {
    return <ListItem data={item} key={item.id} />;
  });

  return <ul className="favMusicList__list">{list}</ul>;
};

export default List;
