import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Formax({
    children,
    ...props
}) {
    return (
        <Fragment>
            {
                typeof children === 'function'
                    ? children(props)
                    : children
            }
        </Fragment>
    );
}

Formax.propTypes = {
    children: PropTypes.func
};
