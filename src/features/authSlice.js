import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: "",
        isLogin: false,
        token: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.isLogin = true;
            state.token = action.payload.token;
        }
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;