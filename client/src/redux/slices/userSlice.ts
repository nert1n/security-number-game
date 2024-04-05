import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface userState {
  auth: boolean,
  name: string,
  surname: string,
  email: string,
  age: number
}

const initialState: userState = {
  auth: false,
  name: 'None',
  surname: 'None',
  email: 'None',
  age: 0
}

export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.auth = true
    },
    log_out: (state, action: PayloadAction<boolean>) => {
      localStorage.removeItem('token')
      state.auth = false
    },
  },
})

export const { setUser, log_out} = userState.actions

export default userState.reducer