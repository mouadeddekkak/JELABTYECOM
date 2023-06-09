import { createSlice } from "@reduxjs/toolkit";

// Create a users slice
export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET ALL users actions
        //GET ALL
        getUsersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // DELETE user action
        //DELETE
        deleteUsersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // UPDATE user action
        //UPDATE
        updateUsersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.users[
                state.users.findIndex((item) => item._id === action.payload.id)
                ] = action.payload.user;
        },
        updateUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

// Extract the action creators and reducer
export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    deleteUsersStart,
    deleteUsersSuccess,
    deleteUsersFailure,
    updateUsersStart,
    updateUsersSuccess,
    updateUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
