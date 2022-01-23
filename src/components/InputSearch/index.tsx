import React, { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
  Label,
  Input
} from './styles';

interface InputSearchProps {
  placeholder: string;
  inputType: string;
  inputName: string;
  inputID: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputSearch({ placeholder, inputType, inputName, inputID, onChange }: InputSearchProps) {
  return (
    <Label>
      <FiSearch size={24} style={{ marginLeft: "16px" }} />
      <Input
        placeholder={placeholder}
        type={inputType}
        name={inputName}
        id={inputID}
        onChange={onChange}
      />
    </Label>
  )
}