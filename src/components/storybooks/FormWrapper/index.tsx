import Button from '@/components/atoms/Button';
import { DefaultValues, FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { S } from '@/components/storybooks/FormWrapper/FormWrapper.style';

interface Props<T extends Record<string, any>> {
  children: React.ReactNode;
  defaultValues: DefaultValues<T>;
  resolver?: Resolver<T, any>;
  onSubmit: SubmitHandler<T>;
  style?: React.CSSProperties;
}

export default function FormWrapper<T extends Record<string, any>>({ children, defaultValues, resolver, onSubmit, style }: Props<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver,
  });

  return (
    <FormProvider<T> {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="form-wrapper__container" style={style}>
          {children}
        </div>
        <Button margin="10px 0px 0px 0px" type="submit">
          등록
        </Button>
      </S.FormWrapper>
    </FormProvider>
  );
}
