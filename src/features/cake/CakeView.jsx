import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { ordered } from "./cakeSlice";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
    const dispatch= useDispatch();
    const cakesNumber = useSelector((state)=> state.cake.numOfCakes)
    console.log(cakesNumber,"nnn");
    const orderCake = () => {
    dispatch(ordered())
    }
    return(
        <div>
           <h2> Number of Cakes: {cakesNumber}</h2>
           <button onClick={orderCake}>Order Cake</button>
           <button onClick={()=> {dispatch(cakeActions.restocked(2))}}>Restock Cake</button>
        </div>
    )
}

export default CakeView;