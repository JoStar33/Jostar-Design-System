import React from 'react';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import { S } from './Checkbox.style';

interface Props<T extends FieldValues> {
  name: Path<T>;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  value: PathValue<T, Path<T>>;
}

export default function Checkbox<T extends FieldValues>({ name, children, style, inputStyle, disabled, value }: Props<T>) {
  const { setValue } = useFormContext<T>();
  const handleClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, (event.currentTarget.checked ? value : undefined) as PathValue<T, Path<T>>);
  };
  return (
    <S.Checkbox htmlFor={`checkbox-${name}`} style={style}>
      <input style={inputStyle} value={value} id={`checkbox-${name}`} type="checkbox" disabled={disabled} onChange={handleClickCheckbox} />
      {children}
    </S.Checkbox>
  );
}
