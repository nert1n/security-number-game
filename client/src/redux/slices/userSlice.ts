import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface userState {
  auth: boolean,
  name: string,
  surname: string,
  email: string,
  rank: number,
  age: number
}

const initialState: userState = {
  auth: false,
  name: 'Guest',
  surname: 'None',
  email: 'none.com',
  rank: 0,
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
      state.email = 'none.com'
      state.auth = false
    },
  },
})

export const { setUser, log_out} = userState.actions

export default userState.reducer