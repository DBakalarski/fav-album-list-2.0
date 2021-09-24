export const addAlbum = (title, id) => {
  return {
    type: "ADD_ALBUM",
    payload: {
      title,
      id,
    },
  };
};

export const removeAlbum = (id) => {
  return {
    type: "REMOVE_ALBUM",
    payload: id,
  };
};

export const addToFavourite = (id) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: id,
  };
};
