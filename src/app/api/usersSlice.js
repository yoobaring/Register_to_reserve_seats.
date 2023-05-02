import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {users: []},
    reducers: {
        setAllusers : (state, action) => {
          state.users = [...action.payload]
        },
      },
})

export const { setAllusers } = usersSlice.actions

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
    state.users.find(user => user.id === userId)

export default usersSlice.reducer

// export const userIdSlice =  createSlice({
//   name: 'users',
//   initialState: {   
//                   register: {
//                     status: 0
//                   }
//                 },
//   reducers: {
//       setuser : (state, action) => {
//         state.users = [...action.payload]
//       },
//     },
// })