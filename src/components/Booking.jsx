import 'react-datepicker/dist/react-datepicker.css';

import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';

import DatePicker from 'react-datepicker';

const validationSchema = Yup.object({
  destination: Yup.string().required('Required'),
  checkIn: Yup.date().required('Required'),
  checkOut: Yup.date().required('Required'),
});


const Booking = () => {
  
  return (
    <div id='booking' className='max-w-[1140px] m-auto w-full p-4'>
      <Formik
        initialValues={{ destination: '', checkIn: '', checkOut: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
              <label htmlFor="destination">Destination</label>
              <Field id='destination' as="select" name="destination" className='lg:w-[300px] md:w-full border rounded-md p-2 z-10'>
                <option value="">Select a destination</option>
                <option value="turkey">Turkey</option>
                <option value="egypt">Egypt</option>
                <option value="cyprus">Cyprus</option>
                <option value="maldives">Maldives</option>
                <option value="sri_lanka">Sri Lanka</option>
                <option value="thailand">Thailand</option>
              </Field>
              {errors.destination && touched.destination ? (
                <div>{errors.destination}</div>
              ) : null}
            </div>
            <div className='flex w-full'>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor="checkIn">Check-In</label>
                <Field name="checkIn">
                  {({ field, form }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={val => {
                        form.setFieldValue('checkIn', val);
                      }}
                      dateFormat='dd/MM/yyyy'
                      className='border rounded-md p-2'
                    />
                  )}
                </Field>
                {errors.checkIn && touched.checkIn ? (
                  <div>{errors.checkIn}</div>
                ) : null}
              </div>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor="checkOut">Check-Out</label>
                <Field name="checkOut">
                  {({ field, form }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={val => {
                        form.setFieldValue('checkOut', val);
                      }}
                      dateFormat='dd/MM/yyyy'
                      className='border rounded-md p-2'
                    />
                  )}
                </Field>
                {errors.checkOut && touched.checkOut ? (
                  <div>{errors.checkOut}</div>
                ) : null}
              </div>
            </div>
            <div className='flex flex-col my-2 p-2 w-full'>
              <button className='w-full px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] ' type="submit">Prices and deals</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Booking;
