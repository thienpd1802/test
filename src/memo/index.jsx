import React, {memo} from 'react';
import PropTypes from 'prop-types';

DemoChildMemo.propTypes = {
    
};

function DemoChildMemo({variables}) {
    return (
        <div>
            {console.log('render memochild')}
            <h1>say hi</h1>
        </div>
    );
}

export default memo(DemoChildMemo);