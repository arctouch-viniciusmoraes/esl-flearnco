import { useState } from 'react';

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  function returnInputValue(value) {
    setInputValue(value);
    props.inputCallback(value);
  }

  return (
    <div className="Form-input__field-group">
      <label className="Form-input__label" htmlFor={props.fieldId}>{props.label}</label>
      <input
        className="Form-input__input"
        id={props.fieldId}
        type={props.inputType}
        value={inputValue}
        onChange={e => returnInputValue(e.target.value)}
      />
    </div>
  );
}

export default FormInput;