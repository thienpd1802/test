import React from 'react';
import PropTypes from 'prop-types';

PostFeature.propTypes = {
    
};

function PostFeature(props) {
    const {item} = props;
    return (
        <div>
            <img src={props.ImageUrl} />
            <h1>{props.Title}</h1>
        </div>
    );
}

export default PostFeature;