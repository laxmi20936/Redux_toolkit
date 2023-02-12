import {React} from 'react';
import { icecreamAction, ordered } from './icecreamSlice';
import {useSelector, useDispatch} from 'react-redux'

const IcecreamView = () => {
    const icecreamNumber = useSelector((state) => state.icecream)
    const dispatch = useDispatch()
    const icecreamOrdered = () => {
        dispatch(ordered())
    }
    return(
        <div>
            <h1>ICECREAMS</h1>
            <h3>Number od Icrecream: {icecreamNumber.numOfIcecream}</h3>
            <button onClick = {() => icecreamOrdered()}>Ordered</button>
            <button onClick = {() => dispatch(icecreamAction.restocked(10))}>Restocked</button>
        </div>
    )
}

export default IcecreamView;