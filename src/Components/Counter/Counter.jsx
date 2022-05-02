import React from 'react';
import {ACTION_TYPES} from '../../App';

function Counter ({ count = 0, dispatch, id }){

    const addCount = () => {
        dispatch({ type: ACTION_TYPES.CHANGE_ITEM_COUNT, id, count: +1 })
    }

    const subCount = () => {
        dispatch({ type: ACTION_TYPES.CHANGE_ITEM_COUNT, id, count: -1 })
    }

    return (
        <div className="counter">
            <button onClick={subCount}>-</button>
            <div>{count}</div>
            <button onClick={addCount}>+</button>
        </div>
    );
}

export default Counter;