import React, { useState } from 'react';
import PropTypes from 'prop-types';


ColorBoxFeature.propTypes = {
    
};

function ColorBoxFeature(props) {
    const [count, setCount ] = useState(0);
    return (
        <div>
            <div>
                {count}
                <button onClick={()=> setCount(x=>x+1)}>+</button>
                <button onClick={()=> setCount(x=>x-1)}>-</button>
            </div>
        </div>
    );
}

export default ColorBoxFeature;