import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "books",
  initialState: { list: [] },
  reducers: {
    addBook: (state, action) => {
      // action.payload will be { title, author, genre, year }
      state.list.push(action.payload);
    },
  },
});

export const { addBook } = BookSlice.actions;
export default BookSlice.reducer;
