import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignUpSchema = Yup.object({
  password: Yup.string().min(6).required('Please enter a password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const initialValues = {
  password: '',
  confirmPassword: '',
};

function SigninId() {
  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      navigate('/taskdetails')
      resetForm();
      console.log('Form reset.');
    },
  });


  return (
    <div className="mt-[12vh]">
      <div className='container flex flex-col items-center py-5 pb-10'>
        <form onSubmit={handleSubmit} className='w-full sm:w-[60%] lg:w-[38%] primary_shadow px-6 pt-4 pb-8 rounded-md' action="">
          <h3 className='text-[21px] sm:text-[25px] font-normal'>Sign up</h3>
          <div className='my-3'>
            <h1 className='text-lg font-medium'>Create your password</h1>
            <p className='mt-3 text-sm'>Your password provides you with sign in access to AWS, so it's important we get it right.</p>
          </div>
          <div className='mt-4' htmlFor='password'>
            <label htmlFor="password" className='dark-color text-[15px]'>Password</label>
            <input className='text-[14.5px] py-[6px] p-4 inline-block focus:outline-[#3388DD] border border-[#AAB7B8] rounded w-full mt-1'
              type='password'
              autoComplete='off'
              id='password'
              placeholder=''
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <p className='text-[#DB4444] text-[15px]'>{errors.password}</p>}
          </div>
          <div className='mt-3' htmlFor='confirmPassword'>
            <label htmlFor="confirmPassword" className='font-semibod dark-color text-[15px]'>Confirm password</label>
            <input className='text-[14.5px] py-[6px] p-4 inline-block focus:outline-[#3388DD] rounded border border-[#AAB7B8] w-full mt-1'
              type='password'
              autoComplete='off'
              id='confirmPassword'
              placeholder=''
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && <p className='text-[#DB4444] text-xs'>{errors.confirmPassword}</p>}
          </div>
          <button type='submit' className='text-sm text-center text-black bg-color inline-block w-full py-[6px] rounded mt-6 font-semibold tracking-wide'>Verify Password</button>
          <div className="flex items-end py-4 mt-2">
            <div className="border-t border-[#9ea4af] w-[37.5%] h-4"></div>
            <p className="text-center w-1/4">OR</p>
            <div className="border-t border-[#9ea4af] w-[37.5%] h-4"></div>
          </div>
          <div className='text-center mt-2 w-full border border-[#858585] hover:border-black py-1'>
            <Link to='/login' className='text-sm hover:text-black font-semibold tracking-wide'>Sign in with an existing account</Link>
          </div>
        </form>
        <div className='mt-10'>
          <p className='text-sm'>© 2024, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default SigninId;
