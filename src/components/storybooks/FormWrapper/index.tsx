import Button from '@/components/atoms/Button';
import { DefaultValues, FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { S } from '@/components/storybooks/FormWrapper/FormWrapper.style';

interface Props<T extends Record<string, any>> {
  children: React.ReactNode;
  defaultValues: DefaultValues<T>;
  resolver?: Resolver<T, any>;
  onSubmit: SubmitHandler<T>;
}

export default function FormWrapper<T extends Record<string, any>>({ children, defaultValues, resolver, onSubmit }: Props<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver,
  });

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="form-wrapper__container">{children}</div>
        <Button type="submit">등록</Button>
      </S.FormWrapper>
    </FormProvider>
  );
}
