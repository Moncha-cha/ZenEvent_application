import React from 'react';
import "../styles/components/_pageTemplate.scss";

const FormGroup = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </div>
  );
};

export default FormGroup;