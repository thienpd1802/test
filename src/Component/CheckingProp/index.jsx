import React from 'react';
import PropTypes from 'prop-types';

CheckingPropFeature.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string,
};

CheckingPropFeature.defaultProps = {
    title: '12345'
}

function CheckingPropFeature(props) {
    return (
        <div>
            <span style={{color : props.color}}>{props.title}</span>
        </div>
    );
}

export default CheckingPropFeature;