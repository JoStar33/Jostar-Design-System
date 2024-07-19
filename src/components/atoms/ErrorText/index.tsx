import { ErrorMessage, FieldValuesFromFieldErrors } from '@hookform/error-message';
import { FieldErrors, FieldName, FieldValues, Path } from 'react-hook-form';
import { S } from './ErrorText.style';

interface Props<T extends FieldValues> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: Path<T>;
  errors: FieldErrors<T>;
}

export default function ErrorText<T extends FieldValues>({ name, errors, ...rest }: Props<T>) {
  return (
    <S.ErrorText {...rest}>
      <ErrorMessage errors={errors} name={name as unknown as FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>} />
    </S.ErrorText>
  );
}
