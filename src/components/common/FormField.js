import React from 'react';
import PropTypes from 'prop-types';
import * as fn from 'lodash';
import { TextField } from 'material-ui';

let newId = 0;

const Input = props => {
  return (
    <TextField
      floatingLabelText={props.label}
      disabled={props.disabled}
      {...fn.omit(props, ['error', 'hasRequired', 'value'])}
      value={props.value || ''}
      onChange={evt => {
        props.onChange(evt.target.value);
      }}
    />
  );
};

const Checkable = props => ({
  /*
   <Checkbox
    disabled={props.disabled}
    {...fn.omit(props, ['error', 'hasRequired'])}
    onChange={(e, checked) => {
      props.onChange(checked);
    }}
    checkboxClass="icheckbox_square-blue"
    increaseArea="20%"
    checked={!!props.value}
  />
  */
});

const Textarea = props => (
  <textarea
    disabled={props.disabled}
    className="form-control"
    {...fn.omit(props, ['error', 'hasRequired'])}
    onChange={evt => {
      props.onChange(evt.target.value);
    }}
  />
);
const SelectBox = props => ({
  /*
   <Select
    disabled={props.disabled}
    simpleValue={!props.objectValue}
    isLoading={props.loading}
    {...fn.omit(props, ['error', 'hasRequired'])}
    onChange={value => {
      if (props.objectValue) {
        if (value) {
          props.onChange(props.options.find(opt => opt.value === value.value));
        } else {
          props.onChange();
        }
      } else {
        props.onChange(value);
      }
    }}
    name={props.name.toString()}
  />
  */
});

const FormField = props => {
  let Component;
  let labelFirst = true;

  switch (props.type) {
    case 'select':
      Component = SelectBox;
      break;
    case 'textarea':
      Component = Textarea;
      break;
    case 'checkbox':
      Component = Checkable;
      labelFirst = false;
      break;

    case 'radio':
      Component = Checkable;
      break;
    default:
      Component = Input;
  }

  const inputProps = fn.omit(props, ['className', 'style']);
  const name = props.name || newId++;
  const id = props.id || props.name;
  inputProps.id = id;
  inputProps.name = name.toString();

  if (labelFirst) {
    return (
      <div>
        <Component {...inputProps} />
      </div>
    );
  } else {
    return (
      <div>
        <Component {...inputProps} />

        <label htmlFor={id}>
          {props.label}{' '}
          {props.hasRequired && (
            <sup>
              {' '}
              <i className="fa fa-asterisk c-red" />
            </sup>
          )}
        </label>
      </div>
    );
  }
};

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
};
FormField.defaultProps = {
  className: '',
  label: '',
  required: false,
};

export default FormField;
