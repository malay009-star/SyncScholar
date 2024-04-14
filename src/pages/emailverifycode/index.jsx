import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function EmailVerifyCode() {
  const [queryParams, setQueryParams] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams)
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    setQueryParams(params);
    console.log(params)
    // if (params?.auth_mode) {
    //   setStationType(params.auth_mode)
    // }

  }, []);


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: Yup.object({
      code: Yup.string().required('verify code is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      navigate('/signuppassword')
      resetForm();
    },
  })



  return (
    <div className="mt-[12vh]">
      <div className='container flex flex-col items-center py-5 pb-10'>
        <form onSubmit={handleSubmit} className='w-full sm:w-[60%] lg:w-[38%] primary_shadow px-6 pt-5 pb-10 rounded-md' action="">
          <h3 className='text-[21px] sm:text-[25px] font-normal'>Sign up</h3>
          <div className='flex flex-col gap-4 mt-3'>
            <h1 className='font-semibold'>Confirm you are you</h1>
            <p className='text-sm'>Making sure you are secure -- it's what we do.</p>
            <p className='text-sm'>We sent an email with a verification code to <span className='font-semibold'>{queryParams.email}</span></p>
            <p className='text-sm'>Enter it below to confirm your email.</p>
          </div>
          <div className='mt-5'>
            <label htmlFor='code' className='text-sm'>Verification code</label>
            <input className='text-sm py-1 p-4 inline-block border border-[#AAB7B8] focus:outline-[#3388DD] w-full text-[#303030] mt-1 rounded'
              type='text'
              id='code'
              name='code'
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='off'
            />
            {errors.code && errors.code ? (<p className='text-[#DB4444] text-[12px]'>{errors.code}</p>) : null}
          </div>
          <button type='submit' className='text-sm text-black text-center bg-color inline-block w-full py-[6px] rounded mt-5 font-semibold tracking-wide'>Verify code</button>
          <div className='text-center mt-4 border border-[#858585] hover:border-black py-1 rounded'>
            <Link to='' className='text-sm hover:text-black font-semibold tracking-wider'>Resend code</Link>
          </div>
          <div className='mt-6'>
            <p className='text-sm'>Didn't get the code?</p>
            <li className='text-sm'>Codes can take up to 5 minutes to arrive.</li>
            <li className='text-sm'>Check your spam folder.</li>
          </div>
        </form>
        <div className='mt-10'>
          <p className='text-sm'>© 2024, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default EmailVerifyCode
