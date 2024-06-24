import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "white",
    menu: false,
  },
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "white") {
        state.theme = "dark";
      } else {
        state.theme = "white";
      }
    },
    toggleMenu: (state) => {
      if (state.menu === false) {
        state.menu = true;
      } else {
        state.menu = false;
      }
    },
  },
});

export const { toggleTheme, toggleMenu } = appSlice.actions;

export default appSlice.reducer;
