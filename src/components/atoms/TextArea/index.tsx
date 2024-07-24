import React from 'react';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import ErrorText from '../ErrorText';
import { S } from './TextArea.style';

interface ITextArea<T> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  name: Path<T>;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  isFocusing?: boolean;
  minHeight?: string;
  disabled?: boolean;
  required?: boolean;
  visibleError?: boolean;
}
export default function TextArea<T extends FieldValues>({
  name,
  label,
  maxLength,
  placeholder,
  isFocusing,
  minHeight = '220px',
  visibleError = true,
  required = false,
  disabled,
  ...rest
}: ITextArea<T>) {
  const {
    register,
    setFocus,
    watch,
    formState: { errors },
  } = useFormContext<T>();

  const textAreaWatchValue = watch(name);

  React.useEffect(() => {
    if (isFocusing) {
      setFocus(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusing]);

  return (
    <S.TextArea disabled={disabled}>
      <S.Label required={required}>
        {label}
        <span className="styled-label__required">(필수)</span>
      </S.Label>
      <S.StyledTextArea
        maxLength={maxLength}
        placeholder={placeholder}
        minHeight={minHeight}
        autoComplete="off"
        {...rest}
        {...register(name)}
        disabled={disabled}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {visibleError && <ErrorText errors={errors} name={name} />}
        {maxLength && !disabled && (
          <S.StyledTextCount>
            {textAreaWatchValue ? textAreaWatchValue.length : 0} / {`${maxLength}자`}
          </S.StyledTextCount>
        )}
      </div>
    </S.TextArea>
  );
}
