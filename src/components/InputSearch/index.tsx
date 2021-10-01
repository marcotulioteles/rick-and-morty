import React from 'react';
import { FiSearch } from 'react-icons/fi';

import {
  Label,
  Input    
} from './styles';

interface InputSearchProps {
  placeholder: string;
  inputType: string;
  inputName: string,
  inputID: string
}

export function InputSearch({ placeholder, inputType, inputName, inputID }: InputSearchProps) {
  return (
    <Label>
      <FiSearch size={24} style={{ marginLeft: "16px" }}/>
      <Input 
        placeholder={placeholder}
        type={inputType}
        name={inputName}
        id={inputID}
      />
    </Label>
  )
}