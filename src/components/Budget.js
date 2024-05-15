import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleSubmit = () => {
        dispatch({ type: 'SET_BUDGET', payload: parseInt(newBudget) });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency[0]}{budget}</span>
            <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
            <button onClick={handleSubmit}>Update Budget</button>
        </div>
    );
};
export default Budget;

