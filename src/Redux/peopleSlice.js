import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "user",
    initialState: {
        value: { userName: "", isLoggedIn: false }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = { userName: "", isLoggedIn: false };
        },
        updateUserInfo: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login, logout, updateUserInfo } = peopleSlice.actions;
export default peopleSlice.reducer;
