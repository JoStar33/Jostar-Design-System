import React, { KeyboardEventHandler } from 'react';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import ErrorText from '@/components/atoms/ErrorText';
import { S } from './Input.style';
interface Props<T> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  disabledValid?: boolean;
  maxWidth?: string;
  disabled?: boolean;
  isFocusing?: boolean;
  enterKey?: boolean;
  readOnly?: boolean;
  visibleError?: boolean;
  value?: string;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

export default function Input<T extends FieldValues>({
  isFocusing,
  name,
  required = false,
  label,
  disabled = false,
  maxLength,
  minLength,
  type,
  placeholder,
  enterKey = true,
  readOnly = false,
  visibleError = true,
  value,
  inputStyle,
  labelStyle,
  ...rest
}: Props<T>) {
  const {
    formState: { errors },
    register,
    setFocus,
    watch,
    clearErrors,
  } = useFormContext<T>();

  const watchValue = watch(name);

  React.useEffect(() => {
    if (watchValue && watchValue.length !== 0) {
      clearErrors(name);
    }
  }, [clearErrors, name, watchValue]);

  React.useEffect(() => {
    if (isFocusing) {
      setFocus(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusing]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!enterKey && event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <S.Input disabled={disabled} readOnly={readOnly} {...rest}>
      {label && (
        <S.Label required={required && !disabled} htmlFor={name} style={labelStyle}>
          {label}
          <span className="styled-label__required">(필수)</span>
        </S.Label>
      )}
      <input
        id={name}
        type={type}
        className="input-container__content"
        disabled={disabled || readOnly}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        autoComplete="off"
        onKeyDown={handleKeyDown}
        value={value}
        style={inputStyle}
        {...register(name)}
      />
      {visibleError && <ErrorText errors={errors} name={name} />}
    </S.Input>
  );
}
