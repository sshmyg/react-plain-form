import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Form({
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

Form.propTypes = {
    children: PropTypes.func
};
