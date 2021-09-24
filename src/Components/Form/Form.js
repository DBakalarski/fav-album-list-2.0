import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../data/actions/album.action";
import { v4 as uuidv4 } from "uuid";
import "./form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const [albumTitile, setAlbumTitle] = useState("");

  const handleInputChange = (e) => {
    setAlbumTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();

    if (!albumTitile) {
      alert("Fill album value");
      return;
    }

    dispatch(addAlbum(albumTitile, id));
    setAlbumTitle("");
  };

  return (
    <form className="favMusicList__form">
      <TextField
        onChange={(e) => handleInputChange(e)}
        value={albumTitile}
        id="standard-basic"
        label="favourite album"
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Add to List
      </Button>
    </form>
  );
};

export default Form;
