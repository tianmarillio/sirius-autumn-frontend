import React, { FC } from 'react';
import { ErrorMessage, Field } from 'formik';

interface FieldTextProps {
  name: string;
  label: string;
  placeholder?: string;
}

const FieldText: FC<FieldTextProps> = ({ name, label, placeholder = '' }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <Field
          type="text"
          className="w-full rounded-lg bg-red-200 px-4 py-2"
          name={name}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name="username" component="div" className="bg-red-400" />
    </>
  );
};

export default FieldText;
