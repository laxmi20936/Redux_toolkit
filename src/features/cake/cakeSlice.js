// install axios and reduxjs/toolkit
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfCakes:10,
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
      ordered:(state,action) => {
         state.numOfCakes  = state.numOfCakes -1 
      },
      restocked:(state,action) => {
         state.numOfCakes = state.numOfCakes  + action.payload
      },
    }
})

console.log("aaaaaallla",cakeSlice);
export default cakeSlice.reducer;
export const {ordered} = cakeSlice.actions;
export const cakeActions = cakeSlice.actions;