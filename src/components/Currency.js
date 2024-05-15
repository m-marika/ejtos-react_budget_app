import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext); // Получаем текущее значение валюты и функцию для его обновления
    const [selectedCurrency, setSelectedCurrency] = useState(currency); // Стейт для выбранной валюты

    // Обработчик изменения значения валюты
    const handleCurrencyChange = (event) => {
        const newCurrencyValue = event.target.value; // Получаем новое значение валюты из события изменения
        setSelectedCurrency(newCurrencyValue); // Обновляем состояние выбранной валюты
        dispatch({ type: 'SET_CURRENCY', payload: newCurrencyValue }); // Отправляем действие для обновления валюты в контексте
    };

    return (
        <div style={{ display: 'inline-block' }}>
            <select className="custom-select" id="inputGroupSelect01" value={selectedCurrency} onChange={handleCurrencyChange} style={{ backgroundColor: 'lightgreen', color: 'green', padding: '10px' }}>
                <option value="£ Pound" style={{ padding: '5px' }}>Currency (£ Pound)</option>
                <option value="$ Dollar">Currency ($ Dollar)</option>
                <option value="€ Euro">Currency (€ Euro)</option>
                <option value="₹ Ruppee">Currency (₹ Ruppee)</option>
            </select>
        </div>
    );
};

export default Currency;


