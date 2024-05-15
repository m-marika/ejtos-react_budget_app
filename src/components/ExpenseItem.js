import React, { useContext } from 'react';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency[0]}{props.cost}</td>
        <td><FaPlusCircle color="green" size='2em' onClick={event=> increaseAllocation(props.name)}/></td>
        <td><FaMinusCircle color="red" size='2em' onClick={event=> decreaseAllocation(props.name)}/></td>
        <td><FaTimesCircle onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
