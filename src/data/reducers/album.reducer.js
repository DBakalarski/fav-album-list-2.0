const initialState = {
  albums: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALBUM":
      return {
        albums: [
          ...state.albums,
          {
            id: action.payload.id,
            title: action.payload.title,
            isBest: false,
          },
        ],
      };

    case "REMOVE_ALBUM":
      return {
        ...state,
        albums: [...state.albums.filter((item) => item.id !== action.payload)],
      };

    case "ADD_TO_FAVOURITE":
      const findIndex = state.albums.findIndex(
        (item) => item.id === action.payload
      );
      const albums = [...state.albums];
      albums[findIndex].isBest = !albums[findIndex].isBest;

      return {
        ...state,
        albums,
      };
    default:
      return state;
  }
};

export default tasksReducer;
