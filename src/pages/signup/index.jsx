import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('A account name is required.'),
  email: Yup.string().email().required('An email address is required.'),
})
const initialValues = {
  name: '',
  email: '',
}

function signup() {
  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      navigate(`/emailverificode?email=${values.email}`)
      resetForm();
    },
  })

  return (
    <div className="mt-[12vh]">
      <div className='container flex flex-col items-center py-5 pb-10'>
        <form onSubmit={handleSubmit} className='w-full sm:w-[60%] lg:w-[38%] primary_shadow px-6 pt-4 pb-10 rounded-md' action="">
          <h3 className='text-[22px] sm:text-[25px] font-medium text-black'>Sign up</h3>
          <div className='mt-5'>
            <label htmlFor="email">
              <h5 className='text-s sm:mt-2 font-medium'>User email address</h5>
              <p className='text-[12px] dark-color'>Used for account recovery and some administrative functions</p>
            </label>
            <input className='text-sm py-1 p-2 inline-block border border-[#AAB7B8] focus:outline-[#3388DD] w-full text-[#303030] mt-1'
              type='email'
              name='email'
              autoComplete='off'
              id='email'
              placeholder=''
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (<p className='text-[#DB4444] text-[12px]'>{errors.email}</p>) : null}
          </div>
          <div className='mt-4'>
            <label htmlFor="name">
              <h5 className='text-s font-medium'>Full name</h5>
              <p className='text-[12px] dark-color'>Choose a name for your account. You can change this name in your account settings after you sign up.
              </p>
            </label>
            <input className='text-sm py-1 p-4 inline-block border border-[#AAB7B8] focus:outline-[#3388DD] w-full text-[#303030] mt-1'
              type='text'
              name='name'
              autoComplete='off'
              id='name'
              placeholder=''
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p className='text-[#DB4444] text-[12px]'>{errors.name}</p>) : null}
          </div>
          <button type='submit' className='text-sm text-center bg-color inline-block w-full py-[6px] rounded mt-5 font-semibold text-black'>verify email address</button>
          <div class="flex items-end py-4 mt-1">
            <div class="border-t border-[#9ea4af] w-[37.5%] h-4"></div>
            <p class="text-center w-1/4">OR</p>
            <div class="border-t border-[#9ea4af] w-[37.5%] h-4"></div>
          </div>
          <div className='text-center mt-1 w-full border border-[#858585] hover:border-black py-1'>
            <Link to='/login' className='text-sm hover:text-black font-semibold'>Sign in with an existing account</Link>
          </div>
        </form>
        <div className='mt-10'>
          <p className='text-sm'>© 2024, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default signup
