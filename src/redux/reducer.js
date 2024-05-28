import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tokenValue:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTokenValue(state,action){
        state.tokenValue = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setTokenValue } = counterSlice.actions

export default counterSlice.reducer