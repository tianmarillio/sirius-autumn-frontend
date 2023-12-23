import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import useChatFormSchema from './useChatFormSchema';

interface ChatFormProps {
  handleSubmit: (arg0: string) => Promise<void>;
}

const ChatForm: FC<ChatFormProps> = ({ handleSubmit }) => {
  const { initialValues, validationSchema } = useChatFormSchema();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit(values.chatInput);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid h-32 flex-initial place-content-center px-4">
          <Field
            type="text"
            className="mb-4 w-full rounded-md border-4 border-black px-4 py-2"
            name="chatInput"
            placeholder="Send message..."
          />
          <ErrorMessage
            name="chatInput"
            component="div"
            className="bg-red-400"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-800 pr-4 text-end font-bold text-primary disabled:bg-slate-400"
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ChatForm;
