'use client';

import { Button } from '@/components/ui/button';
import { useProfileStore } from '@/store/profileStore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateProfile = () => {
  const { setProfile } = useProfileStore();

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Profile</h2>
      <Formik
        initialValues={{ name: '', jobTitle: '', about: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          jobTitle: Yup.string().required('Required'),
          about: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setProfile(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <Field name="name" placeholder="Name" className="border p-2" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
            <Field
              name="jobTitle"
              placeholder="Desired Job Title"
              className="border p-2"
            />
            <ErrorMessage
              name="jobTitle"
              component="div"
              className="text-red-500"
            />
            <Field
              name="about"
              as="textarea"
              placeholder="About Me"
              className="border p-2"
            />
            <ErrorMessage
              name="about"
              component="div"
              className="text-red-500"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white p-2"
            >
              Save Profile
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProfile;
