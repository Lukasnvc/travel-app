import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';

import contact from '../assets/contact.jpg';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  message: '',
}
const Contact = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true);
  };

  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Contact us</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2 gap-4'>
        <img className='w-full md:h-full object-cover p-2 max-h-[600px] h-[200px]' src={contact} alt="women standing img" />
   
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}

      >
        {({ isSubmitting, errors }) => (
          <Form className='grid grid-cols-2'>
               {errors.firstName ? (
                <div className='flex justify-center items-center'>{errors.firstName}</div>
              ) : null}
            <Field className='border m-2 p-2' name='firstName' placeholder='First' />
            {errors.firstName ? (
                <div className='flex justify-center items-center'>{errors.lastName}</div>
              ) : null}
            <Field className='border m-2 p-2' name='lastName' placeholder='Last' />
            {errors.firstName ? (
                <div className='flex justify-center items-center'>{errors.email}</div>
              ) : null}
            <Field className='border m-2 p-2' name='email' placeholder='Email' />
            {errors.firstName ? (
                <div className='flex justify-center items-center'>{errors.phone}</div>
              ) : null}
            <Field className='border m-2 p-2' name='phone' placeholder='Phone' />
            <Field className='border col-span-2 p-2 m-2' name='address' placeholder='Address' />
            {errors.firstName ? (
                <div className='flex justify-center items-center col-span-2'>{errors.address}</div>
              ) : null}
            <Field className='border col-span-2 p-2 m-2' name='message' as='textarea' cols='30' rows='10' placeholder='Message...' />
            {errors.firstName ? (
                <div className='flex justify-center items-center col-span-2'>{errors.message}</div>
              ) : null}
            <button className='col-span-2 m-2 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] md:col-span-2' type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
        </Formik>
        </div>
    </div>
  );
};


export default Contact