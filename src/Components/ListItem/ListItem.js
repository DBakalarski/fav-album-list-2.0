import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useDispatch } from "react-redux";
import { addToFavourite, removeAlbum } from "../../data/actions/album.action";
import "./listItem.scss";

const ListItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, isBest } = data;

  const handleRemoveAlbum = () => {
    dispatch(removeAlbum(id));
  };

  const handleAddToFavourite = () => {
    dispatch(addToFavourite(id));
  };

  return (
    <li className="favMusicListItem">
      <p className="favMusicListItem__title"> {title} </p>
      <div className="favMusicListItem__removeIcon" onClick={handleRemoveAlbum}>
        <DeleteOutlineIcon />
      </div>
      <div
        className={
          isBest
            ? "favMusicListItem__starIcon active"
            : "favMusicListItem__starIcon"
        }
        onClick={handleAddToFavourite}
      >
        {isBest ? <StarIcon /> : <StarBorderIcon />}
      </div>
    </li>
  );
};

export default ListItem;
