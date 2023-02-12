import {createSlice} from '@reduxjs/toolkit';
import { ordered  as orderedCake} from '../cake/cakeSlice';

const icecreamSlice = createSlice({
    name:'icecream',
    initialState: {
        numOfIcecream : 40,
    },
    reducers:{
        ordered:(state) => {
            state.numOfIcecream = state.numOfIcecream - 1
        },
        restocked: (state, action) =>{
            state.numOfIcecream = state.numOfIcecream + action.payload
        }

    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIcecream = state.numOfIcecream -1
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(orderedCake, (state)=> {
            state.numOfIcecream = state.numOfIcecream - 2
        })
    }
})

export default icecreamSlice.reducer;
export const {ordered,restocked} =  icecreamSlice.actions;
export const icecreamAction = icecreamSlice.actions
