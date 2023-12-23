'use client';
import React, { FC } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field } from 'formik';

interface FieldPasswordProps {
  name: string;
  label: string;
  placeholder?: string;
  showPassword: boolean;
  handleTogglePassword: () => void;
  className?: string;
}

// TODO: change icons
// MOVE COMPONENT FILE LOCATION

const FieldPassword: FC<FieldPasswordProps> = ({
  name,
  label,
  placeholder = '',
  className = 'w-full',
  showPassword,
  handleTogglePassword,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <Field
          type={showPassword ? 'text' : 'password'}
          name={name}
          className="w-full rounded-lg bg-red-200 px-4 py-2"
          placeholder={placeholder}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleTogglePassword}
          title="show password"
        />
      </div>
      <ErrorMessage name="password" component="div" />
    </div>
  );
};

export default FieldPassword;
