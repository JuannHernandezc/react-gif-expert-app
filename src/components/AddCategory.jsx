import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validateInputValue = inputValue.trim();
    if(validateInputValue.length <= 1) return;
    onNewCategory( validateInputValue );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  );
};
