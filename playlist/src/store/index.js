import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/SongSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/MovieSlice";
import { reset } from "./actions";
const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

console.log(store.getState());

export { store, addSong, removeSong, addMovie, removeMovie, reset };
