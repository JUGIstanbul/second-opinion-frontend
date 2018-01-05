import React from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';
import styled from 'styled-components';
import Input from '../Input';

export default function AuthField({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) {
  return (
    <StyledAuthField>
      <AuthInput
        {...input}
        placeholder={placeholder}
        type={type}
        error={touched && error}
      />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledAuthField>
  );
}

AuthField.propTypes = {
  ...fieldPropTypes,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const StyledAuthField = styled.div`
  width: 100%;
  max-width: 380px;
  padding-bottom: 30px;
  position: relative;
`;

const AuthInput = styled(Input)`
  width: 100%;
  max-width: 380px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  width: 100%;
  max-width: 380px;
  left: 0;
  margin-top: 5px;
  font-size: 0.8em;
  color: ${props => props.theme.dangerColor};
`;
