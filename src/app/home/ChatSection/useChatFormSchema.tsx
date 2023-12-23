import * as yup from 'yup';

export interface FormValues {
  chatInput: string;
}

const useChatFormSchema = () => {
  const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
    chatInput: yup.string().required('Can not submit empty chat'),
  });

  const initialValues = {
    chatInput: '',
  };

  return {
    validationSchema,
    initialValues,
  };
};

export default useChatFormSchema;
