import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import {
    isPromise,
    isEqual,
    isEmpty
} from './helpers';

export default function withForm(WrappedComponent) {
    return class FormEnhancer extends Component {
        static propTypes = {
            children: PropTypes.func,
            defaultValues: PropTypes.object,

            validateOnChange: PropTypes.bool,
            validateOnBlur: PropTypes.bool,
            validateOnFocus: PropTypes.bool,
            onSubmit: PropTypes.func,
            onValidation: PropTypes.func
        }

        static defaultProps = {
            validateOnChange: true,
            validateOnBlur: true,
            validateOnFocus: true,
            onSubmit: () => {},
            /**
             * On validation, invoke on every validation step (onChange, onSubmit, onBlur)
             * @param {String} name
             * @param {String} value
             * @returns {Object} new Promise
             */
            onValidation: (name, value) => new Promise(res => res(true))
        }

        constructor(props) {
            super(props);

            this.state = {
                values: this.props.defaultValues || {},
                errors: {},
                isValidating: false,
                isErrors: false
            };
        }

        componentDidUpdate(prevProps, prevState) {
            const { errors } = this.state;

            if (!isEqual(errors, prevState.errors)) {
                this.setState({ isErrors: !isEmpty(errors) });
            }
        }

        getValues = () => {
            return this.state.values;
        }

        validateField = (name, value, options = {}) => {
            const { onValidation } = this.props;
            const { silent = false } = options;

            if (!silent) {
                this.setState({ isValidating: true });
            }

            return new Promise((res, rej) => {
                const validationRes = onValidation(name, value);

                if (!isPromise(validationRes)) {
                    throw new Error('onValidation should returns promise');
                }

                validationRes
                    .then(() => {
                        this.setState(state => {
                            const errorsClone = {...state.errors};
                            delete errorsClone[name];

                            return {
                                errors: errorsClone,
                                ...(
                                    !silent
                                        ? { isValidating: false }
                                        : {}
                                )
                            };
                        });

                        res({ [name]: value });
                    })
                    .catch(errors => {
                        this.setState(state => ({
                            errors: {
                                ...state.errors,
                                ...errors
                            },
                            ...(
                                !silent
                                    ? { isValidating: false }
                                    : {}
                            )
                        }));

                        rej(errors);
                    });
            });
        }

        /**
         * validateFields
         * @param {Array{}} fields [{name: 'email', value: 'a@a.com'}]
         * @returns {PromiseObject} fields
         */
        validateFields = fields => {
            const disableValidating = () => this.setState({ isValidating: false });
            const promises = fields.map(item =>
                this.validateField(item.name, item.value, { silent: true })
            );

            this.setState({ isValidating: true });

            return (new Promise((res, rej) => {
                Promise
                    .all(promises)
                    .then(result => {
                        disableValidating();
                        res(result);
                    })
                    .catch(err => {
                        disableValidating();
                        rej(err);
                    });
            }));
        }

        setValue = (name, value) => {
            if (!name) {
                return;
            }

            return new Promise(res => {
                this.setState(
                    state => ({
                        values: {
                            ...state.values,
                            [name]: value
                        }
                    }),
                    () => res(this.getValues())
                );
            });
        }

        handleChange = e => {
            const {
                setValue,
                validateField
            } = this;
            const { validateOnChange } = this.props;
            const { target } = e;
            const {
                name,
                value,
                type,
                checked
            } = target;
            const actualizedValue = type === 'checkbox'
                ? checked
                : value;

            if (!name) {
                throw new Error('name required');
            }

            setValue(name, actualizedValue)
                .then(() => validateOnChange && validateField(name, actualizedValue))
                .catch(() => {});
        }

        handleSubmit = e => {
            e && e.preventDefault();

            const {
                getValues,
                validateFields
            } = this;
            const { onSubmit } = this.props;
            const {
                isErrors,
                isValidating
            } = this.state;
            const formData = new FormData(e.target);
            const fields = [];

            if (isErrors || isValidating) {
                return false;
            }

            formData.forEach((value, name) => (
                fields.push({
                    name,
                    value
                })
            ));

            validateFields(fields)
                .then(() => onSubmit(getValues()))
                .catch(() => {});
        }

        collectProps = () => {
            return {
                values: this.getValues(),
                setValue: this.setValue,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                ...this.state
            };
        }

        render() {
            const { children } = this.props;

            return (
                <WrappedComponent {...this.collectProps()}>
                    { children }
                </WrappedComponent>
            );
        }
    };
}
