import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface userState {
  value: boolean
}

const initialState: userState = {
  value: false,
}

export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isAuth: (state, action: PayloadAction<boolean>) => {
      state.value = !state.value
    },
  },
})

export const { isAuth } = userState.actions

export default userState.reducer