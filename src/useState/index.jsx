import React from 'react';
import { useState } from 'react';
import MemoChildDemo from '../memo/index';

MemoDemo.propTypes = {
    
};

function MemoDemo(props) {
    let [count, setCount] = useState(0)
    let [variables, setVariables] = useState(0)

    const handleIncre = () => {
        count = count + 1;
        setCount(count);
    }
    const handleDecre = () => {
        count = count - 1;
        variables++;
        setVariables(variables)
        setCount(count)
    }
    return (
       <div>
        <h1 id='txtNumber'>{count}</h1>
        <button onClick={handleIncre}>Incre</button>
        <button onClick={handleDecre}>Decre</button>
        <MemoChildDemo variables = {variables} />
       </div>
    );
}

export default MemoDemo;